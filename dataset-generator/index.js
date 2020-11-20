const https = require('https');
const fs = require('fs');

const {API_KEY} = require("./env");

console.log(API_KEY)

const URL = `https://api.generated.photos/api/v1/faces?api_key=${API_KEY}&hair_color=black&per_page=100`;

let chunks = []

let objList = []

const req =  https.get(URL, (res) => {
    res.on('data',  (data) => {
        chunks.push(data);
    }).on('end', function() {
        const data = Buffer.concat(chunks);       
        // console.log('data came');
        
        const body = JSON.parse(data.toString());
        // console.log(body);
        console.log(body.faces.length);
        
        let i = 1;
        for(let face of body.faces){
            
            let obj = {};

            for(let metaI in face.meta){
                if(Array.isArray(face.meta[metaI])){
                    obj[metaI] = face.meta[metaI][0];
                }
            }
            

            for(let imgUrlObj of face.urls){
                
                for(let size in imgUrlObj){
                    const imgName = `${i}_${size}`;
                    
                    obj["image"] = `./images/${imgName}.jpg`
                    // console.log(imgName)
                    const file = fs.createWriteStream(`./images/${imgName}.jpg`);
                    const request = https.get(imgUrlObj[size], (response) => response.pipe(file));

                    objList.push(obj);
                }
            }

            i++;
        }
    
        console.log(objList[0]);
        for(let t in objList[0]){
            console.log(`${t} : ${objList[0][t]}`)
        }

        const createCsvWriter = require('csv-writer').createObjectCsvWriter;
        const csvWriter = createCsvWriter({
            path: 'dataset.csv',
            header: [
                {id: 'image', title: 'Image'},
                {id: 'emotion', title: 'Emotion'},
                {id: 'hair_length', title: 'Hair_length'},
                {id: 'hair_color', title: 'Hair_color'},
                {id: 'eye_color', title: 'Eye'},
                {id: 'gender', title: 'Gender'},
                {id: 'ethnicity', title: 'Ethnicity'},
                {id: 'age', title: 'Age'}
            ]
        });

        csvWriter
        .writeRecords(objList)
        .then(()=> console.log('The CSV file was written successfully'))
        .catch((e) => console.log('error occured'));
    });

})
