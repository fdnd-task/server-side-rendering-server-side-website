# Server-Side Website

## Sprint Planning

Instructies lezen, project plannen en de briefing voorbereiden.

### Aanpak

Dit semester ga je weer werken aan een opdracht voor een opdrachtgever. In Semester 2 ga je de website ontwerpen en bouwen met behulp van een database en REST API.

Vandaag ga je de repository alvast klaarzetten met een project board, daarna ga je de briefing voorbereiden. Om 11 uur komen de opdrachtgevers langs voor de briefing. 

Nadat je de debriefing hebt opgezet ga je aan de slag volgens de _Content First_ werkwijze.

## Repo klaarzetten met een project board

Fork en Clone deze leertaak. Zet je issues in je nieuwe repo aan.

### Planning maken
Voordat je gaat beginnen met het voorbereiden van de briefing kan je al een grove planning maken van de taken die je gaat uitvoeren. Omdat je dit al eerder hebt gedaan kan je terugkijken hoeveel tijd je daar tijdens een vorige sprint aan hebt gewerkt.

Lees de sprint planning samen door en noteer op het whiteboard welke taken je voor de Briefing/debriefing en Content First aanpak moet doen. Kijk daarna terug naar sprint 6️⃣ en 7️⃣ en tel hoeveel uren je met dezelfde taken bent bezig geweest. Noteer het aantal uren en vergelijk dit met elkaar.

### Project board
Maak een nieuw project board aan en koppel het aan jouw repository van Sprint 8. Als je het project board op _Roadmap view_ zet, krijg je een overzicht met je taken en een tijdplanning. Voeg de taken toe aan het project board met een tijdspad. Doe daarna hetzelfde voor week 2 met behulp van de programma-website.

## Briefing/debriefing

Eerst ga je een project kiezen: Lees de projecten op https://github.com/fdnd-agency en kies één van de projecten door je naam op het whiteboard te zetten. Maximaal 3 studenten per squad. En nog wat eisen:

- _Niet dezelfde studenten als het team van de squad page._
- _Niet dezelfde studenten waarmee je vaak aan een tafel zit._
- _Niet hetzelfde project als in Semester 1._

### Briefing voorbereiden
Maak een issue aan in jouw repo met de titel 'Briefing/debriefing'. Hier ga je de voorbereiding, documentatie en debriefing aan toevoegen en hier noteer je zo nodig de feedback van de opdrachtgever.
Voeg het issue toe aan jouw project board met de roadmap en geef het een *tijdspad*.

