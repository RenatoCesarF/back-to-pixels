---
title: 'A Provisional Logo And Name'
date: '01/24/22'
author: 'renato'
cover_image: 'provisional-logo'
excerpt: "Some improvements made since the last blog post and a provisional name and logo that we are using"
categories: [BLOG, DESIGN]
---

Some days ago one of our teammates [Tayna](/team/tayna) send me a Drive folder with some versions of a logo to this website. It's a really good-looking logo, and she created a Name as well **Coding Ideas**. 


I think it's a good name and a good logo. So thus we don't have a logo and name yet I decided to use those ones until we create (or not) a better one (I think it will be hard to happen).

So last day I visit [Bruno](/team/bruno), another teammate, and start to update all the website to this new logo (we ended up changing the colors as well).

Today I "finish" the implementation, the Twitter share still with some problems, but everything else is working properly.

Here's the blog page:
![blog-page-provisional-logo](new-blog-page.webp)

How it looks on share in Twitter and WhatsApp:
![logo-in-twitter](logo-in-twitter.webp)

---

![logo-in-wpp](logo-in-wpp.webp)

---

# Animations are very cool
Given that I've been searching a lot about meta tags, SEO, and other web development matters, other web developers blogs have been showing up for me with articles about that, one of them was the [Philu blog](https://phiilu.com/) It's a very well done React js Website so I study it's code and decided to add those kinds of animations for this Website as well.

The implementation is very simple, but with a pretty good-looking result.

![animations-gif](animations-gif.gif)

Basically, you change every `<div>` that you want to animate by a `<motion.div>` that comes from the package [**Framer Motion**](https://www.framer.com/) the base for the animations.

Then you can provide some options for each animated `div` (this is something that I don't fully understand yet). 

In the end, I added animations just for the important things, I regret it a little because the animations drop the performance of the page from 64 to 41 according to the [web.dev measure page](https://web.dev/measure/). 

Talking about that, the performance is something that is still very important after all. I need to implement `React.lazy` and other *serverSide* things to speed it up.

# In Development GIF
Another cool thing that I added was a [Lottie](https://lottiefiles.com/what-is-lottie) gif of "in development" to use in the pages that don't have content yet. It was pretty easy but I enjoy the feeling of it


![under-dev-gif](in-development.gif)

# Tag system
My main idea to filter the blog posts is to use a tag system, where each post can have many tags to make it easier for the user to find what he/she is looking for. In the future, you will be able to filter posts by any number of specific tags, searching its name and description or by author. 

There will be multiple types of tags, for projects, languages, categories, etc. There is no filter yet, but you can already see the tags in each post. If the post has more than 2 tags, you can hover it to reveal the others. It's a very cute animation though.

![tags-animation](tags-animation.gif)

# Last improvements
In this last week I didn't add new features, just fix animations, performance issues, and other CSS things. But one thing made me smile:

Before, to make the posts appear in Social Media as I showed in the [last post](/blog/discovering-meta-tags-plus-website-uptades). I needed to upload the cover image to the imigur website (that only accepts PNG and not WEBP) and link it in my blog post. But now I discovered that if I use the entire path I can use it normally in my post and the share continues working. It's something very stupid that made me happy.

---

But anyway, the development of this website continues in the next post. The fun thing is that I never know what is the next thing that I gonna add here, this mystery makes me excited to develop more