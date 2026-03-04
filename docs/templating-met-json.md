# Server-Side Website

## Templating met JSON data

Over het fetchen van data en dit gebruiken in Liquid om HTML te renderen.

### Aanpak
Nu je een briefing hebt gekregen van de opdrachtgever weet je (ongeveer) wat de bedoeling is. Voor elk project is een database beschikbaar in Directus, waarmee je de website gaat maken.

#### Content first

De aanpak die je dit semester leert noemen we 'Content first'. Schetsen doe je zoveel mogelijk met echte content, omdat we met veel data werken moet je hier ook rekening mee houden in je ontwerp. Als in een database 123 artikelen staan die op een pagina moeten komen, moet je daar in je ontwerp rekening mee houden. En omdat ook titels en teksten, en misschien plaatjes, uit de databse komen zul je er in je ontwerp rekening mee moeten houden dat sommige titels langer zijn of dat plaatjes het niet goed doen. 

Vandaag gaan we eerst de debriefing en ontwerpschetsen bespreken. Daarna ga je onderzoeken welke data beschikbaar is voor je project en hoe je met de data uit de database in Liquid HTML kan renderen.



<!--
In de slides aandacht aan Content first. 
Wat is dit? 
En waarom doen we dit? 
  voorbeeld van 3 items of 67 items, wat betekent dat voor de interface?


Hoe zet je technisch een server-side project op met de content first aanpak? 
Al een beetje duwen naar componenten en alle (!) pagina;s aanmaken in server.js met express routing en liquid views 
  Alle routes aanmaken
  En  Partials
  Alle HTML met de REST API
Data
-->
<!-- 
Als je website staat, met urls, routes en componenten in partials >

Werk je de verschillende pagina's eerst in HTML uit. 
Content is statisch, meteen in HTML typen
Content is dynamisch, deze HTML ga je met de REST API renderen. 
Wireframe uitbreiden met fetch naar de API

Met een loop? 
Met Liquid filters? Herhalen?

Als de hele pagina in HTMl staat en is getest en je hebt feedback gekregen, ga je verder met de styling. Huisstijl toepassen en responsive maken. 
-->

## Sitemap met URLs

Na de briefing teken je eerst een sitemap van de verschillende pagina's waar je project uit bestaat. Geef de pagina's duidelijke nummers en laat goed zien op welk niveau de pagina's staan.
Schrijf per pagina de URL die je wil gebruiken voor de routes. Dit is onderdeel van je ontwerp.

👉 Bespreek met elkaar de sitemaps die je hebt gemaakt. Leg uit aan de hand van de sitemap uit wat je opdracht is en hoe de hele website inelkaar steekt. Bekijke de URL's em routes en help elkaar met tips & tricks. 


## Wireframe met statische en dynamische data, en componenten

Van elke pagina die je gaat bouwen teken je een Wireframe. Maak een nette Hi-Fi schets met echte content, zodat het duidelijk is welke teksten en andere content op de pagina getoond moeten worden. Schrijf onder de tekening de URL van de pagina.

Geef daarna aan welke content statisch is en welke content dynamisch. Dynamische content komt uit de database. 
Bepaal welke onderdelen van een pagina ook op andere pagina's voorkomen. Dit zijn componenten waar je partials van kan maken.

👉 Presenteer aan elkaar de wireframes die je hebt gemaakt. Laat zien welke data uit de database moet komen en van elke onderdelen je partials gaat maken. 

👉 Laat daarna zien hoe je dit in NodeJS met Express en Liquid partials in je HTML prototype hebt gemaakt. 


## Data analyseren

Om te weten welke data uit de database komt, zul je moeten onderzoeken hoe je de JSON data kan fetchen. 

In sommige gevallen staat er in de JSON data een verwijzing naar een andere tabel. In de WHOIS database van FDND stond bij de squad data bijvoorbeeld een verwijzing naar `persons`:

```json
{
  "data": {
    "id": 17,
    "sort": 16,
    "date_updated": null,
    "name": "1J",
    "cohort": "2526",
    "nickname": null,
    "description": null,
    "website": null,
    "tribe": 1,
    "persons": [
      323,
      326, 
      328, 
      ...
    ]
  }
}
// URL: https://fdnd.directus.app/items/squad/17
```

Je kan in Directus deze 'gelinkte' data ook fetchen. Door de `fields` parameter mee te geven aan de URL kan je bepalen welke data Directus teruggeeft. Door `?fields=*` mee te geven, krijg je alle velden. Met een komma kan je meer velden laten zien, bijvoorbeeld door `?fields=*,persons.*` mee te geven, krijg je data van de gelinkte personen. Probeer dit maar eens in een browser.

En zo kan je nog een niveau dieper: Als je `?fields=*,persons.person_id.*` meegeeft, krijg je alle data van alle gelinkte personen.

👉 Dat is misschien een beetje te veel data ... lukt het jullie om _alleen_ de namen te tonen van de gelinkte personen in de squad data?
<!-- fields=*,persons.person_id.name -->

👉 Ga nu eens kijken naar de data in Directus van jouw opdracht. Zie je daar ook 'gelinkte' tabellen? Probeer eens of je de data kan tonen.
Als je snapt hoe je de data uit Directus kan halen, geef dan in je Wireframe aan welke data uit de database moet komen en schrijf onder je tekening de API URL die je hiervoor nodig hebt.

#### Bronnen
- [Directus - Query Parameters](https://directus.io/docs/guides/connect/query-parameters)


### HTML pseudo code
Nu je weet welke dynamische data je nodig hebt voor de pagina's die je gaat bouwen, kan je je Wireframe uitbreiden met een technische breakdown.

Voeg eerst aan je Wireframe annotaties toe met de fetch die je nodig hebt om de data te laden.

Probeer daarna te bedenken hoe je van de JSON data de HTML kan maken in Liquid. Heb je een `for` loop nodig? Of een `if .. else`? Annoteer dit in je Wireframe. Lees in de Liquid documentatie over de 'Tags' die je kan gebruiken, en probeer hiermee pseudo code te schrijven in je Wireframe.

#### Bronnen
- [Liquid Filters](https://liquidjs.com/filters/overview.html)
- [Liquid Tags](https://liquidjs.com/tags/overview.html)


### Routes, Requests en Renderen
Nu je ongeveer weet welke data er is en hoe je dit op de pagina's wil gebuiken, kan je verder met bouwen: 
Voeg het fetchen van de JSON data toe aan de routes van het `server.js` file, geef de data door aan de liquid views en render de HTML met de dynamische data ...

Lees zo nodig de [workshop Filteren en sorteren van Sprint 7](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/filteren-en-sorteren.md). Daarin staat stap voor stap uitleg hoe je nu verder kan...

