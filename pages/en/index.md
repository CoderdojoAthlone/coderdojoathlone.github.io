---
layout:     default
lang:       en
ref:        index
title:      Home
showTitle:  false
permalink:  /en/
---

{% assign translatedPages=site.pages       | where:'lang', page.lang %}
{% assign aboutClassesPage=translatedPages | where: 'ref', 'class-information'            | first %}
{% assign astroPiChallengePage=translatedPages | where: 'ref', 'esa-astro-pi-challenge-2019-2020' | first %}
{% assign coolestProjectsPage=translatedPages  | where: 'ref', 'coolest-projects-2020' | first %}

{% capture covidMessage %}
  Due to the ongoing COVID restrictions, there are no sessions running at the moment.
  We will make sure to send out email to every registered member and post updates on Facebook once we resume our sessions.
  Please follow the link above to register.
{% endcapture %}

{% include alert.html
   type="danger"
   content=covidMessage
%}

{% include split-50.html
   sections="partial-class-information,partial-class-scratch,partial-class-web,partial-class-electronic"
%}
