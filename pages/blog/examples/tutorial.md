---
title: Das sagt Pflege-Expertin Stephanie S. zu Melli
description: |
  Stephanie ist Pflegedienstleiterin einer Pflegeeinrichtung in Wismar. Fünf ihrer Schützlinge haben Melli getestet, das ist ihr Resümee.
category:
  name: Seniortech
  href: blogs
author:
  name: Name des Autors
date: 2022-08-08T16:00:00.000+00:00
imageUrl: https://assets.melli.com/images/own-content/melli_commercial-screenshots_social-contacts_1.webp
---

## Blog-Header
Nutze `Blog-Header` um einen Blog-Header sowie eine Vorschaukarte auf der vorherigen Webseite hinzuzufügen.

Hier passe den Titel, die Beschreibung, den Namen  (das grüne Tag) unter Category, den Namen des Autors, das Datum und das Bild (durch Image URL) an.

Unter category im href schreibe immer blogs!

### Code

```yaml
---
title: Das sagt Pflege-Expertin Stephanie S. zu Melli
description: |
  Stephanie ist Pflegedienstleiterin einer Pflegeeinrichtung in Wismar. Fünf ihrer Schützlinge haben Melli getestet, das ist ihr Resümee.
category:
  name: Seniortech
  href: blogs
author:
  name: Name des Autors
date: 2022-08-08T16:00:00.000+00:00
imageUrl: https://assets.melli.com/images/stock/red-hair-greeting-1024.webp
---
```


## StaticGallery

Nutze `StaticGallery` um 2, 3 oder 4 Bilder hinzuzufügen.

Der Aspekt-Ratio von jedem Bild bleibt immer 8/11.

Bis zu 3 Bilder in einer Zeile. 

Bei 4 Bildern, 2 Zeilen mit je 2 Bildern bei kleinem Bildschirm.

Gebe die Image URLs (2-4!) an, um die Bilder hinzuzufügen.

### Beispiel

<TutorialWrapper>
    <StaticGallery :images="[
        'https://assets.melli.com/images/team/hans-ganter.webp', 
        'https://assets.melli.com/images/team/matthias-weber.webp',
        'https://assets.melli.com/images/team/franziska-lerch.webp',
    ]"/>
</TutorialWrapper>

### Code

```html
<StaticGallery
  :images="[
    'https://assets.melli.com/images/team/hans-ganter.webp', 
    'https://assets.melli.com/images/team/matthias-weber.webp',
    'https://assets.melli.com/images/team/franziska-lerch.webp',
]"
/>
```

## DynamicGallery

Nutze `DynamicGallery` um mehr als 4 Bilder auf dynamische Weise hinzuzufügen.

Das letzte Bild ist so gestaltet, dass es sich anpasst und breiter als die anderen Bilder ist.

Gebe die Image URLs der Bilder an. 

Die letzte URL könnte von einem Bild sein, das in einer größeren/breiten Auflösung gut aussehen würde.

### Beispiel

<TutorialWrapper>
    <DynamicGallery :images="[
        'https://assets.melli.com/images/team/hans-ganter.webp', 
        'https://assets.melli.com/images/team/matthias-weber.webp',
        'https://assets.melli.com/images/team/franziska-lerch.webp',
        'https://assets.melli.com/images/team/franziska-lerch.webp',
        'https://assets.melli.com/images/team/franziska-lerch.webp',
        'https://assets.melli.com/images/team/franziska-lerch.webp',
        'https://assets.melli.com/images/team/hans-ganter.webp', 
        'https://assets.melli.com/images/team/matthias-weber.webp',
    ]"/>
</TutorialWrapper>

### Code

```html
<DynamicGallery
  :images="[
    'https://assets.melli.com/images/team/hans-ganter.webp', 
    'https://assets.melli.com/images/team/matthias-weber.webp',
    'https://assets.melli.com/images/team/franziska-lerch.webp',
    'https://assets.melli.com/images/team/franziska-lerch.webp',
    'https://assets.melli.com/images/team/franziska-lerch.webp',
    'https://assets.melli.com/images/team/franziska-lerch.webp',
    'https://assets.melli.com/images/team/hans-ganter.webp', 
    'https://assets.melli.com/images/team/matthias-weber.webp',
]"
/>
```

