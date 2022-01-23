from PIL import Image

image_proper_size = [536,341]

image_path = "./public/images/posts/discovering-meta-tags-and-website-uptades/"
image_name = "metatags.jpg"

img = Image.open(image_path+image_name, 'r')
img_w, img_h = img.size
print("Opened image")


if img_w > 536 or img_h > 341:
    img.resize((536,341),Image.ANTIALIAS)
    img_w, img_h = img.size
    print("Resize image")


background = Image.new('RGB', (536, 341), (85, 85, 85))
bg_w, bg_h = background.size
print("Create background")

offset = ((bg_w - img_w) // 2, (bg_h - img_h) // 2)

background.paste(img, offset)
background.save(image_path + "out-" + image_name)
print("Save new image")