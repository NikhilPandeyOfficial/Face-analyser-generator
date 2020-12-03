# Set up

## Prerequisites
***imgaug*** librabry

### Installation
>pip install imgaug

## Placing the files
Place the *imageaug.ipynb* file and the *images* folder inside the root directory.

### Structure of the root folder
```
root
├── imageaug.ipynb
└── images
    ├── classA_folder
    │   ├──image1.jpg
    │   └──image2.jpg
    └── classB_folder
        ├──image1.jpg
        └──image2.jpg

```
# Output
Out put of the augmentation will be inside the *out* folder in the root directory.

```
root
├── imageaug.ipynb
├── images
│   ├── classA_folder
│   │   ├──image1.jpg
│   │   └──image2.jpg
│   └── classB_folder
│       ├──image1.jpg
│       └──image2.jpg
└── out
    ├── classA_folder
    │   ├──image1.jpg
    │   ├──aimage2.jpg
    │   ├──bimage1.jpg
    │   ├──cimage2.jpg
    │   ├──dimage1.jpg
    │   ├──eimage2.jpg
    │   ├──fimage1.jpg
    │   └──gimage2.jpg
    └── classB_folder
        ├──image1.jpg
        ├──aimage2.jpg
        ├──bimage1.jpg
        ├──cimage2.jpg
        ├──dimage1.jpg
        ├──eimage2.jpg
        ├──fimage1.jpg
        └──gimage2.jpg

```
In each image, 7 augmentations are applied:
1. Rotate left
2. Rotate rigth
3. Translate left
4. Translate right
5. Shear left
6. Shear Right
7. Horizontal Flip

Including the original file, we get a total of 8 images from 1 image.