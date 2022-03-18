---
title: 'The Easiest Way to Achieve Dark-Theme'
date: '02/19/2022'
author: 'renato'
cover_image: 'cover'
excerpt: "How CSS variables works and an explanation about how we made our Dark-theme without reloading or packages, with CSS Only."
categories: [BLOG, DESIGN, PROGRAMMING, TUTORIAL, NEXTJS]
---

In this post, which is kind of a tutorial, I will show you how I [Renato](/team/renato) implemented this blog's dark theme system, how to implement it on your own with CSS only. How CSS variables work and why use CSS only for it instead of a simples package.

# Understanding CSS Variables
Like in any real programming language you can declare variables and use them, even not been a programming language you can declare variables in CSS as well. 

A CSS variable is declared using double-dash `--name` plus a semicoma and then the value of this variable:  `--example: blue;`.

These variables are created inside scopes and can only be used for those inside that scope. So if you create your variable in a `.blog-page{}` scope, it will only be available for its children.

Using a CSS variable is like calling a function `var()` with the parameter being the name of your variable. 

Look this example of the scope and use of a variable:
```css
.cool-page{
	--best-color: #382F60
}
.cool-page h1{
	color: var(--best-color)
}

.another-page h1{
	color: var(--best-color)
}
```

In the first `h1` use (*.cool-page h1*) the variable will work perfectly. But in the second one (*.another-page h1*) it will not work. Because the variable is only declared in the `.cool-page` scope.

CSS variables can be anything:
- Colors;
- Sizes;
- Fonts;
- Borders;
- Shadow;

And any kind of CSS value that can be used in CSS can be stored in variables to be used later.

When I started this website I created all my variables in the `:root` class, so every other element could use it (you can use HTML or body tag instead as well).

Another thing to notice is that you can **overwrite** variable values in another CSS element, so if you declare `--cool-color` in the *root* element, you can overwrite it inside of *body* and change the value for all those which are inside of it.

Those variables are very useful if you want to test palettes, change fonts easily, etc. So even if you are not going to a *dark-theme* implementation, I recommend you to use CSS variables.

## Making Dark Theme With CSS Only
So, you can define and use variables in all your code. If you define it all in the `:root` you can use it anywhere. Changing only one variable you will change the value for all the elements that use it.

The dark theme with CSS only is based on this idea:

> Build all your styles with variables, then, when you change the theme, change the value of all the variables.

To change these variables we can define the variables in the `body{}` element. Define your variables there and create a `body.dark{}` element as well and overwrite all the variables there:

```css
body{
	--cool-color: #382F60;
	--font-color: #2d2d2d;
}
body.dark-theme{
	--cool-color: black;
	--font-color: white;
}
```

The idea is to change the *body* class depending on the theme that you want to use.

---
If you declare all your variables and overwrite them in the `body.dark` you can already test it by adding a *class* to the *body* in your browser.

## Changing Themes Inside Next.JS
There are problems changing CSS inside *Next-JS* thus it's a server-side rendering, but it's still possible.

But first a context: I created a theme switcher on my page, and the code that I will explain now is inside this component.

---
Thus we are using Next-JS, we need to set some *useState* to manage the state of the theme. Then we can create a simple function to change the theme depending on the theme that is already set.

```jsx
 const [theme, setTheme] = useState('light-theme');

 const switchTheme = () => {
	 if(theme === 'dark-theme'){
		 setTheme('light-theme');
		 return;
	 }
	 else{
	 	setTheme('dark-theme');
	 }
 }
```

But until here we are just saving this value and not applying it in the class of the body. To do so, we will need a `useEffect()`. This *useEffect* has two reasons to be here.

The first is to let us know if the website is loaded, thus this function only executes when the website finishes the pre-load.

And the second is to know if the code is being executed in the server (during the server rendering) or during the client access.  That's why we need to have a **loaded** state. We will set this **loaded state** as *true* if the  `useEffect` execute and then we will pass to the *body* the class of the theme that we are at.

```js
 const [loaded, setLoaded] = useState(false);


 useEffect(() => {  // if we are at the client side,
	 setLoaded(true); //  set loaded as true
	 document.body.className = theme; // and add the class to the body
 });

```

If you don't use the `useEffect`, the framework might don't build the project or even don't run the page.

---
Now, when constructing your *theme switcher* you need to use this *load* variable to check if is everything allright to render (if we are at the client and if all the page has already been rendered):

```tsx
 return(
	 <div onClick={() => switchTheme()}>
		 {
			 loaded?
				[themeSwitcher]
			 : <></>
		 }
	 </div>
 )
 ```

## No Colors on Loading Problem
Thus, the code to decide the theme that is active only executes when the page loads. You may have a problem with no defined colors when your website starts to load (before the "choose theme" function be executed). To fix that you have two options:

### Option 1
Instead of creating two classes for the body `.dark-theme` and `.light-theme` you can create only one and add or remove it on the *change theme* code, instead of changing from one to another. In this way, the no-class colors will be loaded instantly.

### Option 2
You can define *general-colors* (that don't change) and main colors in the `:root` element. In this way, these *general-colors* will be loaded on start and overwritten if needed after the *change theme* code execute. This helps if you want to add more themes in the future and it's the option that I choose, mainly for readability.

```css
:root{
	--header-color: blue;
}
body.light-theme{
	/*just uses the defined in the :root*/
}
body.dark-theme{
	--header-color: black;
	/*overwrite the root color after the loading*/
}
```


## Other Methods
Of course, you could  use a package, but personally I always rather do it myself instead. In this way, you learn more about your tools and how things work.

Anyways, it's that. Any questions or advice you can send me on my [Twitter](https://twitter.com/nerat0). I always post some updates about this blog there as well. See ya!
