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
  We kindly ask everyone to apply
  [strict hygiene measures](https://www.education.ie/en/Schools-Colleges/Information/National-Emergencies-Public-Health-Issues/covid_19-poster-advice-for-schools.pdf)
  in order to ensure everyone's safety.
  <br/>
  Please note we may be forced to cancel sessions on a short notice.
  We will make sure to send out email to every registered member and post updates on Facebook.
{% endcapture %}

{% capture alertMessage %}
  Take part in the European Astro Pi Challenge, see more details [here]({{astroPiChallengePage.url | relative_url}})!
  <br/>
  Coolest Projects registration now open, see more details [here]({{coolestProjectsPage.url | relative_url}})!
{% endcapture %}

{% include alert.html
   type="danger"
   content=covidMessage
%}
{% include alert.html
   type="info"
   content=alertMessage
%}

{% include split-50.html
   sections="partial-class-information,partial-class-scratch,partial-class-web,partial-class-electronic"
%}
