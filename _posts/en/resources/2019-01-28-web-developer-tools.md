---
layout:       default
lang:         en
ref:          web-developer-tools
title:        Web developer tools
author:       Marc Raffalli
description:  Learn about the standard web development tools and their tips and tricks. 
date:         2019-01-28
parent:       resources
breadcrumb:   true
permalink:    /en/resources/web-developer-tools/
---

### Chrome DevTools

Written with screenshots from `Chrome 71.0.3578.98`.
The interface may differ based on theme and version. 

#### Elements

- Explore the HTML structure of the page
- Edit and tweak the CSS but don't refresh the page!

Element style rules and tools:

Mouse over the three dots on the bottom right of any element CSS rules 

<img class="img-fluid" src="{{'assets/posts/web-developer-tools/elements-element-style-editor.png' | relative_url}}"/>

- Easily pick a `background-color` or a text `color`
- Play around with `box-shadow`, `text-shadow` using the element style editors   
<img class="img-fluid" src="{{'assets/posts/web-developer-tools/elements-box-shadow-editor.png' | relative_url}}"/>

#### Sources

- Open any loaded file using `Ctrl + o`
- Follow the execution of JS step by step using the debugger and breakpoints
- Right click on the breakpoints to add a stopping condition with `Edit breakpoint...`

#### Network

- Find out loaded resources and quickly fix broken paths 

#### Console

- Execute any snippet of JS and discover the available functions

#### Device toolbar

The device toolbar allows to simulate different screens / devices to test the responsive behavior.

- Display the media-queries using the three dots menu `Show media queries`  
<img class="img-fluid" src="{{'assets/posts/web-developer-tools/device-toolbar-top.png' | relative_url}}"/>

- Simulate most popular phones and tablet on the market   
<img class="img-fluid" src="{{'assets/posts/web-developer-tools/device-toolbar-device-list.png' | relative_url}}"/>

#### Settings

Access the settings of the DevTools by pressing `F1` or by clicking on the three dots on the top right of the DevTools panel => Settings 

<img class="img-fluid" src="{{'assets/posts/web-developer-tools/settings-open-panel.png' | relative_url}}"/>


The same panel allows to dock the DevTools on different sides of the browser or having it on a separate window. 

- Change the theme (light / dark) on the settings  
<img class="img-fluid" src="{{'assets/posts/web-developer-tools/settings-theme.png' | relative_url}}"/>


- Disable the cache when the Dev tool is opened. It will prevent the browser to keep and render older content.  
<img class="img-fluid" src="{{'assets/posts/web-developer-tools/settings-disable-cache.png' | relative_url}}"/>

### More

Read more on the [official documentation](https://developers.google.com/web/tools/chrome-devtools/)
