# Server-Side Website

## Routing, Request en Response

Over URL design, Routes en Request parameters gebruiken om data te laden.


### Aanpak

Nu je een groot deel van je project al hebt opgezet, gaan we wat dieper in op het ontwerpen van nette URLs, en hoe we die toe kunnen passen binnen Express routing. Ook gaan we naar wat geavanceerdere onderwerpen van Requests en Responses binnen Express kijken.


## URL design

Elke URL binnen een website of webapplicatie moet ontworpen worden. Te vaak wordt aan deze stap niet veel aandacht besteed, maar voor veel eindgebruikers is de URL het eerste zichtbare onderdeel.

Schrijf met je tafel op het whiteboard vijf voorbeelden van “lelijke” URLs. Gebruik hiervoor websites uit je eigen omgeving, bijvoorbeeld die van je eigen volleybalvereniging, pilatesclub, dansschool, bijbaantje, gym of het werk van je ouders. Wat maakt een URL “lelijk”?

Onderzoek aan de hand van onderstaand _What are the parts of a URL?_ web.dev artikel op welke onderdelen van een URL jij als frontend ontwikkelaar in Sprint 8 invloed hebt, en op welke (nog) niet. Maak hiervan een kort overzicht op jullie whiteboard.

💪 Bespreek met je tafel het concept van “hackable” URLs, en of je dit al gebruikt in jouw project. Zo niet; bij welke onderdelen binnen jouw project zou je dit soort URLs kunnen inzetten? Hoe zou je je URLs ontwerpen als je dit er ook in wilt verwerken? Laat elkaar je routes zien, en leg deze aan elkaar uit. Maak een issue voor jezelf aan als je hierdoor je URLs wilt redesignen en _refactoren_.

### Bronnen

- [Clean URL @ Wikipedia](https://en.wikipedia.org/wiki/Clean_URL)
- [URL as UI](https://www.nngroup.com/articles/url-as-ui/)
- [What are the parts of a URL? @ Web.dev](https://web.dev/articles/url-parts)


## Routing

Alles rondom het werken met “mooie” URLs kun je binnen Express afvangen met routes. Je hebt hier nu al meerdere keren mee gewerkt, maar misschien kun je nog een sprong maken.

In Express kun je routes op verschillende manieren aanmaken; met _strings paths_, _paths met reguliere expressies_, en met _route parameters_. Je kunt zelfs meerdere route parameters tegelijk gebruiken. Lees onderstaande drie secties en de voorbeelden uit de Express documentatie even rustig door. (We gebruiken Express 5, dus alle opmerkingen over Express 4 zijn niet zo relevant voor ons.)

Als frontender zul je regelmatig links naar documentatie krijgen. Zelfs Chad deelt tegenwoordig bronnen. Documentatie lezen, begrijpen en je eigen maken is een belangrijk onderdeel van je (toekomstige) werk.

👉 Zoek in de routing documentatie van Express een voorbeeld van wat je nog niet eerder gebruikt hebt. Maak daarmee een kleine demo voor een `GET` request in je project. Experimenteer met voorbeeld code, en probeer deze je eigen te maken. Stel vragen als je er niet uit komt.

### Bronnen

- [Route paths based on strings @ Express](https://expressjs.com/en/guide/routing.html#route-paths-based-on-strings)
- [Route parameters @ Express](https://expressjs.com/en/guide/routing.html#route-parameters)
- [Route paths based on regular expressions @ Express](https://expressjs.com/en/guide/routing.html#route-paths-based-on-regular-expressions)


## Request

Elke URL die je bezoekt, zorgt voor een _HTTP request_ op een server. Als je in Express een route hebt aangemaakt voor een bepaald request, zal NodeJS de bijbehorende functie uitvoeren. Binnen zo'n functie kun je alles doen wat je maar kunt bedenken. De manier waarop dit werkt, kun je vergelijken met het driestappenplan uit Semester 1, en het toevoegen van een _event listener_ in je frontend code. Je hebt hiervoor het volgende geleerd:

1) Zoek een element waarop je een actie wilt laten uitvoeren, met bijvoorbeeld `querySelector()`
2) Voeg een event listener toe, met `addEventListener()`
3) Voer een functie uit als dit event wordt uitgevoerd door de eindgebruiker, en geef feedback (door iets te veranderen in de UI)

Dit lijkt enorm op wat we nu doen in Express:

1) Bedenk een URL waarop je een actie wilt laten uitvoeren, bijvoorbeeld `/alle-pizzas`
2) Maak een route aan, met bijvoorbeeld `app.get()`
3) Voer een functie uit als deze URL wordt bezocht door de eindgebruiker, en geef feedback (met een response)

