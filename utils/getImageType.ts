
export default function getImageType(imagePath: string){
    var imageType: string = imagePath.slice(-4)
    if(imageType[0] === "."){
        return "png";
    }
    return imageType;
}