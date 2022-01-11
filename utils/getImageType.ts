
export default function getImageType(imagePath: string){
    var imageType: string = imagePath.slice(-4)
    if(imageType[0] === "."){
        imageType = imageType.slice(-3);
        return imageType;
    }

    imageType = imageType.slice(-4);
    return imageType;
}