Net als in je frontend code, kun je in stap 3 vrijwel alles doen wat je wilt. In onze projecten is dit vaak de plek waar we data uit Directus ophalen via een `fetch()`, maar je kunt ook een (JSON) bestand in je server uitlezen. Dit is ook waarom een Wireflow maken voor dit soort interacties geen gek idee is.

In je browser kun je de eigenschappen van een UI event uitlezen, en in Express kun je de eigenschappen van het request uitlezen. Je kunt bijvoorbeeld de _query parameters_ van het request gebruiken. Of de _route parameters_, als je die functionaliteit van Express gebruikt om nette URLs te maken.

Om de vergelijking met frontend code te maken: in een UI keyboard event kun je bijvoorbeeld uitlezen op welke toets er gedrukt is, om daarmee iets doen (`event.keyCode`). Van een request kun je bijvoorbeeld uitlezen of de query parameter `sorteer` aan de URL is meegegeven (`request.query.sorteer` op `/alle-pizzas?sorteer=prijs`), en daarmee iets doen.

👉 Onderzoek onderstaande bronnen en bespreek met je tafel wat je zou kunnen doen met de `path` property van een request. Stel dat je deze als extra variabele meegeeft aan je view; hoe zou je dit kunnen gebruiken in de HTML van je navigatie? Hoe kun je de eindgebruiker laten weten op welke pagina die zich bevindt?

💪 Zijn er meer request properties waar je iets mee zou kunnen doen?

### Bronnen

- [Request @ Express](https://expressjs.com/en/5x/api.html#req)
- [req.path @ Express](https://expressjs.com/en/5x/api.html#req.path)
- [res.render @ Express](https://expressjs.com/en/5x/api.html#res.render)
- [Liquid Tags](https://liquidjs.com/tags/overview.html)


## Response

Een HTTP server reageert op een _request_ altijd met een _response_, en een _status code_. Vaak met HTML (en `200 OK`), maar dat kan dus ook iets anders zijn, zoals CSS, een afbeelding, JSON, een font, etc. Met een `404 Not Found` status code, als de _resource_ die je opvraagt niet bestaat.

HTTP kent verschillende status codes, die allemaal iets anders betekenen.

🤡 Post op Teams je favoriete HTTP status code. Gebruik hiervoor https://httpcats.com, https://http.dog, https://httpgoats.com, https://httpducks.com, https://http.garden, https://http.pizza of https://http.fish

In Express heb je op dit moment vooral te maken met HTML en `200 OK`, wanneer je een view rendert. Maar je kunt via Express op meerdere manieren antwoorden. Onderzoek met de eerste bron hieronder bijvoorbeeld de verschillende Response methods die je uit kunt voeren. Welke daarvan kunnen nuttig voor je zijn als frontender?

ℹ️ Je hebt in de code die je deze sprints van ons kreeg misschien al gezien dat je server op sommige `POST` requests antwoordt met een redirect, en een `303` status code. De conventie op het Web is om na een `POST` niet meteen te antwoorden met HTML, maar de bezoeker door te sturen naar een andere `GET` route, met de status code `303 See Other`.

Een status code die je vast wel kent, is de `404 Not Found`. Deze krijg je van een server terug als je een pagina bezoekt die niet bestaat.

💪 Zoek via de documentatie op https://expressjs.com/ zelf uit hoe je een nette 404 pagina kunt maken voor jouw project, en voeg deze toe. Kun je hun simpele voorbeeld combineren met het renderen van een eigen view?

### Bronnen

- [Response methods @ Express](https://expressjs.com/en/guide/routing.html#response-methods)
- [Response @ Express](https://expressjs.com/en/5x/api.html#res)
- [HTTP response status codes @ MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
