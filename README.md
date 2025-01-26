# Informaat

De opdracht was om een HTML Template op te zetten van de homepage met herbruikbare onderdelen, zoals bijvoorbeeld met een section met daarin 4 articles. als dit af was mochten wij verder met het stylen van de website voor verschillende devices.

# Beschrijving Website Informaat

De website is een homepage pagina die is gemaakt doormiddel van de huisstijl van Informaat. Op de homepage staat vooral informatie voor het navigeren van verschillende subpaginas en de informatie binnen de verschillende subpaginas. Deze subpaginas hebben wij niet gemaakt omdat dit niet de opdracht was. In de website zitten verschillende breakpoints, De website is begonnen met als eerst een mobile first ontwerp ( 360px ) daarna een tussen-size ( 1024px ) en daarna een size voor desktop ( 1305px - 1920px en + ). Vanaf de tussenpagina komt er in de kopsection een nieuw plaatje erbij en ook bij de section over de toekomst, dit omdat dit niet geschikt was voor het mobiele desgin kwa layout.

De volgende code heb ik gebruikt om het voorbeeld hieronder responsive te krijgen

De responsive header

    nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        translate: 100%;


        @media ( min-width: 1305px ) {
            z-index: 10;
            translate: unset;
            margin-left: 40%;
            margin-top: 110px;
        }


        ul {
            @media ( min-width: 1305px ) {
                display: flex;
                flex-direction: row;
                gap: 40px;
            }
        }


        li {
            margin-top: 8px;
        }


            a {
                @media ( min-width: 1305px ) {
                    color: black;
                }
            }
    }


    .nav-open {
        background-color: white;
        z-index: 9;
        top: 0px;
        padding-top: 100px;
        translate: 50%;
        transition: 0.2s; }
}


responsive section:nth-of-type(1)

body > section:nth-of-type(1) {


    display:flex;
    flex-direction: column;
    position: relative;
    background-color: #D92B4D;
    gap: 24px;
    padding-top: 24px;
    padding-bottom: 88px;


    @media ( min-width: 1305px ) {
        padding-bottom: 350px;
        padding-right: 0%;
    }


    h1 { 
        grid-column: span 2;
        max-width: 857px;
        color: white;
        margin-top: 24px;


        @media ( min-width: 1024px ) {
            font-size: 64px;
        }


        @media ( min-width: 1305px ) {
            font-size: 88px;
            z-index: 1;
            margin-bottom: 56px ;
        }
    }


        p {
            max-width: 857px;
            margin-bottom: 8px;
            color: white;
            text-wrap: balance;


            @media ( min-width: 1024px ) {
                font-size: 22px;
            }


            @media ( min-width: 1305px ) {
                font-size: 26px;
                max-width: 556px;
            }
        }


        a {
            @media ( min-width: 1305px ) {
                margin-bottom: 15%;
            }
        }


        button {
            position: absolute;
            right: 20px;
            bottom: 20px;
            height: 96px;
            width: 96px;
            background: none;
            border: none;


            @media ( min-width: 1024px ) {
                left: 80px;
                bottom: 80px;
            }


            @media ( min-width: 1305px ) {
                display: none;
            }
        }
            
        .img-nodisplay {
            display: none;


            @media ( min-width: 1024px ) {
                display: block;
                position: relative;
                aspect-ratio: 1.38;
                width: 66%;
                margin-top: -3vw;
                margin-right: -4vw;
                margin-left: auto;
            }


            @media ( min-width: 1305px ) {
                margin-top: -1020px;
                margin-right: 0vw;
                z-index: 0;
            }
        }
}

Link naar 
    

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

HTML: Ik heb ervoor gezorgd dat mijn HTML op Semantische volgorde te schrijven met genoeg ademruimte, dit om de website optimaal te laten werken en ervoor te zorgen dat mijn code geen rommel is. Ik heb ook bij elke section een groene benaming gegeven zodat je bepaalde sections snel terug kan zoeken. Ik heb ook bij een section herbruikbare article blocks gemaakt zoals de opdrachtgever gevraagd heeft.

https://github.com/KyanTG/the-startup-responsive-interactive-website/blob/d57e0382843719688fd487a89bed494e45b524b1/Informaat/informaat.html#L95-L125

CSS: In CSS heb ik ervoor gezorgd dat alles op de volgorde van de pagina staat en dat het daarin netjes genest is ( dus bijvoorbeeld in een section een article met daarin een h2. Ik heb bovenaan de pagina de algemene styling bovenaan weergegeven zodat dit makkelijk terug te vinden is. Ik heb ook een stylesheet gemaakt zodat ik niet bij elke tekst nog alle styling hoef toe te passen, maar dit gewoon met classnames kan doen.

Javascript: Ik heb dit netjes volgens de javascript regels geschreven door te beginnen met een querySelector met daarna een addEventListener met daarna een Function / classList.


