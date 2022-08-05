---
title: 'Implementing An Auto-Generated Summary'
date: '04/01/22'
author: 'renato'
cover_image: 'cover'
excerpt: "How to make a summary with anchor links to your website/blog titles with basic knowledge about Next.JS and programming logic!"
categories: [BLOG, TUTORIAL, PROGRAMMING, NEXTJS]
---

# What is an Anchor Link?
According to [doc.sitecore](https://doc.sitecore.com/xp/en/users/100/sitecore-experience-platform/create-an-anchor-and-link-to-it.html#:~:text=An%20anchor%20is%20an%20HTML,the%20middle%20of%20another%20page.) an **Anchor Links**

>**is an HTML code that is used as a bookmark to create a link to a particular section within a page**. For example, it could be a Back to top link that takes the user to the top of the current page, or it could be a link to a section in the middle of another page.

So, it's like bookmarks. You click on an anchor link and you get moved there automatically. It's pretty cool and I always found it very useful as well. Like in [Wikipedia](https://en.wikipedia.org/) pages, the summary made with anchor links helps you to find the exact part that you want.

And my idea was to have something like that in our blog as well. In the future, we will have big articles with multiple parts, and the anchor links are a good way to travel fast through the article.

# How Anchor Links Works 
To use an anchor link you need a `<a>` tag to serve as the redirector. But the key thing is the *href* passed to this tag, which is the ID of the item that you want to jump to. So if you want to go to the title **Why not use replaceAll()** from this you would need to add an id to this title inside its HTML:

```html
<h1 id="why-not-use-replaceall"> Why not use replaceAll() </h1>
```

So our `<a>` tag would look something like this:
```html
<a href="#why-not-use-replaceall"> Link to title </a> 
```
 Then, if you click on this tag, the website would search for an element with this id and scroll to it, turning your URL into.
 `https://backtopixels.vercel.app/blog/how-to-build-an-auto-gerenated-summary#why-not-use-replacealll`
 
 It's very simple to understand right? The browser just searches for the element with the same ID as the link.
 
 # Automating  Titles IDs
 Of course, you wouldn't add ids and links to every title that you have on your page, you can automate that very easily.
 
 I use [*react-markdown*](https://www.npmjs.com/package/react-markdown) to make the MarkDown transcription to HTML (you can read more about it in [this](/blog/the-way-we-do-markdown-transcription) post). With this package, you can actually change the returning element to each translation. So I can change every *h2* to an *h1* or add more styles, classes and etc. To add the IDs I could just format the text inside the *h1* and added it as the ID of this element, but you don't need to. You can just add the [remark-slug](https://www.npmjs.com/package/remark-slug) package as a plugin to the *react-markdown* and it does all this for you.
 
 ```jsx
<ReactMarkdown 
	   remarkPlugins={[remarkSlug]}>
	{yourMarkDown} 
</ReactMarkdown>
```
 
 That is half the work done!
 
 # The Summary component
 What the summary component will do is receive your markdown (you can receive the HTML as well if you want), find all the titles, separate them, format the links, and create a list of `<a>` tags with the name of the title as it's text, and the name formated as the link:
 ```jsx
<a href={`#${link}`}>{name}</a>
```
And then everything just works!

# Getting Titles and Links
As I said before, our component will receive the entire markdown to get the titles. To do so, we will separate all the text by its line breaks with `split("/n")`, and then search for the lines that start with *#*.
```js
const textLines = content.split('\n');
const titles: string[] = [];

textLines.map(((line: string) =>{ // for every line of the content
	if(line.startsWith("# ")){
 		titles.push(line); // get the line that starts with "#"
	}
}));
```

Now that we have every title separated we can format it to get the link. As I'm using typescript, I decided to transform it into an *interface*
```ts
interface TitleAnchorLink{
	href: string,
 	name: string,
}
```

Now we will declare two functions, one to **format** the link and another to generate the *TitleAnchorLink*:

```ts
const formatTitleLink = (title: string): string =>{
	let link = title.slice(2).toLowerCase().trim().split(" ").join("-");
	link = removeSymbolsFromLink(link);
	return link;
}
```
Let me explain, this **formatTittleLink** function: first we *slice* the first two characters from the line, because those characters are `# `, the declaration of the title in markdown, and we don't need it. Then we remove all extra spaces with `trim()` and finally we replace all spaces by trace (-). The reason why I used `split(" ").join("-")` instead of `replaceAll(" ", "-")` is because *replaceAll* is not supported in all browsers, and not supported by the Vercel server. The *split* separates our string in a list by every space, then the *join* transforms this list into a string separating every item by *-*.

Another thing to explain is this function *removeSymbolsFromLink*, as you may notice URLs don't have certain characters, like question-marks, exclamations, brackets, math signs and etc, that may appear in our titles. So we create a list of characters that should be removed, iterate through them, and replace the character with a blank space. 

```ts
const symbolsToRemove = ["?", "/", "@", "+",".", "!", "%", "$", "(", ")", "*", "<", ">", "&"];// you can add more if you want
const removeSymbolsFromLink = (link: string): string =>{
	symbolsToRemove.map((symbol: string) => {
		link = link.split(symbol).join(""); //remove symbol from the string
	});
	return link;
}
//This function still has room for improvement
```

Now we can use those functions in our *getTitleLinks*:

```ts
const getTitleLinks = (titles: string[]): TitleAnchorLink[] =>{
	 const titleLinks: TitleAnchorLink[] = [];
	 titles.map((title: string) =>{
		 const link = formatTitleLink(title);
		 title = title.slice(2);
	 	titleLinks.push({name: title, href: link});
	 });

	 return titleLinks;
}
```
Let's review what is been done.
1. Separate every line of the text
2. Get the lines that start with *#*
3. Remove the *#*, replace spaces with *-* and remove the unwanted sign
4. create the object *TitleAnchorLink* with that information

obs: I'm also removing the `# ` from our title itself, so it becomes just the title without MD notations

Now we have all the information we need to execute our Summary Component
```tsx
const AutoGeneratedSumarry = ({content}: AutoGeneratedSumarryProps) =>{ 
	const titles = getPostTitles(content);
	const titleLinks: TitleAnchorLink[] = getTitleLinks(titles);


	if(titleLinks.length == 0) return <></>;

	return(
		<div className="post-sumarry">
		<h3>Summary</h3>
			<ul>
				{titleLinks.map((anchor: TitleAnchorLink, index: number) => {
					return (
						<li key={index}>
							<Link passHref href={"#" + anchor.href}>
								{anchor.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
 	);
}
```

Let's see what this component does.
- First, get the TitleAnchorLinks using those cool functions
- Then, check if the list of Title links is empty, if they are, return an empty component
- Finally, for every link in our list, return an element with the content as the name and the link as a # followed by the formated link.

And it's done!

---
I added some CSS and the end result is this one

![gif-summary-result](git-summary-working.gif)

Of course, that exist some cool improvements that you can do, like an open and close animation, subtitles indented inside titles, and more. 

If you have any questions you can send them to me, Just open my profile ([Renato](/team/renato)) and send me on any social media.

There are many new things in this blog that I implemented since the last update, and this summary was one of those. I will write a post about the new stuff in the future.

Bye Bye!👋👋