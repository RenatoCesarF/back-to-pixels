---
title: 'The Way We Do MarkDown Transcriptions'
date: '09/02/2022'
author: 'renato'
cover_image: 'cover'
excerpt: "Explaining how our .md to HTML works and the new features I just implement"
categories: [BLOG, DESIGN, PROGRAMMING, NEXTJS]
---

All the posts of this website are written in `.md` files, which is a much much better way to write content without losing your mind with HTML opening and closing tags. Websites such as Medium, LinkedIn, and GitHub use this Markation language to save and write their posts and **READMEs**. So nothing better to use it as well. The Mark-Down also provides an easy way to write for a non-programmer person, so it's very good for our future teammates as well. Thus this is a static website all the mark-down translation happens in the build time, instead of in the "consuming" time. That is, this work is done by the server when a new version of the website comes out, and not by you, the lovely user. 

# Configuring the Mark-Down file
The `.md` file is configured by a header, where you can declare variables to use later, those variables can be anything, lists, numbers, string, etc. The configuration of this post looks something like this:

```yaml
---
title: 'The Way We Do MarkDown Transcriptions'
date: '09/02/2022'
author: 'renato'
cover_image: 'cover'
excerpt: "Explaining how our .md to HTML works and the new features I just implement"
categories: [BLOG, DESIGN, PROGRAMMING, NEXTJS]
---
```

The title, date, excerpt are very auto-explanation. The author is just a key to getting its info later and the categories the same (the upper case is just something for visualization). The cover image is very simples as well, is the name of the image that will be used as a cover. You can read more about the way we deal with images in [this post about it](/blog/default-images-and-our-images-architecture). 

After this header comes to the post itself. We use [grey-matter](https://www.npmjs.com/package/grey-matter) to separate the content and the header variables. Then we use a `createPost()` function to get the detailed information of the author and each category.

# The Transcription It Self 
In the first versions of this website, we used to use [markdown-it](https://www.npmjs.com/package/markdown-it) to transform `.md` files into HTML. But MarkDown-it has some problems, that is, fewer features.  MarkDown-it doesn't provide a replacement of translated HTML (so you cant use code highlight in code block). This package doesn't provide many other `.md` translation like
- check-boxes
- tables
- footer notes

Now, for the other side, [react-markdown](https://github.com/remarkjs/react-markdown) provides all of it and much more. Thus react-markdown uses remark as an API and it has some kind of modular separation, it provides the addition of plugins, such as remark and rehype plugins. React-markdown also provides a way to replace the HTML translated with functions. So if I want to change every link that has my name to a golden and shines name, I actually can.

## Amazing Possibilities
Using this kind of replacement I was able to replace every code block with a Prism Syntax Highlighter React element that can provide us with those beautiful code blocks. Or for example the replacement of every image by a zoomable image element that I created. Or even the stylization of our check-boxes. There are many other things to replace yet, and the code of it is very ugly but it is stills very useful in this case. 

I also realized some days ago this plugin thing of the package and added some of those to our project. Like tables and footer-notes. I still need to test it on smartphones, etc but it is already working[^1] . The go-to footer not is working fine, but the come back doesn't for no reason. Maybe I implemented something wrong, but it should work. The tables thing was something that I was missing up for future posts, and now I don't.

We still using grey-matter for the post card, thus the post just needs simple transcription.

---

Now, here is a table example to test it out:

Feature | status
-------| ------
Tables | done
Footer-notes | done
Hover-teammate-name | stylizing
zoomable-images | cool but not perfect
Dark-theme | don't have any idea
News-letter | what? how?
Writer/post info | Designing

## More Slylish Quotes
Another thing that I added thus those ones, was a property style for the `<blockquote>` component. That goes like this:

>Now I've heard there was a secret chord
That David played, and it pleased the Lord
But you don't really care for music, do you?

I'm not sure about this grey background, but I think it's ok!

# RSS Feeds
I still messing around with this, but anyways. Now we have an RSS feed generator script. So you can get its link and paste it into any Feed reader to have these posts in your App. It still with some images and date problems, but it works, and it's very cool.

* [x] RSS feeds and links component

Also created a simple component to hold these links at the end of each post and blog page. as you can see here ⬇️ 

[^1]: See?

