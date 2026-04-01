# Projekt linkek kézi beállítása

Az oldal úgy lett összerakva, hogy a publikus linkeket egyetlen fájlban kelljen szerkeszteni.

## Hol kell átírni?

Nyisd meg ezt a fájlt:

- [site-config.js](../site-config.js)

Ebben a fájlban minden olyan URL külön mezőben van, amit később kézzel fogsz beírni.

## Kötelezően kitöltendő mezők

- `organization.githubUrl`
  Ide jön a GitHub organization vagy profile oldal URL-je.

- `projects.grillhub.liveUrl`
  Ide jön a GrillHub publikus app linkje, ha lesz deployolt verzió.

- `projects.grillhub.repoUrl`
  Ide jön a GrillHub repository URL-je.

- `projects.shopper24.liveUrl`
  Ide jön a Shopper24 publikus app linkje.

- `projects.shopper24.repoUrl`
  Ide jön a Shopper24 repository URL-je.

- `projects.energourmet.liveUrl`
  Ide jön az EnerGourmet publikus app linkje.

- `projects.energourmet.repoUrl`
  Ide jön az EnerGourmet repository URL-je.

- `projects.vityasLife.liveUrl`
  Ide jön a Vitya's Life játék publikus linkje.

- `projects.vityasLife.repoUrl`
  Ide jön a Vitya's Life repository URL-je.

- `contact.emailUrl`
  Ide jöhet `mailto:te@pelda.hu` formájú link, ha szeretnél kapcsolat gombot is.

## Milyen formátumban írd be?

- Weboldalhoz teljes URL-t adj meg, például: `https://example.com`
- GitHub repohoz teljes URL-t adj meg, például: `https://github.com/vitya-labs/grillhub`
- Emailhez `mailto:` formátumot használj, például: `mailto:hello@example.com`

## Mi történik, ha valamit üresen hagysz?

Semmi nem törik el. Az adott gomb automatikusan letiltott állapotban marad, amíg nem adsz meg valós linket.

## Gyors tipp

Ha gyorsan végig akarod nézni a beírandó helyeket, keress rá erre a szövegre:

- `TODO_ADD_`
