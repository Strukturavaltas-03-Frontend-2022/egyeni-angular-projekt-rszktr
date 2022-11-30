## v0.9
- Pipe-ok (szűrő, kereső, sorbarendező)
- Update / add váltás megvalósítása a szerkesztő oldalon
- tooltip bug-ot nem sikerült, megoldani, inkább törölve
- Kezdőoldal default bootstrap jumbotron, rövid üzenettel és gombbal
- CSS igazítások, reszponzivitás, feltételes színezések... stb

### Ismert problémák:
- Pagination nem frissül pipe szűrések után. Nem is tudom, hogy lehetne megoldani, 
esetleg párhuzamosan elindított számításokkal, de eh...
- Hasonló probléma: Mivel örülök, hogy egyáltalán valamilyen szinten működőképes
a Firebase, ezért odáig nem sikerült eljutnom, hogy BehaviorSubject-et varázsoljak
a szerverről érkező adatokból. Így tehát: Hello indokolatlanul sokszor, állandóan lekért
teljes adatbázis!
- 'Add game' gomb átalakulása darabos hover állapotról változtatva
- Firebase nem ad új játékhoz saját id-t (mondjuk nem is használom, but still...)
- Szerkesztő oldal checkboxaira még valami minimum formázás ráférne.
- Szebb kezdőlap, sablontól jobban elrugaszkodó arculat
- Képfeltöltés funkció híján új játékoknál nincs kép
- Undefined érték esetén a szűrök rakoncátlankodhatnak. Hibakezelés szükséges.

- A rövid readme-t is megírom rövidesen, csak már hajnal 3 és aaaaaaaaaaaa....

## v0.6
- Update metódus működik
- Pagination hozzáadása 'Bootstrap widgets' kiegészítővel (dinamikus)
- Új játék hozzáadása gomb tooltip-pel. (bug: oldalváltáskor helyén marad)
- Új játék gomb 0 indexű, üres űrlapra visz. 

## v0.5
- A szerkesztés gombra kattintás a játék egyedi szerkesztő oldalára visz.
- A szerkesztő oldalon az input mezőkben az adatok a szerverről származnak.
- Reaktív form, az adatoknak megfelelő típusú elemekkel.
- Checkbox checked állapota a játék értékei alapján.
- Játék értékeivel egyező alapértelmezett elemek a select típusú mezőknél is.

## v0.35
- hosting elkészítése: https://game-collection-fb8ef.web.app/
- az éles weboldalon már elfogadja a törlés parancsot.

## v0.3
- gombok hozzáadása kártyákhoz
- lassú ráébredés, hogy a realtime database nem enged localhostról törölni 
CORS miatt. hosting beállítása folyamatban.

## v0.25
- képek hozzáadása lokálisan (/assets/images)
- kártya design kialakítása
- kártyalistázó kialakítása (egyelőre a HomeComponent-ben)
- kártyalistázó reszponzivitásának kialakítása

## v0.1
- config.service.ts létrehozása dinamikus táblákhoz és reaktív form-okhoz
- Adatok kezdetleges táblázatos megjelenítése a listázóban

## v0.05
- Sablon navbar
- Adatok jönnek a firebase szerverről
- Routing alapok

## v0.01
- Angular projekt létrehozása
- Oldalkomponensek létrehozása (még üres)
- Service létrehozása (még üres)
- CRUD
- environment beállítása (firebase, realtime database)
