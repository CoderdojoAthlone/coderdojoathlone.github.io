---
layout:     default
lang:       en
ref:        resources
title:      Resources
parent:     index
breadcrumb: true
permalink:  /en/resources/
---

{% assign translatedPosts=site.posts      | where: 'lang', page.lang %}
{% assign resourcesPosts=translatedPosts  | where: 'parent', 'resources' %}

{% include post-list-by-month.html list=resourcesPosts %}
