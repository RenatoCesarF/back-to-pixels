---
title: 'New Blog Features'
date: '01/04/2022'
author: 'renato'
cover_image: 1
excerpt: "Adding new stuff to this blog, it it's gettting very cool"
categories: [BLOG]
code_theme: 'dracula'
---


Add code highlight, and it's preaty cool! Like That:
```python
def preaty_cool_python_function(cool_param):
    if(not cool_param):
        return
    print(cool_param)
```

it has many themes and options.

All posts are writen in MarkDown files, so it's possible to choose a language in every code-section. And also choose a highlight theme for the post using the configuration header


Still need to add more themes (load each one from the package into a external file), but I think that it's a good idea after all.



But it bring some problems, for no reason each post (even the shortests ones like this) take almost 2 seconds to load. I think it's something about the new method of MarkDown parse that I'm using. Need to test it out.

After this session I will publish this "website" thus I can show for people easily

-----------

Another cool thing is that, if I didn't add cover image for the post, it will generate one. For now it still just an `<h1>`, but i will create more diversed things in the future. 