## IconList

Nutze `IconList` um eine Liste von Elementen mit anpassbaren Icons zu erstellen.

Heading ist immer fett gedruckt, aber optional.

Heading und Icon ist innerhalb der " " veränderbar.

optional: Weiteren Text im Absatz für den jeweiligen Listenpunkt hinzufügen. 


### Beispiel

<TutorialWrapper>
    <IconList heading="Bewerben: " icon="i-carbon:phone">Bewirb dich selbst, deine Eltern oder Großeltern als Testnutzer. Dafür musst du uns nur deinen Namen mitteilen, einige wenige Kontaktdaten für die Kommunikation zur Verfügung stellen und angeben ob du selbst am Test teilnimmst, oder du die Bewerbung für jemand anderen einreichst.
    </IconList>    
    <IconList heading="Bewerben: " icon="i-carbon:phone">Bewirb dich selbst, deine Eltern oder Großeltern als Testnutzer. Dafür musst du uns nur deinen Namen mitteilen, einige wenige Kontaktdaten für die Kommunikation zur Verfügung stellen und angeben ob du selbst am Test teilnimmst, oder du die Bewerbung für jemand anderen einreichst.
    </IconList>    
    <IconList heading="Bewerben: " icon="i-carbon:phone">Bewirb dich selbst, deine Eltern oder Großeltern als Testnutzer. Dafür musst du uns nur deinen Namen mitteilen, einige wenige Kontaktdaten für die Kommunikation zur Verfügung stellen und angeben ob du selbst am Test teilnimmst, oder du die Bewerbung für jemand anderen einreichst.
    </IconList>
</TutorialWrapper>

### Code

```html
<IconList heading="Bewerben: " icon="i-carbon:phone">
  Bewirb dich selbst, deine Eltern oder Großeltern als Testnutzer. Dafür musst
  du uns nur deinen Namen mitteilen, einige wenige Kontaktdaten für die
  Kommunikation zur Verfügung stellen und angeben ob du selbst am Test
  teilnimmst, oder du die Bewerbung für jemand anderen einreichst.
</IconList>
<IconList heading="Bewerben: " icon="i-carbon:phone">
  Bewirb dich selbst, deine Eltern oder Großeltern als Testnutzer. Dafür musst
  du uns nur deinen Namen mitteilen, einige wenige Kontaktdaten für die
  Kommunikation zur Verfügung stellen und angeben ob du selbst am Test
  teilnimmst, oder du die Bewerbung für jemand anderen einreichst.
</IconList>
<IconList heading="Bewerben: " icon="i-carbon:phone">
  Bewirb dich selbst, deine Eltern oder Großeltern als Testnutzer. Dafür musst
  du uns nur deinen Namen mitteilen, einige wenige Kontaktdaten für die
  Kommunikation zur Verfügung stellen und angeben ob du selbst am Test
  teilnimmst, oder du die Bewerbung für jemand anderen einreichst.
</IconList>
```

## InfoBox

Nutze `InfoBox` um ein Infobox mit einem Icon, Heading und Text hinzuzufügen. Alle Komponente sind optional.

Heading und Icon ist innerhalb der  " "  veränderbar. 

Beliebig viele neue Absätze können hinzugefügt werden, indem man das p-Tag kopiert und nur den Text ändert.

### Beispiel

<TutorialWrapper>
    <InfoBox icon="i-carbon:information" heading="Emilia ensures that seniors are more satisfied with life and lets their loved ones participate.">
    <p class="text-primary-900 text-lg">
    As a digital, voice-controlled everyday companion, Emilia motivates seniors to social contacts, employment and more structure in everyday life. It brings its users together and thus noticeably increases the satisfaction in the lives of senior citizens.
    </p>
    <p class="text-primary-900 text-lg">
    At the same time, Emilia gives friends and relatives the opportunity to participate in the lives of their parents or grandparents via the smartphone app: by sharing pictures or videos, via voice-controlled video calls or by giving Emilia an update on their well-being.
    </p>
    </InfoBox>
</TutorialWrapper>

