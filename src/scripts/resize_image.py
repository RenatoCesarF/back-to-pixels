from PIL import Image, ImageDraw



def create_resized_logos():
    logo_sizes = [128, 144, 152, 192, 384, 512, 72, 96]

    save_path = './public/images/logo/sizes/'

    img = Image.open('./public/images/logo/transparent/logo-icon.png')

    for size in logo_sizes:
        name_to_save = f'logo-{size}-{size}.png'
        resized_image = resize_image(img, size, size)

        save_image(resized_image, save_path, name_to_save)

def resize_image(image: Image, width: int, height: int) -> Image:
    return image.resize((width, height),Image.ANTIALIAS)

def save_image(image: Image, folder: str, name: str):
    image_width, image_height = image.size
    print(image_width, image_height , sep='x')
    background = Image.new('RGB', (image_width, image_height), (85, 85, 85))
    bg_w, bg_h = background.size
    
    offset = ((bg_w - image_width) // 2, (bg_h - image_height) // 2)

    background.paste(image, offset)
    background.save(f"{folder}{name}")
    print(f"Saved image {name} into {folder}")



def crop_image(image: Image, desirable_height: int, desirable_width: int):
    width, height = image.size
    ''' 
    Daria pra ir aumentando a imagem até ela chegar ao tamanho necessário 
    para o crop acontecer corretamente. A questão é o quanto que se aumenta a imagem
    de forma que evite problemas de scale (perca de qualidade ou de aspecto)
    
    '''
    while desirable_width > width:
        desirable_width -= 10 
    while desirable_height > height:
        desirable_height -= 10 
    
    half_height = height/2
    half_width = width/2

    
    left_top_start_point = half_height - desirable_height/2
    right_bottom_end_point = half_height + desirable_height/2
    
    left_bottom_start_point = half_width - desirable_width/2
    right_top_end_point = half_width + desirable_width/2
    
    image_area = (
        left_bottom_start_point,
        left_top_start_point,
        right_top_end_point,
        right_bottom_end_point
    )
    
    final_image = image.crop(image_area)
    final_image.show()

    return final_image


img = Image.open('./gear.png')

save_image(crop_image(img, 682, 1072), "./", "resized.png")
# create_resized_logos()