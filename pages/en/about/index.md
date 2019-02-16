---
layout:     default
lang:       en
ref:        about
title:      About
keywords:   about, history, mentors, team
parent:     index
breadcrumb: true
permalink:  /en/about/
---

{% assign translatedPages=site.pages | where: 'lang', page.lang %}

CoderDojo Athlone started in March of 2012. 
Since then our members have had the opportunities to participate in a number of events and competitions.

We are "open source, volunteer led," and part of a "Global Movement". 
Our aim is to provide a space for kids to meet and learn together in an informal and fun environment. 
Our volunteer mentors are available to share their knowledge and all children are encouraged to become mentors as they advance.

{% include split-50.html 
   sections="partial-class-information,partial-mentors-team" 
%}