### Code

```html
<InfoBox
  icon="i-carbon:information"
  heading="Emilia ensures that seniors are more satisfied with life and lets their loved ones participate.">
  <p class="text-primary-900 text-lg">
    As a digital, voice-controlled everyday companion, Emilia motivates seniors
    to social contacts, employment and more structure in everyday life. It
    brings its users together and thus noticeably increases the satisfaction in
    the lives of senior citizens.
  </p>
  <p class="text-primary-900 text-lg">
    At the same time, Emilia gives friends and relatives the opportunity to
    participate in the lives of their parents or grandparents via the smartphone
    app: by sharing pictures or videos, via voice-controlled video calls or by
    giving Emilia an update on their well-being.
  </p>
</InfoBox>
```

## BlogQuote

Nutze `BlogQuote` um ein Zitat hinzuzufügen.

Dabei ist die Quelle (optional) und Zitat veränderbar.

### Beispiel

<TutorialWrapper>
    <BlogQuote source="Name, Vorname (Quelle)">
        Wenn soziale Beziehungen im Leben fehlen, ist das über einen längeren Zeitraum ähnlich gefährlich wie übermäßiger Alkoholkonsum, Nikotin, schlechte Ernährung oder ständiger Bewegungsmangel.
    </BlogQuote>
</TutorialWrapper>

### Code

```html
<BlogQuote source="Name, Vorname (Quelle)">
  Wenn soziale Beziehungen im Leben fehlen, ist das über einen längeren Zeitraum
  ähnlich gefährlich wie übermäßiger Alkoholkonsum, Nikotin, schlechte Ernährung
  oder ständiger Bewegungsmangel.
</BlogQuote>
```

## CheckList

Nutze `CheckList` um eine Liste von Elementen (vielleicht in einer anderen Komponente) hinzuzufügen.

Hier sind die Icons auch anpassbar, aber wenn nicht angegeben, wird das Standardicon auf ein Häkchen gesetzt.

### Beispiel

<TutorialWrapper>
    <CheckList icon='i-carbon:phone'>
        You help to develop a product that can sustainably enrich the lives of seniors.
    </CheckList>
    <CheckList icon='i-carbon:checkmark'>
        You can use Emilia for free and help design future functions according to your ideas.
    </CheckList>
    <CheckList >
        We would like to thank you with an unlimited, free Emilia subscription - practically for a lifetime.
    </CheckList>
    <CheckList>
        You help to develop a product that can sustainably enrich the lives of seniors.
    </CheckList>
</TutorialWrapper>


### Code

```html
    <CheckList icon='i-carbon:phone'>
        You help to develop a product that can sustainably enrich the lives of seniors.
    </CheckList>
    <CheckList icon='i-carbon:checkmark'>You can use Emilia for free and help design future functions according to your ideas.
    </CheckList>
    <CheckList >We would like to thank you with an unlimited, free Emilia subscription - practically for a lifetime.
    </CheckList>
    <CheckList>You help to develop a product that can sustainably enrich the lives of seniors.
    </CheckList>
```

## Image1 (with rounded corners)

### Beispiel

<TutorialWrapper>
  <img src="https://assets.melli.com/images/own-content/melli_image_senior-group-with-mockups-1536.webp" style="border-radius:32px">
</TutorialWrapper>

### Code
```html
  <img src="https://assets.melli.com/images/own-content/melli_image_senior-group-with-mockups-1536.webp" style="border-radius:32px">
```

## Image2 (with rounded corners)

Nutze `<img>` um ...
- src für ein anderes Bild ändern
- Aspect ration unter aspect- für ein anderes Layout ändern 
 

### Beispiel

<TutorialWrapper>
  <img class="rounded-3xl aspect-9/4 object-cover" src="https://assets.melli.com/images/stock/man-livingroom-1024.webp" alt="Old man in lingroom thinking">
</TutorialWrapper>

### Code

```html
  <img class="rounded-3xl aspect-9/4 object-cover" src="https://assets.melli.com/images/stock/man-livingroom-1024.webp" alt="Old man in lingroom thinking">
```

## IconColumn

Nutze `IconColumn` um ...

