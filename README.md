# Forslag API-server

## Oversikt

Denne serverkomponenten, bygget med Express.js, tilbyr et enkelt API for håndtering av forslag og brukerautentisering innenfor en organisasjon. Den lar brukere poste forslag til forbedringer på arbeidsplassen og hente en liste over alle innsendte forslag. I tillegg støtter den grunnleggende funksjonalitet for brukerinnlogging, med forskjell på roller som HR og vanlige brukere.

## Funksjoner

- **Poste Forslag:** Brukere kan sende inn forslag for å forbedre arbeidsplassen.
- **Hente Forslag:** Hent en liste over alle innsendte forslag.
- **Brukerautentisering:** Støtter innloggingsfunksjonalitet med rollebasert tilgangskontroll (HR og standardbrukere).

## Komme i gang

### Forutsetninger

- Node.js installert på maskinen din.
- Grunnleggende kjennskap til JavaScript og Node.js.

### Installasjon

1. Klon repoet til din lokale maskin ved å bruke `git clone https://github.com/DevrMichael/suggestion-box.git`.
2. Installer nødvendige avhengigheter ved å kjøre `npm install`.

### Kjøring av serveren

1. Start serveren ved å kjøre kommandoen `node server.js`

## API Endepunkter

### POST `/api/suggestions`

- **Beskrivelse:** Lar en bruker sende inn et forslag.
- **Body:** `{ "suggestion": "Ditt forslag her" }`
- **Respons:** `{ "message": "Forslag mottatt" }`

### GET `/api/suggestions`

- **Beskrivelse:** Henter en liste over alle forslag.
- **Respons:** Liste over forslag i JSON-format.

### POST `/api/login`

- **Beskrivelse:** Autentiserer en bruker og returnerer rolleinformasjon.
- **Body:** `{ "username": "brukernavn", "password": "passord" }`
- **Respons:** Suksess eller feil i autentiseringen, inkludert brukerrolle.

## Sikkerhet

Denne serveren implementerer enkel autentisering og bør ikke brukes i produksjon uten ytterligere sikkerhetstiltak. Passord håndteres i klartekst i koden, noe som ikke er en anbefalt praksis. Vurder å implementere sikrere autentiseringsmekanismer som OAuth eller JWT for produksjonsmiljøer.
