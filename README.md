# Skoleavisen - Open Source CMS for Skoler

Velkommen til Skoleavisen, et open-source prosjekt som lar skoler enkelt sette opp og administrere sin egen digitale avis. Dette prosjektet er designet for å være fleksibelt og lett å tilpasse, slik at hver skole kan ha sin unike avis med egne artikler og innhold.

## 🤝 Bidragsytere

- Prosjektet er utviklet av:

- **Nikolas Vardeberg** – Prosjektansvarlig, utvikler og utviklingsleder

- **Alexsander Meinhart** – Designer & Mediadesigner

- **Danil Chepeal** – UI-designer, & Mediadesigner (Sigma)

- **Adiam Gideai** – Utvikler

## 🛠 Teknologier

- **Next.js** – For en rask og SEO-vennlig frontend.

- **Sanity.io** – Headless CMS for innholdshåndtering.

- **Tailwind CSS** – For moderne og tilpassbar styling.

- **Vercel** – Anbefalt hostingplattform for enkel distribusjon.

## 📌 Funksjoner

- **CMS-system**: Administrer artikler, kategorier og brukere direkte fra et enkelt grensesnitt.

- **Sanity.io-integrasjon**: Bruk Sanity som headless CMS for å lagre og administrere innhold.

- **Enkel tilpasning**: Tilpass farger, logo og layout for å matche skolens profil.

- **Responsivt design**: Fungerer sømløst på både desktop og mobil.

- **Rask installasjon**: Sett opp på få minutter med minimale konfigurasjonskrav.

## Kom i gang

### Klon repoet

```
git clone https://github.com/nikolas-vardeberg/skoleavisen.git
cd skoleavisen
```

### Installer avhengigheter

```
pnpm i
```

### Konfigurer miljøvariabler
Dette prosjektet krever en tilkobling til Sanity.io. Du må legge til dine egne Sanity-miljøvariabler. Kopier **.env.example** til en ny fil kalt **.env.local** og legg inn dine Sanity API-nøkler.
Oppdater **.env.local** med dine Sanity API-nøkler:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-token>
NEXT_PUBLIC_SANITY_DATASET="production"
```

### Start utviklingsserveren

```
pnpm dev
```

## 📜 Lisens

Dette prosjektet er open-source og lisensiert under MIT-lisensen. Du står fritt til å bruke, endre og distribuere det videre.