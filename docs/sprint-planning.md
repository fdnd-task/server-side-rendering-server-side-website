# Server-Side Website

## Sprint Planning

Instructies lezen, project plannen en de briefing voorbereiden.

### Aanpak

Dit semester ga je weer werken aan een opdracht voor een opdrachtgever. In Semester 2 ga je de website ontwerpen en bouwen met behulp van een database en REST API.

Vandaag ga je de repository alvast klaarzetten met een project board, daarna ga je de briefing voorbereiden.

Nadat je de debriefing hebt opgezet ga je aan de slag volgens de werkwijze _Content First_.

## Repo klaarzetten met een project board

Fork en Clone deze leertaak. Zet je issues in je nieuwe repo aan.

### Planning maken
Voordat je gaat beginnen met het voorbereiden van de briefing kan je al een grove planning maken van de taken die je gaat uitvoeren. Omdat je dit al eerder hebt gedaan kan je terugkijken hoeveel tijd je daar tijdens een vorige sprint aan hebt gewerkt.

Lees de sprint planning samen door en noteer op het whiteboard welke taken je voor de Briefing/debriefing en Content First aanpak moet doen. Kijk daarna terug naar sprint 6 en 7 en tel hoeveel uren je met dezelfde taken bent bezig geweest. Noteer het aantal uren en vergelijk dit met elkaar.

### Project board
Maak een nieuw projectboard aan en koppel het aan jouw repository van Sprint 8. Als je het project board op Roadmap zet, krijg je een overzicht met je taken en een tijdplanning. Voeg de taken toe aan het projectboard met een tijdspad. Doe daarna hetzelfde voor week 2 met behulp van de programma-website.

## Briefing/debriefing

Eerst ga je een project kiezen: Lees de projecten op https://github.com/fdnd-agency en kies één van de projecten door je naam op het whiteboard te zetten. Maximaal 3 studenten per squad. En nog wat eisen:

- _Niet dezelfde studenten als het team van de squad page._
- _Niet dezelfde studenten waarmee je vaak aan een tafel zit._
- _Niet hetzelfde project als in Semester 1._

### Briefing voorbereiden
Maak een issue aan in jouw repo met de titel 'Briefing/debriefing'. Hier ga je de voorbereiding, documentatie en debriefing aan toevoegen en hier noteer je zo nodig de feedback van de opdrachtgever.
Voeg het issue toe aan jouw project board met de roadmap en geef het een *tijdspad*.

