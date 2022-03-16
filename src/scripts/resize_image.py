from PIL import Image


def resize_image(image: Image, width: int, height: int) -> Image:
    return image.resize((width, height),Image.ANTIALIAS)

def save_image(image: Image, folder: str, name: str):
    image_width, image_height = image.size
    print(image_width, image_height , sep='x')
    background = Image.new('RGB', (image_width, image_height), (85, 85, 85))
    bg_w, bg_h = background.size
    
    offset = ((bg_w - image_width) // 2, (bg_h - image_height) // 2)

    background.paste(image, offset)
    background.save(folder + name)
    print(f"Saved image {name} into {folder}")




if __name__ == '__main__':
    logo_sizes = [128, 144, 152, 192, 384, 512, 72, 96]

    save_path = './public/images/logo/sizes/'

    img = Image.open('./public/images/logo/sizes/logo-512-512.png')

    for size in logo_sizes:
        name_to_save = f'logo-{size}-{size}.png'
        resized_image = resize_image(img, size, size)

        save_image(resized_image, save_path, name_to_save)
