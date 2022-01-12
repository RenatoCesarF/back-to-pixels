---
title: 'Discovering Meta tags And Website Updates'
date: '01/11/2022'
author: 'renato'
cover_image: 'https://media.publit.io/file/metatags.png'
excerpt: 'How I maneged to make our posts look amazing in social midia using meta tags and new website features that I added recently'

categories: [BLOG, NEXTJS]
---

From now on, if you share one of our posts on *social media* it will look something like that:

![post-in-twitter](/images/posts/discovering-meta-tags-and-website-uptades/post-in-twitter.webp)

It also works in *instagram*, *whatsapp*, *facebook*, *Discord* and *LinkedIn*.

I have never known how this kind of interpretation was made. The only thing like that I knew was the RSS system that many podcast providers use. The RSS is a bunch of HTML tags with all the information of the podcast. First I thought that this cover image and description was based on RSS ass well. But no. It's all **Meta Tags**.

## More About Meta Tags

The only thing that I knew about meta tags is that they could change the *favi.icon*, the bar color, and the title of the website. But searching a little bit about meta tags to fix a Next.Js bug, I came across another kind of meta tags, with properties like *og* (OpenGraph) and *twitter*.

This *OpenGraph* protocol was created by facebook and:
> enables developers to integrate their pages into Facebook's global mapping/tracking tool Social Graph.
according to the [Facebook Platform Wikipedia](https://en.wikipedia.org/wiki/Facebook_Platform).
Over time more websites and social media start to use it as well.

## How I implemented it here

First I added a simple `<head>`component with general metatag info in the *_app.tsx* file. Info like:
- Creator
- Theme-color
- copyright
- og:locale

Since this kind of value doesn't change through the website.

---

And in every single page (Home, Team, Blog) I added more additional info like the description of the page and the title.
 
But the cool thing is on the *post* page. Each post, when generated as a static page, generates its meta tags with all its information. Sucha as:
- post Description
- post author
- keywords
- All the og tags 
    - type
    - url
    - title
    - image
- all twitter tags
    - card type
    - image
    - title
    - description
    - creator
    - domain

And more not so important tags, like height and width of images, etc.

Just using this it's possible to implement the cool share card in social Media. Look how my post tags look like now:

![post-meta-tags](/images/posts/discovering-meta-tags-and-website-uptades/post-meta-tags.webp)

The only thing that give me some problems was the Twitter postcard. I don't know why, but Twitter only accepts when you put the post image coming from the internet, and not local. I will make some new tests to see if this deduction is correct.

## New features in this website

Since the last update ([reunion 0.1](/blog/reunion-0-1)) I made some new things here. But the coolest and more important is the animations.

So yes, we finally added the Header, but the cool part is the animation that I, kind of, found. I was creating a *Media Query* for smartphones and then, when I was adding a transition of states, the VS code start to suggest some [Bézier curvs](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) as animations transition parameters. I tested someones and liked this one that I'm using now. After this, I study some animations from [codepen](https://codepen.io/) and made this one. Look how the header is looking great:

![header-animations](/images/posts/discovering-meta-tags-and-website-uptades/header-animations.gif)

I had some new animation ideas to implement in the future, so wait for it!