Bereid met studenten die dezelfde opdrachtgever hebben de briefing voor. Volg hiervoor de instructies van de workshop [briefing/debriefing](https://github.com/fdnd-task/the-client-website/blob/main/docs/briefing-debriefing.md) uit Sprint 2.

Bekijk ter voorbereiding ook wat er al in Directus klaarstaat voor jouw opdracht, en welke content er al is, zoals teksten, plaatjes, illustraties of documenten. Zorg dat je dit ook bespreekt met je opdrachtgever, in het data-driven web is het _content first_!

Zorg ervoor dat je met de opdrachtgever ook het gemaakte werk uit semester 1 bespreekt. Wat was goed? Waar wil de opdrachtgever mee verder? Je kan het gemaakte werk vinden in de project beschrijvingen bij FDND Agency.

### Debriefing
Maak na de briefing met elkaar een Interface inventory op basis van het gemaakte werk uit Semester 1 en de informatie van de opdrachtgever. Volg hiervoor de instructies van de [workshop styleguide](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/styleguide.md) uit Sprint 4.

Werk daarna eerst je eigen debriefing volledig uit.
Maak daarna 1 debriefing met de studenten die dezelfde opdracht hebben en stuur het op naar de opdrachtgever, voeg zo nodig extra vragen toe als jullie nog niet alle informatie hebben. 
Je wil zo snel mogelijk feedback op je debriefing, dus stuur jullie debriefing zo snel mogelijk op.


## Content first 🎁
<!-- 🎁 📦 🗂️ 🗃️ 🎶 -->

Content first betekent dat je voor het ontwerpen en maken van een website de _content_ centraal stelt.
Content First is een aanpak én manier van denken. Je kan niet goed ontwerpen als je geen content hebt, je zal moeten uitzoeken welke content er is, welke nog niet, wat al in de database staat (en of er al een database en api is), en misschien gaan gebruikers zelf content toevoegen. Hoe pak je dit aan?

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


### Werkwijze

De meeste methoden en technieken om te ontwerpen en prototypen ken je al, zoals een sitemap, wireframe en HTML prototype. Omdat we dit semester met dynamische data werken kan je dezelfde methoden gebruiken maar zul je daar nog wat aan moeten toevoegen, omdat we met een database en REST API werken. 

Als je weet welk content er is, hoeveel het is en welke content uit de database komt kan je schetsen en ontwerpen. Dat doe je zoveel mogelijk met echte teksten en hoeveelheden. Dus niet met _Lorem Ipsum_ maar met echte titels. Dus niet met 3 items in een lijstje, maar schetsen met 52 items die in een database komen ...

Hieronder staan de methoden en technieke uitgelegd met daarbij wat je moet doen om content first te ontwerpen en bouwen.

### Sitemap
Teken een sitemap van de verschillende pagina's van de opdracht die je hebt gekregen. Geef de pagina's duidelijke nummers en laat goed zien op welk niveau de pagina's staan. Gebruik de [Workshop Prototyping - Sitemap tekenen](https://github.com/fdnd-task/the-client-website/blob/main/docs/prototyping.md#sitemap) om nog eens te bekijken hoe je dat netjes doet. 

🎁 Schrijf dan per pagina de URL die je wil gebruiken voor de routes. 

Nu weet je uit welke pagina's de website bestaat, welke urls daarbij horen en welke routes je hiervoor moet aanmaken in je server.js bestand.

### Wireframe
Teken een wireframe van de pagina's die je gaat maken. Gebruik de [Workshop Prototyping - Wireframe schetsen](https://github.com/fdnd-task/the-client-website/blob/main/docs/prototyping.md#wireframe-en-wireflow-schetsen) om nog eens te lezen hoe je een nette Wireframe tekent met duidelijke titel en uitleg. In deze fase van het project hoef je geen responsive ontwerp te maken, dat komt later als je een hifi-ontwerp in Figma gaat maken.

🎁 Gebruik in je Wireframe echte teksten en titels, geen scribbles of nep teksten. Zo krijg je een beter beeld van hoeveel ruimte teksten nodig hebben. Als je een lijst maakt van items, producten of bijvoorbeeld nieuwwsberichten, probeer dan meteen met kloppende hoeveelheden te schetsen. Het maakt veel uit of er 3 berichten getoond moeten worden of 36!

🎁 Geef in je schets aan welke content statisch is en welke content dynamisch.
Statische content verandert niet en kan je in de HTML typen, bijvoorbeeld vaste menu items, een intro tekst, een label of icoon. 
Dynamische content komt uit de database. Dit wil je weten want in je server-side website ga je deze data met een REST API ophalen en daar ga je views mee bouwen in Liquid.

🎁 Geef tot slot met een andere kleur aan welke onderdelen van een pagina ook op andere pagina's voorkomen. Dit zijn componenten waar je partials van kan maken.

Nu weet je hoe jouw pagina er ongeveer uit komt te zien, welke content statisch of dynamisch is, en van welke componenten je partials kan maken. 


### HTML prototype
Maak een issue aan met de titel 'Prototype naar HTML', voeg Wireframe schetsen met URL's en routing toe en koppel de commits van fetchen van data en renderen van de HTML aan het issue. Voeg het issue toe aan het project board met een *tijdspad*. Wanneer moet dit af zijn?

Urls, routes
Routes en views met statische HTML aanmaken

Partials


<!--
SPRINT 6
HTML prototype

Maak een issue aan met de titel “Prototype naar HTML”, voeg schetsen en uitleg toe en koppel de commits van de HTML die je gaat coderen aan het issue. Voeg het issue toe aan het project board met een tijdspad. Wanneer moet dit af zijn?

Denk dus eerst na over de onderliggende structuur van je ontwerp. Volg hiervoor de instructies van de workshop Prototyping uit Sprint 2. Bedenk hierbij ook wat goede HTML betekent voor de User Experience en Toegankelijkheid, wat je in Sprint 3 hebt geleerd.
-->



### One Column Layout
Als het is gelukt om met de data HTML te renderen in Liquid, kan je beginnen met CSS!

Maak een issue aan met de titel 'One Column Layout', voeg de interface inventory, de styleguide en uitleg van CSS strategie toe en koppel de commits van de CSS die je gaat coderen aan het issue.
Voeg de issue toe aan het project board met een *tijdspad*.

Volg hiervoor de instructies van de workshops Styleguide en Stylesheet uit Sprint 4. Dit keer ga je dit individueel doen.

Als je voor alle content nette HTML hebt gemaakt en getest, ga dan verder met de **One Column Layout** in CSS. Zorg er eerst voor dat alles onder elkaar staat en voldoet aan de huisstijl voordat je de website responsive maakt met media queries en meer complexere layouts en interactie gaat bouwen.

<!--
SPRINT 6 
Maak een issue aan met de titel “One Column Layout”, voeg een interface inventory, de styleguide en uitleg van CSS strategie toe en koppel de commits van de CSS die je gaat coderen aan het issue. Voeg het issue toe aan het project board met een tijdspad.

Als je voor alle content nette HTML hebt gemaakt (en getest met de HTML validator), ga dan verder met de One Column Layout in CSS. Zorg er eerst voor dat alles onder elkaar staat en voldoet aan de huisstijl voordat je de website responsive maakt met media queries en meer complexere layouts en interactie gaat bouwen.

Volg hiervoor de instructies van de workshops Styleguide en Stylesheet uit Sprint 4. Dit keer ga je ga je dit individueel doen.
-->

