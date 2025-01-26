# Informaat

De opdracht was om een HTML Template op te zetten van de homepage met herbruikbare onderdelen, zoals bijvoorbeeld met een section met daarin 4 articles. als dit af was mochten wij verder met het stylen van de website voor verschillende devices.

# Beschrijving Website Informaat

De website is een homepage pagina die is gemaakt doormiddel van de huisstijl van Informaat. Op de homepage staat vooral informatie voor het navigeren van verschillende subpaginas en de informatie binnen de verschillende subpaginas. Deze subpaginas hebben wij niet gemaakt omdat dit niet de opdracht was. In de website zitten verschillende breakpoints, De website is begonnen met als eerst een mobile first ontwerp ( 360px ) daarna een tussen-size ( 1024px ) en daarna een size voor desktop ( 1305px - 1920px en + ). Vanaf de tussenpagina komt er in de kopsection een nieuw plaatje erbij en ook bij de section over de toekomst, dit omdat dit niet geschikt was voor het mobiele desgin kwa layout.

De volgende code heb ik gebruikt om het voorbeeld hieronder responsive te krijgen

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/7b8c3d34ada655408de72a1de3632affc4d38a46/Informaat/informaat.css#L47-L165

responsive section:nth-of-type(1)

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/7b8c3d34ada655408de72a1de3632affc4d38a46/Informaat/informaat.css#L168-L260

## Responsive & Mobile first

360px

<img width="349" alt="Screenshot 2025-01-23 at 10 14 42" src="https://github.com/user-attachments/assets/62b358fd-63ae-48b9-847c-462caea8f614" />

1024px

<img width="1021" alt="Screenshot 2025-01-23 at 10 20 22 1" src="https://github.com/user-attachments/assets/ff30dc89-6110-4cfd-9a90-410572ef2351" />

1600px

<img width="1211" alt="Screenshot 2025-01-23 at 10 21 11" src="https://github.com/user-attachments/assets/f6de7be6-3885-4317-ae32-3bc77c73f96e" />

# Ontwerpkeuzes

Ik heb ervoor gekozen om het aangeleverde design aan te houden en daarvan ook de aangeleverde breakpoints, dit omdat de breakpoints goed geschikt waren en daardoor het desgin goed in elkaar bleef zitten. voor de button onderaan de pagina ( ga naar boven ) heb ik gekozen om deze smooth te laten scrollen omdat dit een proffesioneler gevoel geeft. Ik heb dit ook laten testen door 3 mensen zodat ik zeker weet dat het goed werkt.

De feedforward zorgt er in dit geval voor dat de gebruiker op de button wilt klikken als deze persoon terug naar boven wilt.
als feedback krijg de gebruiker een smoothscroll naar het begin van de pagina.

# Kenmerken

## HTML: 

Ik heb ervoor gezorgd dat mijn HTML op Semantische volgorde te schrijven met genoeg ademruimte, dit om de website optimaal te laten werken en ervoor te zorgen dat mijn code geen rommel is. Ik heb ook bij elke section een groene benaming gegeven zodat je bepaalde sections snel terug kan zoeken. Ik heb ook bij een section herbruikbare article blocks gemaakt zoals de opdrachtgever gevraagd heeft. Ik heb ook geprobeerd om onnodige classnames weg te laten zoals aan sections of articles, mocht er wel classnames gebruikt moeten worden waren deze verplicht in het Engels te doen van de opdrachtgever.

### Voorbeeld semantische code met ademruimte

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/d57e0382843719688fd487a89bed494e45b524b1/Informaat/informaat.html#L95-L125

### Voorbeeld van weinig overbodige classnames 

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/4392e2d8c97e0d2c9741aa5c67f6b806d87a86ab/Informaat/informaat.html#L64-L78

### Voorbeeld naamgeving

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/4392e2d8c97e0d2c9741aa5c67f6b806d87a86ab/Informaat/informaat.html#L233-L282

## CSS: 

In CSS heb ik ervoor gezorgd dat alles op de volgorde van de pagina staat zoals het ook in het HTML bestand staat en dat het daarin netjes genest is ( dus bijvoorbeeld in een section een article met daarin een h2 ) . Ik heb bovenaan de pagina de algemene styling weergegeven zodat dit makkelijk terug te vinden is. Ik heb ook een stylesheet gemaakt zodat ik niet bij elke tekst nog alle styling hoef toe te passen, maar dit gewoon met classnames kan doen.

### algemene styling

ik heb voor bepaalde onderdelen algemene styling gegeven zodat het sneller terug te vinden is en er minder code gebruikt hoeft te worden.

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/7b8c3d34ada655408de72a1de3632affc4d38a46/Informaat/informaat.css#L1-L43

### Styling uit de stylesheet

Ik heb met een stylesheet gewerkt zodat er minder onnodige code in mijn hoofd CSS bestand komt te staan.

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/4392e2d8c97e0d2c9741aa5c67f6b806d87a86ab/Informaat/styleguide.css#L45-L119

### Nesten van sections & mediaqueries

Ik heb alles netjes genest met de mediaqueries erbij zodat alles makkelijk en snel terug te vinden is. ( ook is dit handig voor eventueel een andere persoon die aan de code werkt! )

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/4392e2d8c97e0d2c9741aa5c67f6b806d87a86ab/Informaat/informaat.css#L363-L438


## JS: 

Ik heb dit netjes volgens de javascript regels geschreven door te beginnen met een querySelector met daarna een addEventListener met daarna een Function / classList. Ik heb ook groene info toegevoegd zodat je weet welke stukken code welke functie uitvoeren!

### Javascript code

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/4392e2d8c97e0d2c9741aa5c67f6b806d87a86ab/Informaat/informaat.js#L2-L30




