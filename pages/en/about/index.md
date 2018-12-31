---
layout:     default
lang:       en
ref:        about
title:      About
parent:     index
breadcrumb: true
permalink:  /en/about/
---

{% assign translatedPages=site.pages | where: 'lang', page.lang %}

{% include split-50.html 
   sections="partial-class-information,partial-mentors-team" 
%}
