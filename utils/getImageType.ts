
export default function getImageType(imagePath: string){
    var imageType: string = imagePath.slice(-4)
   
    return imageType;
}