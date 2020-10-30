---
date: 2020-10-30
author: 
  name: Richard Henkenjohann
  avatar: /images/richard-avatar.jpg
title: Wie wir barrierefreie Webauftritte sicherstellen wollen
image: /images/sigmund-4MoIpDcSlr4-unsplash.jpg
teaser: Ein barrierefreier Webauftritt sorgt für gute Zugänglichkeit des Ferienpass-Angebotes – und ist gesetzlich vorgeschrieben.
tags:
 - Hintergrundwissen
---

Seit September 2018 ist digitale Barrierefreiheit für öffentliche Stellen in Europa Pflicht. Dies regelt die 
EU-Richtlinie mit der Nummer 2016/2102. Wir legen großen Wert auf eine zugängliche Webseite und zeigen Ihnen die
Evaluationsergebnisse einiger Zugänglichkeitstests.

## Automatisierte Evaluierung der Barrierefreiheit

Wir nutzen eine Reihe von Werkzeugen, um sicherzustellen, dass die von uns erstellen Webauftritte barrierearm sind. Hier
zeigen wir Ihnen zwei dieser Tools und dessen Evaluierungsergebnisse.

### WAVE

WAVE ist ein automatisiertes Testwerkzeug, das die Zugänglichkeit der Webinhalte visualisiert, indem es die Elemente auf
der Webseite annotiert. WAVE kann einfach über die Seite [https://wave.webaim.org](https://wave.webaim.org/) gestartet
werden.

So gibt das Tool Rückmeldung, ob die semantische Struktur der Webseite passt, Farbkontraste richtig verwendet und
annotiert viele weitere Elemente auf der Webseite.

Dieses Tool hilft uns, unsere Ferienpass-Auftritte auf Barrierefreiheit hin zu testen. In diesem Beispiel demonstriert
uns WAVE, dass der Webauftritt keine Probleme hinsichtlich der Zugänglichkeit aufweist.

![](/images/screenshot-wave.png)

### Lighthouse

Lighthouse ist ein automatisiertes Tool zur Messung der Qualität von Webseiten und direkt in Google Chrome integriert.
Der Lighthouse Accessibility Score ist ein gewichteter Durchschnitt aller Zugänglichkeitsprüfungen. Die Regeln basieren
auf denen von [axe](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md). Lighthouse kann 
einfach über [https://web.dev/measure/](https://web.dev/measure/) gestartet werden.

Auch mit diesem Tool evaluieren wir unsere Ferienpass-Webauftritte und streben eine volle Punktzahl an. Was uns gelingt.

![](/images/screenshot-lighthouse-a11y.png)

## Automatische Tests genügen nicht

Eine automatisierte Zugänglichkeitsprüfung kann nicht bestimmen, ob der Webauftritt zugänglich ist. Aber durch unsere 
maschinengestützte Evaluation sorgen wir für einen grundsätzlich barrierearmen Webauftritt, dessen Barrierefreiheit in 
einem [BITV-Test](https://www.bitvtest.de) attestiert werden kann.
