---
layout:     default
lang:       en
ref:        projects
title:      Projects
parent:     index
breadcrumb: true
permalink:  /en/projects/
---

{% assign translatedPosts=site.posts    | where: 'lang', page.lang %}
{% assign projectPosts=translatedPosts  | where: 'parent', 'projects' %}

All projects page EN

{% include post-list-by-month.html list=projectPosts %}
