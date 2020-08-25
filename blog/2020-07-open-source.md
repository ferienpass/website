---
date: 2020-07-21
author: 
  name: Richard Henkenjohann
  avatar: /images/richard-avatar.jpg
title: ferienpass.online ist Open-Source-Software
image: /images/richy-great-MAYEkmn7G6E-unsplash.jpg
teaser: Der komplette Quellcode von ferienpass.online ist Open-Source. Was das bedeutet und welche Vorteile das bringt.
tags:
 - Hintergrundwissen
---

Mit dem heutigen Tag ist der vollständige Quellcode von ferienpass.online Open-Source. Dies bedeutet, dass der Quellcode
jederzeit eingesehen werden. ferienpass.online nutzt im Unterbau schon längst Open-Source-Software, nämlich maßgeblich
das [Contao Open-Source CMS][contao] für die CMS-Funktionalitäten und das [PHP-Framework Symfony][symfony].

Der ergänzende Quellcode von ferienpass.online ist auf [GitHub][github] einsehbar.

## Motivation einer Open-Source-Entwicklung

Es gibt zahlreiche Gründe, die dafür gesprochen haben, den Quellcode zu veröffentlichen.

1. **Nachvollziehbarkeit.** Die Funktion der Software kann von unabhängigen Dritten überprüft werden.
2. **Erweiterbarkeit.** Die Software kann unabhängig von meiner Person erweitert werden.
3. **Datenübertragbarkeit.** Durch die offenen Schnittstellen ist es möglich, Daten von einer anderen Software oder zu
einer anderen Software zu migrieren.
4. **Höhere Qualität.** Die Offenlegung des Quellcodes motiviert, die bestmögliche Software zu entwickeln, was zu einem
überlegenen Produkt führt.
5. **Mehr Sicherheit.** Open-Source-Software ist sicherer. Schwachstellen sind in der Regel für alle sichtbar, sodass es
viele Augen gibt, die nach Risiken suchen.
6. **Einfacher zu auditieren.** Die Verfügbarkeit des Quellcodes ermöglicht es, Sicherheits- und Leistungsstandards zu
überprüfen. Die eingebaute Offenheit und Transparenz resultiert in weitaus größere Flexibilität.
7. **Kein Vendor-Lock-In.** Im Zweifel sind Sie nicht abhängig von der Softwarefirma, die die Webseite erstellt, sondern
es besteht die Möglichkeit, dass die Weiterentwicklung intern passiert oder von anderer externer Stelle passiert.

## Open-Source aber nicht kostenfrei

Der Quellcode von ferienpass.online ist öffentlich einsehbar, der Quellcode ist aber nicht unter einer der gängigen
Open-Source-Lizenzen veröffentlicht, die eine kostenlose Nutzung ermöglichen würde. **Der Quellcode ist properitär und 
eine Nutzung der Software ist nur in meiner Zusammenarbeit erlaubt.**

Zukünftig wird es ein Demo-Projekt geben, dass Entwickler:innen erlaubt, die Software lokal, in einem nicht-öffentlich
erreichbaren Projekt, zu testen.

## Nicht nur Open-Source, sondern auch Open-Knowledge

Im Rahmen der Transparenz veröffentlichen wir auf der Seite [docs.ferienpass.online][docs] sämtliche Ressourcen, die im
Zusammenhang mit dem Projekt stehen. Primär als Dokumentation und Wissensdatenbank für die Anwender:innen der 
Ferienpass-Software gedacht, werden hier auch andere Wissensressourcen veröffentlicht. So kann man dort nachlesen, wie 
die Software aufgebaut ist und aus welchen Bestandteilen sie besteht. Auch findet sich in der Wissensdatenbank eine 
Dokumentation über die Auftragsverarbeiter und ein Link zu den jeweiligen AV-Verträgen.


[contao]: https://contao.org/de/
[symfony]: https://symfony.com/
[github]: https://github.com/ferienpass/
[docs]: https://docs.ferienpass.online/
