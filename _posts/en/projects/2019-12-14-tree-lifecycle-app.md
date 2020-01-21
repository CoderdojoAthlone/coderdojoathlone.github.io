---
layout:       article
lang:         en
parent:       web-projects
breadcrumb:   true
permalink:    /en/projects/web-projects/tree-lifecycle-app-2019/
ref:          2019-12-14-tree-lifecycle-app
title:        Tree lifecycle App
author:       Christian
description:  Discover the tree lifecycle from seed to mature tree
tags:         HTML, JavaScript, CSS
keywords:     addEventListener, application, css, event handler, getElementById
code:         true
---

Welcome to the first article to my first project.
My name is Christian and I have been using **HTML JAVASCRIPT** and **CSS** for over a half of a year.

This project is about the tree cycle.
My main objective for this project was to have it working smoothly and I accomplished that objective.

<img class="img-fluid" src="{{'assets/posts/2019-12-14-tree-lifecycle-app/app-tree-lifecycle.png' | relative_url}}"/>

---

<div class="text-center">
<a href="/assets/posts/2019-12-14-tree-lifecycle-app/" target="_blank" style="font-size: 1.8rem">DEMO</a>
</div>

---

### How it works

So I planned my project with four boxes: **Title, Button Holder, Images** and **paragraph**.
The **Title** shows the title of the page.
The **button holder** holds all my buttons.
The **Images** is where the images go.
The **paragraph** is where my text is gonna go.
So if you press one of the buttons an image will appear and text goes in their separate apartments.
If you press another one of the buttons the original text and image will disappear and another set of text and image appears.
So here's the functions behind this.

#### Buttons

```html
<div id="buttonholder">
  <button class="button" onclick="hide();seed();hello();" >seed</button>
  <button class="button" onclick="hide();sprout();bye();">sprout</button>
  <button class="button" onclick="hide();sapling();say();">sapling</button>
  <button class="button" onclick="hide();smalltree();roar();">small tree</button>
  <button class="button" onclick="hide();maturetree();mild();">mature tree</button>
  <button class="button" onclick="hide();fruitseed();roast()">fruit with seeds</button>
</div>
```
So when you click the buttons it will execute three functions: `hide();` , image example `seed();` , text example `hello();`

#### Functions

```js
function hide() {
  var buttonId = ["intropic", "intro", "oldtree", "appleseedtree", "sprouttree", "saplingtree", "smalltree", "seedtree", "helloword", "byeword", "sayword", "roarword", "mildword", "roastword"];

  for (var i = 0; i < buttonId.length; i ++) {
    document.getElementById(buttonId[i]).style.display = 'none';
  }
}
```
Here we have the function of `hide()`: So i made a for loop to shorten the code example I would have made a function for each variable.
The variable `buttonId` holds all of the variables which is called a array.
So the actual for loop has made a variable `i` that starts at zero, example `buttonId[0]="intropic"`.
If `i` is less than the amount of variables (`buttonId.length`) its going to add `i++` (+1) so that means its going to go through all the variables.
The hiding takes place when the document gets element by id which is `buttonId` attached with the array `i` so the display equals to none (not show).
So the array is gonna go through all the variables and hide them.

```js
function sapling() {
  var x = document.getElementById("saplingtree");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
```

Here is the function for the images.
The `x` is equals to variable ("saplingtree") the image.
I made an condition if that if `x` is displayed none (not showing) `x` is displayed block (showing) if else `x` is displayed to none.

```js
function bye() {
  var text = document.getElementById("byeword");

  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
```

Here is the function for the text, it is similar as the image except for the name of the variable.

```css
#seedtree {
  display: none;
}
```

In **CSS** I made the text and the images to `display: none`. If I refresh the page also made text and made to appear when page refreshed.

```html
<head>
  <link rel='stylesheet' type='text/css' href="tree.css">
  <script type="text/javascript" src="tree.js"></script>
</head>
```
JavaScript and CSS are linked in HTML to work together.

---
Thank you for reading my article which is the first one I did for Tree Cycle.
