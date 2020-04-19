---
date: 2020-03-05
author: 
  name: Richard Henkenjohann
  avatar: /images/richard-avatar.jpg
title: Die Erstellung von Drucklayouts erneut vereinfacht
image: /images/apple-computer-desk-devices-326501.jpg
teaser: Bisher empfohlen wir InDesign, um die Drucklayouts händisch zu erstellen. Heute erzeugen wir druckfertige PDFs auf Knopfdruck.
tags:
 - Neue Funktion
---

## Möglichkeiten zur Erstellung der Drucklayouts

ferienpass.online gibt Ihnen eine Reihe Möglichkeiten, die Ferienpass-Angebote aus dem Programm zu exportieren. Sie 
können die Ferienpass-Angebote als XLSX exportieren, um sie in Microsoft Excel zu öffnen oder als iCal, um die Angebote 
in einem Kalender-Programm (z. B. Outlook) anzeigen zu lassen.

Beide Export-Formate eignen sich nur, um einen Überblick über die Angebote zu verschaffen, aber nicht, um den 
Ferienpass in den Druck zu geben. Für die Erstellung der Drucklayouts bieten wir eine XML-Schnittstelle an, welche die
Angebote in ein Format exportiert, das von InDesign lesbar ist. Seit heute bieten wir zusätzlich den Export als PDF an.


## XML-Export

Als ich die XML-Schnittstelle für den Alfelder Ferienpass programmiert habe, wurde InDesign zur Erstellung der Layouts 
eingesetzt. Zur Erstellung der Druckdateien wurden alle Seiten händisch im Programm erstellt. Mit der Einführung des 
Online-Ferienpasses galt es, diesen Prozess zu optimieren. 

Eine Google-Suche ergab, dass InDesign das XML-Format unterstützt, mit dessen Hilfe ganz einfach strukturierte Daten 
importiert werden können. Einige Experimente mit dem Programm später wurde das richtige Format gefunden. Eine XML-Datei, 
die von ferienpass.online exportiert wird, sieht ungefähr so aus:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Items xmlns:aid="http://ns.adobe.com/AdobeInDesign/4.0/"><Item xmlns:aid="http://ns.adobe.com/AdobeInDesign/4.0/" item_id="1399" variant_ids="1400"><Name attr_id="1">Mausefallen-Renner</Name><Description attr_id="3">Energie, Antrieb, Reibung ...? Mit diesem faszinierenden Modell baust du dir die Antwort auf diese Frage selber. Der Antrieb ist eine Mausefalle und möchte anschließend im Wettrennen direkt getestet werden.</Description><Image attr_id="5"><_files><_file><_link href="file://../files/ferienpass_upload/bilder/Mausefallen_renner.jpg"/><_meta><_caption> </_caption></_meta></_file></_files></Image><DatePeriod attr_id="43">Do, 04.07. 10:00 — 13:00</DatePeriod><Age attr_id="10">Kinder ab 9 Jahre</Age><Host attr_id="6"><_data><_name>Jugendpflege der Stadt Alfeld (Leine)</_name><_logo><_link href="file://../files/ferienpass_upload/logos/logo_Jpf.pdf"/></_logo></_data></Host><ApplicationlistActive attr_id="13">www.ferienpass-alfeld.de/1399</ApplicationlistActive><Infotable xmlns:aid="http://ns.adobe.com/AdobeInDesign/4.0/" attr_id="9"><_tabletext xmlns:aid="http://ns.adobe.com/AdobeInDesign/4.0/" aid:table="table" aid:trows="5" aid:tcols="2"><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">Ort</_cell><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">Alfeld Rockt Café, Bahnhofstr. 14 (direkt am Busbahnhof), Alfeld</_cell><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">Kosten</_cell><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">3,00 Euro</_cell><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">Anmeldung</_cell><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">per Online-Anmeldesystem</_cell><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">Max. Teilnehmer</_cell><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">12 Teilnehmer/innen</_cell><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">Infos unter</_cell><_cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth="150">05181-1318, info@jugendpflege-alfeld.de</_cell></_tabletext></Infotable></Item></Items>
```

Es zeigte sich, das InDesign sehr fragil im Umgang mit XML ist, und auch nur einzelne Leerzeichen an der falschen 
Stelle das Layout zusammenbrechen ließen. Nichtsdestotrotz kann mit diesem Format die Druckdateien in Windeseile 
erstellt werden. InDesign importiert die Datei und setzt die Daten automatisch in die vorher definierte Struktur.

Damit der Datei-Import funktioniert, muss das InDesign-Layout einmal vorbereitet werden und die Texte "getaggt" werden. 
Dafür erstellt man eine Beispielseite und markiert die Texte, die einem Feld aus der Datenbank ensprechen. Eine 
getaggte InDesign-Datei sieht ungefähr so aus: Jede farbige eckige Klammer ist ein Feld, das einem Tag aus der 
XML-Datei enspricht. Diese Vorlage muss nur einmalig erstellt werden und kann die darauffolgenden Jahre unverändert 
weiter verwendet werden.

![XML-Struktur in InDesign](/images/indd-xml-screenshot.jpg)

Hat man die Vorlage einmalig erstellt, kann man InDesign den Rest der Arbeit erledigen lassen. Ein "XML importieren" 
lädt das XML und packt die Texte in die Textfelder. InDesign erstellt automatisch neue Seiten, falls erforderlich. Als 
letzen Schritt müssen nur noch einzelne Objekte angefasst werden, und ggf. Texte gekürzt werden, die nicht in die 
Textfelder passen.

![Animation über InDesign-Import](/images/indd-import.gif)

Der große Vorteil dieser Methode ist, dass das alte Drucklayout übernommen werden kann und die Gestaltung der Seiten 
frei erfolgen kann.

Alle Kunden von ferienpass.online legen Wert auf eine qualitative Druckversion des Ferienpasses, und die einzige 
Möglichkeit, dem gerecht zu werden, ist, die Layouts händisch über ein solches Layoutprogramm erstellen zu lassen.

## Wechsel zum PDF-Export

Bei der Jugendpflege der Stadt Alfeld (Leine) gab es einen Personalwechsel, wodurch kein Mitarbeiter mehr Kenntnisse in 
InDesign hatte. Nun hätte man die Erstellung der Drucklayouts auch in die Hände einer Druckerei geben können, aber die 
Erstellung der einzelnen Seiten war schon immer sehr zeitaufwendig.

Aus diesem Grund haben wir eine Exportschnittstelle programmiert, die alle Ferienpass-Angebote als druckfertiges PDF 
exportiert. Das individuelle und ursprügliche Layout wurde dabei übernommen.

Um das Ganze zum Laufen zu bringen, muss das Drucklayout erstmal in HTML-Form gepackt werden:

```html
<style>
    @page {
        sheet-size: 152mm 152mm;
        size: 148mm 148mm;
        margin: 8mm;
        marks: crop;
    }

    .offering {
        page-break-after: always;
    }
