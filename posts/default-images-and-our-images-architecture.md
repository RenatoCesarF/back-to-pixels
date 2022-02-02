---
title: 'Default Images And Our images Architecture'
date: '02/01/2022'
author: 'renato'
cover_image: null
excerpt: "How I made our first default images and How does this system work behind the beauty"
code_language: 'javascript'
categories: [BLOG, DESIGN, PROGRAMMING, ARCHITECTURE]
code_theme: 'dracula'
---
I just finished the implementation of the default images that appear on posts that don't have a cover. It was something that wants to implement because those old flat colors were very ugly.

![posts-exemple](posts-exemple.webp)

The logic is to have those default images saved locally and just change the `cover_image` URL to a default one when the post doesn't have a `cover_image` defined. We can choose default cover images as well using **number**. 

## How To make Good-Looking Cover Images
Yes! Those images are pretty cool. I found an online generator of section-transition images to be used in websites, but the images are so cool that can be used anywhere (you can check out the [generator here](https://app.haikei.app/)).

![generator-site](generator-site.webp)

So I changed the colors and play a little bit with the configuration in some generation options and ended up with this ones:

![default-image-1](default-image-1.webp)

---

![default-image-2](default-image-2.webp)

---

![default-image-3](default-image-3.webp)

---

![default-image-4](default-image-4.webp)

---

# How The System Works

The system is very simple. We just verify if the `cover_image` variable is a valid image, or if it's of the type *Number*. If the image isn't valid or is a number we choose one of the four default images and use its URL instead. Let's see: 

## How We Store Posts Images

Before understanding how the default images work, you need to understand how we store our post-images in the first place. All the website logic, programming, design was made by me ([Renato](/team/renato)). And I do not have sure that this is the best architecture option to store posts images, but is the one that most fits my case. Maybe in the future, it changes (I hope not). But for now, it is what it is.

We have a **posts** folder in the root directory. inside this folder, there is every single post written in a `.md` format. The name of each post is its name in lower keys separated by a dash/trace `-`. For example, this post file name is `default-images-and-our-images-architecture`. This name serves as **slug**/ID for the post. Now inside our `public/images` folder, we have another **posts** folder, this one has one folder for each post written, the name of those subfolders are the same as the post that it belongs to. Inside those subfolders, we store all the images used in each post. 

![folder-organization](folder-organization.webp)

I think this is a good approach to storing multiple blog images. It would be a terrible solution to just throw every single image inside the same folder, and not separate it by post. How would you find an old image inside it? How would you manage thousands and thousands of images when the website grows?

Another thing is the dash/trace (`-`) nomenclature chosen. I know that CammelCase is good when you are coding, but it's good when you are using the code font, and not a file / OS font. It's terrible to read it in almost all common fonts. So the dash is a good choice. And why not an underscore (`_`)? To tell the truth, is simpler than it looks: it takes more work to type. Instead of using `shift + '-'` to write every simple space in the word, just use the dash. In the end, it's like a space-bar on the top of the keyboard :)

---

In this way, we have an organized way to store all our images knowing where each one is always.


## And The Default Images?

Each *default image* is saved in a `default-images` folder, inside `images/posts` as a number (1 to 4) in `webp` format (because of performance). 

Our "choose image function" is called `getCoverImage()`.

It receives a **slug** And a **image_name**. This *image_name* is set in the header of the `.md` file. It just contains the name of the image that will be on the cover. Why just the name? Because we already have the **slug** of the post (that is, the *name* of the post folder where all the images are). So we can get any image just using `images/posts/{slug}/{image_name}.webp`.

> I just realized that I can use this same strategy to get every single image inside the post. So instead of declaring it `images/posts/default-images-and-how-we-store-images/image-name.webp` we can just use `ìmages-name.webp` for now on!

Anyway, The first thing we do in our `getCoverImage()` is to create the return variable and check if the image exists or if the type of the variable is a number. 

```js
var coverImage;

if(!isImageCoverValid(slug, image_name) || typeof(image_name) === "number"){
	 var defaultImageIndex = image_name || Math.floor(Math.random() * 4) + 1;
	 coverImage = `/images/posts/default-images/${defaultImageIndex}.webp`;
	 return coverImage;
}
```

if it's a number, that means that the author wants to choose one of the default images. So just set the `defaultImageIndex` as this number. But if it is not valid (is null or starts with "HTTP" or is not in the post folder) choose a random number to get a random default image in the next line. So the cover image source string is made, and the value returned to the post.cover_image.

Now, if the image is valid, we just create the source path using the variables (slug and image_name) and return it:

```js
coverImage = `/images/posts/${slug}/${image_name}.webp`; 
return coverImage;
```

Look how the **isImageCoverValid()** works inside:

```js
const isImageCoverValid = (slug: string, image_name: any) => {
	const isImageTextValid: boolean = (
		typeof(image_name) === "string" && 
		!image_name.toString.startsWith('https')
	)

	if(image_name === null || !isImageTextValid ){
		return false;
	}

	var imageExistInFolder = false; 
	const images: Array<string> = readdirSync(join(`public/images/posts/${slug}`));

	for(let image of images) {
		 if(image.replace('.webp', '') === image_name){
			 imageExistInFolder = true;
			 break;
		 }
	}

	return imageExistInFolder;
}
```

We check if is a text and if has *HTTP* (we do not allow other cloud images). If is not null and is a valid text we create a variable `imageExistInFolder` and start to search for the image inside the post folder. If the image appears we *break* the loop and return that the image is valid. So doesn't need to use a default image. 


certainly

Of course, there is room for improvement all over it, (like creating the images with Python instead of using HTML tag to make the post date in the middle). But for now, it's this.

Anyways, this was the best post written until now. So I hope you enjoy it!