Bereid met studenten die dezelfde opdrachtgever hebben de briefing voor. Volg hiervoor de instructies van de [workshop briefing/debriefing](https://github.com/fdnd-task/the-client-website/blob/main/docs/briefing-debriefing.md) uit Sprint 2. Het is de bedoeling dat je alle onderdelen van een debriefing met de opdrachtgver bespreekt. 

💡 Bekijk ter voorbereiding ook wat er al in Directus klaarstaat voor jouw opdracht, en welke content er al is, zoals teksten, plaatjes, illustraties of documenten. Zorg dat je dit ook bespreekt met je opdrachtgever, in het data-driven web is het _content first_!

💡 Zorg ervoor dat je met de opdrachtgever ook het gemaakte werk uit Semester 1 bespreekt. Wat was goed? Waar wil de opdrachtgever mee verder? Je kan het gemaakte werk vinden in de project beschrijvingen bij FDND Agency.

### Debriefing
Maak na de briefing met elkaar een interface inventory op basis van het gemaakte werk uit Semester 1 en de informatie van de opdrachtgever. Volg hiervoor de instructies van de [workshop Styleguide - Interface inventory](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/styleguide.md) uit Sprint 4.

Werk daarna eerst je eigen debriefing volledig uit.
Maak daarna 1 debriefing met de studenten die dezelfde opdracht hebben en stuur het op naar de opdrachtgever, voeg zo nodig extra vragen toe als jullie nog niet alle informatie hebben. 
Je wil zo snel mogelijk feedback op je debriefing, dus stuur jullie debriefing zo snel mogelijk op.

Als je de debriefing hebt opgstuurd kan je beginnen met het ontwerpen en bouwen van de website. Je hoeft niet te wachten op de reactie van de opdrachtgever. Ga vooral meteen aan de slag, we hebben veel te doen!


## Content first 🎁
<!-- 🎁 📦 🗂️ 🗃️ 🎶 -->

Content first betekent dat je voor het ontwerpen en maken van een website de _content_ centraal stelt.
Content First is een aanpak én manier van denken. Je kan niet een goed ontwerp maken als je geen content hebt, je zal moeten uitzoeken welke content er is, welke nog niet, wat al in de database staat (en of er al een database en API is), en misschien gaan gebruikers zelf content toevoegen. Hoe pak je dit aan?

<!-- 
https://www.interaction-design.org/literature/topics/content-first 
https://labelvier.nl/blog/content-first-design-nieuwe-website-denk-eerst-je-content-uit/
-->


<!--
AANPAK CONTENT FIRST 

INTERFACE INVENTORY
STYLEGUIDE 

SITEMAP HUIDIG/NIEUW
met urls en routes 

WIREFRAME 
met dynamisch/statische data
met componenten (partials)

WIREFLOW VOOR INTERACTIES == SPRINT 9
Met alle ui states .. 

FIGMA RESPONSIVE UITWERKING HELE PAGINA
met verschillende versies voor User preferences: 
prefers-color-scheme - light/dark mode
prefers-contrast - wel/geen lower or higher contrast
prefers-reduced-motion - wel/geen animatie
prefers-reduced-transparency - wel/geen transparante kleuren
forced-colors - wel/geen limited color palette 
inverted-colors - wel/geen inverted kleuren

(prefers-reduced-data)

HTML PROTOTYPE - Routes met views met statische HTML en partials

ONE COLUMN LAYOUT
-->

### Werkwijze Content first

De meeste methoden en technieken om te ontwerpen en prototypen ken je al, de sitemap, wireframe en HTML prototype. Omdat we dit semester met dynamische data werken, een database en REST API, kan je dezelfde methoden gebruiken, maar zul je daar nog wat aan moeten toevoegen. 

Als je weet welk content er is, hoeveel het is en wat uit de database komt kan je schetsen en ontwerpen. Dat doe je zoveel mogelijk met echte teksten en hoeveelheden. 
Dus niet met _Lorem Ipsum_, maar met echte titels. 
En niet even snel 3 items in een lijstje, maar schets met de 67 items die uit de database gaan komen ... 

Hieronder staan de methoden en technieken uitgelegd met daarbij wat je moet doen om content first te ontwerpen en bouwen.

### Sitemap
Teken een sitemap van de verschillende pagina's van de opdracht die je hebt gekregen. Geef de pagina's duidelijke nummers en laat goed zien op welk niveau de pagina's staan. Gebruik de [Workshop Prototyping - Sitemap tekenen](https://github.com/fdnd-task/the-client-website/blob/main/docs/prototyping.md#sitemap) om nog eens te bekijken hoe je dat netjes doet. 

🎁 Schrijf dan per pagina de URL die je wil gebruiken voor de _routes_.

Nu weet je uit welke pagina's de website bestaat, welke URLs daarbij horen en welke routes je hiervoor moet aanmaken in je server.js bestand.

### Wireframe
Teken een wireframe van de pagina's die je gaat maken. Gebruik de [Workshop Prototyping - Wireframe schetsen](https://github.com/fdnd-task/the-client-website/blob/main/docs/prototyping.md#wireframe-en-wireflow-schetsen) om nog eens te lezen hoe je een net Wireframe tekent met duidelijke titel en uitleg. In deze fase van het project hoef je geen responsive ontwerp te maken, dat komt later als je een hifi-ontwerp in Figma gaat maken.

🎁 Gebruik in je Wireframe echte teksten en titels, geen scribbles of nep teksten. Zo krijg je een beter beeld van hoeveel ruimte teksten nodig hebben. Als je een lijst maakt van kado's, producten of nieuwsberichten, probeer dan meteen met kloppende hoeveelheden te schetsen. Het maakt veel uit voor je interface of er 3 berichten getoond moeten worden of 67!

🎁 Geef in je schets aan welke content statisch is en welke content dynamisch.
Statische content verandert niet en kan je in de HTML typen, bijvoorbeeld vaste menu items, een intro tekst, een label of icoon.
Dynamische content komt uit de database. Dit wil je weten, want in je server-side website ga je deze data met een REST API ophalen en daar ga je views mee bouwen in Liquid.

🎁 Geef tot slot met een andere kleur aan welke onderdelen van een pagina ook op andere pagina's voorkomen. Dit zijn _componenten_ waar je _partials_ van kan maken.

Nu weet je hoe jouw pagina er ongeveer uit komt te zien, welke content statisch of dynamisch is, en van welke componenten je partials kan maken.

### HTML prototype
Net als in Semester 1 maak je de pagina's voor de website eerst in HTML. Omdat we een server-side website maken, gaat deze stap iets anders dan bijvoorbeeld in Sprint 6!

🎁 Maak in Express eerst de verschillende routes aan die je nodig hebt voor alle pagina's van de website. Dit heb je al ontworpen in je sitemap. Maak daarna voor alle pagina's een view in Liquid en test of alle pagina's het doen.

🎁 Maak daarna in Liquid de partials aan voor de componenten die op verschillende pagina's terugkomen. Dit heb je al ontworpen in je wireframe. Render de partials op alle pagina's waar ze moeten komen en test de pagina's.

Nu heb je in grote lijnen de website al staan met alle pagina's en URLs. Ga daarna verder om jouw eerste pagina helemaal in HTML maken. Maak eerst een HTML breakdown van de wireframe en codeer de pagina en partials die je nodig hebt in HTML voordat je met de dynamische data en de API aan de slag gaat, dat is de volgende stap.  

Maak issues aan met als titel de pagina die je gaat ontwerpen en bouwen in HTML. Voor elke pagina maak je een nieuw issue aan. Voeg de sitemap met URLs en routing toe, en de wireframe met statische en dynamische data, de componenten en de HTML breakdown.

Voeg de issues toe aan het project board met een *tijdspad*. Kan je al bedenken hoeveel tijd je nodig hebt om zo'n pagina met server-side rendering in HTML te maken? 

💡 Heb je voor een bepaald onderdeel nog geen content, of nog geen database? Maak dan in statische HTML een prototype. Je kunt deze later altijd nog dynamisch maken, net als wat je met je visitekaartje in Sprint 7 deed. Je kunt dit ook met _mock data_ doen.


### One Column Layout
Als het is gelukt om met de REST API de juiste HTML te renderen in Liquid, kan je beginnen met CSS. Zorg er eerst voor dat alles onder elkaar staat en voldoet aan de huisstijl voordat je de website responsive maakt met media queries en meer complexere layouts en interactie gaat bouwen.

Maak een issue aan met de titel 'One Column Layout', voeg de interface inventory, de styleguide en uitleg van CSS strategie toe en koppel de commits van de CSS die je gaat coderen aan het issue.
Voeg de issue toe aan het project board met een *tijdspad*.

Volg hiervoor de instructies van de [workshops Styleguide samenstellen](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/styleguide.md) uit Sprint 4. Dit keer ga je dit individueel doen.





