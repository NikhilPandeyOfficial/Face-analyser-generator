### Set up

#### Prerequisites
***imgaug*** librabry

##### Installation
>pip install imgaug

#### Placing the files
Place the *imageaug.ipynb* file and the *images* folder inside the root folder

##### Structure of the root folder
root
├── imageaug.ipynb
├── images
│   ├── classA_folder
│   └── classB_folder
│   └── classC_folder
│   └── classD_folder

### Output
Out put of the augmentation will be inside the *out* folder in the root.

root
├── imageaug.ipynb
├── images
│   ├── classA_folder
│   └── classB_folder
│   └── classC_folder
│   └── classD_folder
├── **out**
│   ├── **classA_folder**
│   └── **classB_folder**
│   └── **classC_folder**
│   └── **classD_folder**

In each image, 7 augmentations are applied:
1. Rotate left
2. Rotate rigth
3. Translate left
4. Translate right
5. Shear left
6. Shear Right
7. Horizontal Flip

Including the original file, we get a total of 8 images from 1 image.