- Ab 2 Columns mit anpassbare Icons hinzuzufügen
- Dabei ändere der Icon unter icon 
- Bei heading gebe die Unterschrift
- Bei text gebe der Inhalt unter die Überschrift
- Jeder IconColumn Tag enthält 2 Coloumns 
- Icons findest du unter: https://icones.js.org

### Beispiel

<TutorialWrapper>
    <IconColumn :items="[{icon: 'i-carbon:phone', heading: 'Neue Freunde finden ist keine Sache des Alters', text:'Familienangehörige sind häufig die einzigen Kontaktpersonen ihrer Eltern oder Großeltern. Das kann ganz schön viel Druck erzeugen und erfahrungsgemäß ein Herd für Konflikte sein. Eigene Freunde und nahestehende Bekannte stellen für Angehörige nicht nur eine Entlastung vom immerwährenden Verantwortungsgefühl dar, sondern bieten Senioren auch mehr Abwechslung im Alltag.' },
    {icon: 'i-carbon:star', heading: 'Neue Freunde finden ist keine Sache des Alters', text:'Familienangehörige sind häufig die einzigen Kontaktpersonen ihrer Eltern oder Großeltern. Das kann ganz schön viel Druck erzeugen und erfahrungsgemäß ein Herd für Konflikte sein. Eigene Freunde und nahestehende Bekannte stellen für Angehörige nicht nur eine Entlastung vom immerwährenden Verantwortungsgefühl dar, sondern bieten Senioren auch mehr Abwechslung im Alltag.' },]">
    </IconColumn> 
    <br>
    <IconColumn :items="[{icon: 'i-carbon:star', heading: 'Neue Freunde finden ist keine Sache des Alters', text:'Familienangehörige sind häufig die einzigen Kontaktpersonen ihrer Eltern oder Großeltern. Das kann ganz schön viel Druck erzeugen und erfahrungsgemäß ein Herd für Konflikte sein. Eigene Freunde und nahestehende Bekannte stellen für Angehörige nicht nur eine Entlastung vom immerwährenden Verantwortungsgefühl dar, sondern bieten Senioren auch mehr Abwechslung im Alltag.' }   ,{icon: 'i-carbon:star', heading: 'Neue Freunde finden ist keine Sache des Alters', text:'Familienangehörige sind häufig die einzigen Kontaktpersonen ihrer Eltern oder Großeltern. Das kann ganz schön viel Druck erzeugen und erfahrungsgemäß ein Herd für Konflikte sein. Eigene Freunde und nahestehende Bekannte stellen für Angehörige nicht nur eine Entlastung vom immerwährenden Verantwortungsgefühl dar, sondern bieten Senioren auch mehr Abwechslung im Alltag.' },]"></IconColumn>
</TutorialWrapper>

### Code

```html    
  <IconColumn :items="[{icon: 'i-carbon:star', heading: 'Neue Freunde finden ist keine Sache des Alters', text:'Familienangehörige sind häufig die einzigen Kontaktpersonen ihrer Eltern oder Großeltern. Das kann ganz schön viel Druck erzeugen und erfahrungsgemäß ein Herd für Konflikte sein. Eigene Freunde und nahestehende Bekannte stellen für Angehörige nicht nur eine Entlastung vom immerwährenden Verantwortungsgefühl dar, sondern bieten Senioren auch mehr Abwechslung im Alltag.' },
    {icon: 'i-carbon:star', heading: 'Neue Freunde finden ist keine Sache des Alters', text:'Familienangehörige sind häufig die einzigen Kontaktpersonen ihrer Eltern oder Großeltern. Das kann ganz schön viel Druck erzeugen und erfahrungsgemäß ein Herd für Konflikte sein. Eigene Freunde und nahestehende Bekannte stellen für Angehörige nicht nur eine Entlastung vom immerwährenden Verantwortungsgefühl dar, sondern bieten Senioren auch mehr Abwechslung im Alltag.' },]">
  </IconColumn> 
  <IconColumn :items="[{icon: 'i-carbon:star', heading: 'Neue Freunde finden ist keine Sache des Alters', text:'Familienangehörige sind häufig die einzigen Kontaktpersonen ihrer Eltern oder Großeltern. Das kann ganz schön viel Druck erzeugen und erfahrungsgemäß ein Herd für Konflikte sein. Eigene Freunde und nahestehende Bekannte stellen für Angehörige nicht nur eine Entlastung vom immerwährenden Verantwortungsgefühl dar, sondern bieten Senioren auch mehr Abwechslung im Alltag.' }   ,{icon: 'i-carbon:star', heading: 'Neue Freunde finden ist keine Sache des Alters', text:'Familienangehörige sind häufig die einzigen Kontaktpersonen ihrer Eltern oder Großeltern. Das kann ganz schön viel Druck erzeugen und erfahrungsgemäß ein Herd für Konflikte sein. Eigene Freunde und nahestehende Bekannte stellen für Angehörige nicht nur eine Entlastung vom immerwährenden Verantwortungsgefühl dar, sondern bieten Senioren auch mehr Abwechslung im Alltag.' },]">
  </IconColumn>
```

