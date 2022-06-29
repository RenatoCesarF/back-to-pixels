from pathlib import Path
from PIL import Image
import os



def main():
    postDirectory = "public/images/posts"
    authorsDirectory = "public/images/authors"

    images_paths = get_all_images_paths_from([postDirectory, authorsDirectory])
    
    for directory in images_paths:
        convert_images_from_directory(directory)
            
def get_all_images_paths_from(directories: list):
    path_list = []
    for directory in directories:
        path_list.append(Path(directory).glob("**/*.png"))
        path_list.append(Path(directory).glob("**/*.jpg"))
        
    return path_list

def convert_images_from_directory(directory):
    for file in directory:
        print(file)
        convert_to_webp(file)
        
def convert_to_webp(source):
    destination = source.with_suffix(".webp")

    image = Image.open(source)  # Open image
    image.save(destination, format="webp")  # Convert image to webp
    os.remove(source) #remove png

    return destination

main()