</style>

<div>
    <section>
        <h1>Bumerang Bauen</h1>
    </section>
    <section>
        <div>…und er kommt auch wieder zurück.</div>
    </section>
    <div>22.07.2020</div>
    <section>
        <figure>
            <img src="/files/logo.png" style="max-height: 22mm; max-width: 50mm;float: right;" alt="">
        </figure>
    </section>
</div>
```

Diese HTML-Datei wird automatisch von ferienpass.online erstellt und dann intern an die Software für die PDF-Erstellung 
geliefert. Dateien für den Druck haben besondere Ansprüche, so muss die endgültige Datei über einen Anschnitt verfügen 
und der Farbmodus des Dokuments muss unbedingt CMYK sein. Das PDF wird erstellt zum Download bereitgestellt.

![Screenshot druckfertiges PDF](/images/pdf-export-screenshot.png)

Das Ergebnis kann sich sehen lassen und die automatisch erstellte Druck-Datei sieht der manuell erstellten Datei sehr 
ähnlich.

Da die PDF-Dateien nun on-the-fly erstellt werden, haben die Veranstalter*innen nun die Möglichkeit, in dem Portal 
einen Korrekturabzug herunterzuladen.


## Was ist nun besser?

Ob der XML-Export oder die PDF-Erstellung besser geeignet ist, muss individuell entschieden werden.

Fest steht, dass mit dem PDF-Export hochwertige Druck-PDFs erstellt werden können. Dies passiert ohne menschliches 
Zutun. Nachteilig ist, dass die exportierten PDFs nicht mehr bearbeitet werden können, und inhaltliche Anpassungen über 
die Verwaltungsoberfläche durchgeführt werden müssen, bevor der Export gestartet wird. Außerdem müssen die anderen 
Inhaltsseiten, wie das Vorwort oder die Umschlagsseiten, weiterhin händisch erstellt werden. Hier kann man den Workflow 
aufteilen, die Umschlagsseiten von einer Druckerei erstellen lassen und die Angebotsseiten selbst liefern.

Der XML-Export ist eher geeignet, wenn besondere Layouts gewünscht sind. Denn über InDesign können Texte des Angebots 
geändert werden oder Elemente ergänzt werden, die bei dem automatischen PDF-Export nicht möglich sind.
