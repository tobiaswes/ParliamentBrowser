# ParliamentBrowser

Hej och välkommen! Här är min ParliamentBrowser app. Här under kommer min redovisning vad jag har gjort.

## Ska-krav:  **Klart 6/6**
- Applikationen består av två sidor, varav en sida är en lista över alla sittande lagtingsledamöter **Klart**
- Information om lagtingsledamöter hämtas från https://api.lagtinget.ax/api/persons.json **Klart**
- Lagtingsledamöter visas i en FlatList **Klart**
- Listans element utnyttjar en tredjepartslösning från t.ex. React Native Elements eller React Native Paper **Klart**
- Den andra sidan är en välkomstskärm med valfri layout. Denna skärm visas när applikationen startar. **Klart**
- Expo Router eller React Navigation används för att förflytta sig mellan de två sidorna **Klart**

## Bör-krav: **Nästan Klart 2/3**
- Ett sökfält används för att söka efter ledamöter/filtrera listan med ledamöter **Inte implementerat**
- Ledamöternas foton visas som avatarer i listan **Klart**
- Applikationen innehåller en tredje sida i form av en detaljvy som visas när en ledamot väljs från listan. Listan visar mer detaljerad information om ledamoten, åtminstone födelsetid **Klart**

## Trevligt-att-ha-krav: **Inte implementerat 0/1**
- Detaljsidan visar information som endast kan hittas genom att göra mer specifika API-förfrågningar för denna person, t.ex. fullständigt namn, epost, och (för en större utmaning) roller i olika organisationer, utskrivna i klartext.