## PromoComponentIcon

Nutze `PromoComponentIcon` um ...

<div class="bg-primary-900 rounded-3xl p-8 grid gap-4 lg:w-200 text-center mx-auto">
    <img src="https://assets.melli.com/bubble-icons/bubble-icon_gift_1-green.svg" class="w-24 h-24 mx-auto">
    <h1 class="text-white font-semibold text-4xl md:text-5xl leading-tight md:text-center my-0">
      Mellis Tipp für Weihnachten:
    </h1>
    <p class="text-white text-xl md:text-3xl leading-normal md:text-center my-0">
      Schenke Oma nicht nur ein Gesellschaftsspiel, sondern die Spielfreunde gleich mit.
    </p>
    <RouterLink to="/shop" class="bg-primary-500 text-white text-base sm:text-lg py-4 px-8 rounded-lg w-fit mx-auto my-4">
      Jetzt 60 Tage kostenlos ausprobieren!
    </RouterLink>
</div>

```html    
  <div class="bg-primary-900 rounded-3xl p-8 grid gap-4 lg:w-200 text-center mx-auto">
    <img src="https://assets.melli.com/bubble-icons/bubble-icon_gift_1-green.svg" class="w-24 h-24 mx-auto">
    <h1 class="text-white font-semibold text-4xl md:text-5xl leading-tight md:text-center my-0">
      Mellis Tipp für Weihnachten:
    </h1>
    <p class="text-white text-xl md:text-3xl leading-normal md:text-center my-0">
      Schenke Oma nicht nur ein Gesellschaftsspiel, sondern die Spielfreunde gleich mit.
    </p>
    <RouterLink to="/shop" class="bg-primary-500 text-white text-base sm:text-lg py-4 px-8 rounded-lg w-fit mx-auto my-4">
      Jetzt 60 Tage kostenlos ausprobieren!
    </RouterLink>
  </div>
```

## intro-section

Nutze `intro-section` um ein header und text als Intro (eine andere Schriftart) zu schreiben.

Dabei müssen die verschiedene Absätze durch ein &lt;br&gt;-Tag getrennt werden.

Der Teil besteht aus einer Überschrift und einem Text, die beide optional sind.

### Beispiel

<TutorialWrapper>
  <intro-section header="Melli erwacht zum Leben." text="Nach 10 Monaten Entwicklungszeit, über 100 Produkttests und mehr als 1000 Produkt-Iterationen ist es nun endlich soweit – Melli möchte die ersten Gespräche mit ihren Nutzern führen." />
  <br>
  <intro-section text="Als Dankeschön schenken wir allen Teilnehmer eine lebenslange kostenfreie Nutzung von Melli." />
</TutorialWrapper>

### Code

```html
  <intro-section header="Melli erwacht zum Leben." 
  text="Nach 10 Monaten Entwicklungszeit, über 100 Produkttests und mehr als 1000 Produkt-Iterationen ist es nun endlich soweit – Melli möchte die ersten Gespräche mit ihren Nutzern führen." />
  <br>
  <intro-section text="Als Dankeschön schenken wir allen Teilnehmer eine lebenslange kostenfreie Nutzung von Melli." />
```

