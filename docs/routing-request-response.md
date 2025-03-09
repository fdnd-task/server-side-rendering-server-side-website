# Server-Side Website

## Routing, Request en Response

Over URL design, Routes en Request parameters gebruiken om data te laden.


### Aanpak

Nu je een groot deel van je project al hebt opgezet, gaan we wat dieper in op het ontwerpen van nette URLs, en hoe we die toe kunnen passen binnen Express routing. Ook gaan we naar wat geavanceerdere onderwerpen van Requests en Responses binnen Express kijken.


## URL design

Elke URL binnen een website of webapplicatie moet ontworpen worden. Vaak wordt aan deze stap niet veel aandacht besteed, maar voor veel mensen is de URL het eerste zichtbare onderdeel.

Schrijf met je tafel op het whiteboard vijf voorbeelden van “lelijke” URLs. Gebruik hiervoor websites uit je eigen omgeving, bijvoorbeeld die van je eigen volleybalvereniging, pilatesclub, dansschool, bijbaantje, gym of het werk van je ouders.

Onderzoek aan de hand van onderstaande bronnen op welke onderdelen van een URL jij als frontend ontwikkelaar in Sprint 8 invloed hebt, en op welke (nog) niet. Maak hiervan een overzicht op jullie whiteboard.

💪 Bespreek met je tafel het concept van “hackable” URLs, en of je dit al gebruikt in jouw project. Zo niet; bij welke onderdelen binnen jouw project zou je dit soort URLs kunnen inzetten? Hoe zou je je URLs ontwerpen als je dit er ook in wilt verwerken?

### Bronnen

- [What are the parts of a URL? @ Web.dev](https://web.dev/articles/url-parts)
- [Clean URL @ Wikipedia](https://en.wikipedia.org/wiki/Clean_URL)
- [URL as UI](https://www.nngroup.com/articles/url-as-ui/)


## Routing

Alles rondom het werken met “mooie” URLs kun je binnen Express afvangen met routes. Je hebt hier nu meerdere keren mee gewerkt, maar wellicht dat je hiermee nog een sprong kunt maken.

Binnen Express kun je routes op verschillende manieren aanmaken; met _strings_, _reguliere expressies_, en met _route parameters_. Onderzoek met je tafel welke manieren jullie ...

### Bronnen

- [Route paths @ Express](https://expressjs.com/en/guide/routing.html#route-paths)
- [Route parameters @ Express](https://expressjs.com/en/guide/routing.html#route-parameters)


## Request

### Bronnen


## Response

### Bronnen

- [Response methods](https://expressjs.com/en/guide/routing.html#response-methods)

<!-- 
Stap voor stap met bronnen leren over 

## Routing
Leren over Express, URL design en (get) Routes op de server. 
(Hier zijn ze al mee bezig geweest in de workshop 'templating met json') 
Iets doen/leren aan de hand van de bron expressjs.com?

`app.get('/', ... )`

En over request.parameter
`app.get('/student/:id', ... )`
Wat gebeurt hier en wat kan je daarmee? 

Je kan daar bijvoorbeeld andere data mee ophalen. Dan hebben we het over: 

## Request & Response
Op basis van een route doe je een (data) request met een fetch en krijg je data terug van Directus. 
`async function (request, response)`
Wat gebeurt hier eigenlijk?  Dat is asynchroon javascript. Hier iets mee doen?

Je kan ook een redirect geven. 
`response.redirect(303, '/')`
Wat gebeurt hier eigenlijk? En wat is die 303? 


-->