# Server-Side Website

## Data filteren en template filters

Over het filteren en sorteren van data op de Directus API en manipulatie van data via liquid filters.

### Aanpak

We kijken nog eens naar het filteren van de data op de Directus API en gaan aan de slag met de vele filters die Liquid te bieden heeft. 

## 1. Data filteren en sorteren met Directus

We hebben in [sprint 7](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/filteren-en-sorteren.md) al gespeeld met filteren en sorteren met Directus. 

Waarom filteren we ook alweer de data van Directus? Om alleen de data op te halen die we daadwerkelijk nodig hebben in ons project. Dit zorgt voor betere performance en heeft ook een privacy aspect. 

### Query parameter notatie

Er zijn [twee notaties](https://directus.io/docs/guides/connect/query-parameters#filter) waarop je de url kunt opbouwen om data op te halen uit Directus. Onderstaande voorbeelden geven hetzelfde resultaat maar anders geschreven.

**JSON notatie {}**

```https://fdnd.directus.app/items/person/?sort=name&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND%20Jaar%201"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}```

**Array notatie []**

```https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2425&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%201```

De array notatie is iets overzichtelijker qua leesbaarheid. ℹ️ _Handig om te weten, Directus maakt er alsnog weer een json notatie van in de achtergrond_. 

### Opdracht

Hou de experimentjes bij op je I Love Web - Learning Journal. Beschrijf bijv. wat elke query parameter doet, hoe de filters werken enz. 

👉 Experiment 1: Ik wil alle studenten gesorteerd op `name`

👉 Experiment 2: Ik wil alle `names` van studenten die een `name` hebben die begint met de letter D

👉 Experiment 3: Ik wil alle `names` van studenten die een `name` hebben die begint met de letter D **of** K

👉 Experiment 4: Ik wil alle `names` en `birthdates` van studenten die een `birthdate` hebben ingevuld

👉 Experiment 5: Ik wil alle `names` en `birthdates` van studenten met een `birthdate` in 2002

👉 Experiment 6: Haal een lijst van alle unieke `fav_tag` op, en laat zien hoeveel mensen die tag hebben

### Bronnen
- [Directus filtering](https://directus.io/docs/guides/connect/filter-rules)


## 2. Template filters in Liquid

Wanneer je een goede dataset hebt binnen gehaald via Directus kun je de data nog steeds beinvloeden in je template. Liquid heeft hiervoor veel verschillende opties. 

### Opdracht

#### Liquid filters onderzoeken

1. Ga met je tafel naar de documentatie van [Liquid](https://shopify.github.io/liquid/)
2. Ieder pakt 5 filters (niet dezelfde) schrijf ze op het bord
3. Probeer de filters nu uit in je project
4. Beschrijf deze 5 filters in je I Love Web - Learning Journal
5. Geef daarna een korte demo van de filters die je hebt uitgeprobeerd aan de rest van je tafel

#### For loop experimenten

Hou de experimentjes bij op je I Love Web - Learning Journal. 

👉 Experiment 1: Ik wil alleen op de tweede plek in een lijst van items een stukje html toevoegen

👉  Experiment 2: Ik wil deze lijst genereren `titel, titel, titel` alleen bij het laatste item wil ik geen komma

👉  Experiment 3: Ik wil mijn lijst omgekeerd weergeven

💪 Ik wil in elk vierde item een stukje html toevoegen

### Bronnen
- [Liquid documentatie](https://shopify.github.io/liquid/basics/introduction/)
- [Liquid forloop docs](https://shopify.github.io/liquid/tags/iteration/)
- [Liquid modulo](https://shopify.github.io/liquid/filters/modulo/)

