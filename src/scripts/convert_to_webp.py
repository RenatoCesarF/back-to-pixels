from pathlib import Path
from PIL import Image
import os

def convert_to_webp(source):
    destination = source.with_suffix(".webp")

    image = Image.open(source)  # Open image
    image.save(destination, format="webp")  # Convert image to webp
    os.remove(source) #remove png

    return destination


def main():
    postDirectory = "public/images/posts"
    authorsDirectory = "public/images/authors"

    postsPathsPngs = Path(postDirectory).glob("**/*.png" )
    postsPathsJpgs = Path(postDirectory).glob("**/*.jpg")
    authorsPathPngs = Path(authorsDirectory).glob("**/*.png")
    authorsPathJpgs = Path(authorsDirectory).glob("**/*.jpg")

    images_path = [ postsPathsPngs, postsPathsJpgs, authorsPathPngs, authorsPathJpgs]
    
    
    for directory in images_path:
        for path in directory:
            print(path)
            convert_to_webp(path)


main()