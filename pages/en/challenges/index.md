---
layout:     default
lang:       en
ref:        challenges
title:      Challenges
parent:     index
breadcrumb: true
permalink:  /en/challenges/
---

{% assign translatedPages=site.pages   | where: 'lang', page.lang %}
{% assign projectPosts=translatedPages | where: 'parent', 'challenges' %}

{% include article-list.html  list=projectPosts %}
