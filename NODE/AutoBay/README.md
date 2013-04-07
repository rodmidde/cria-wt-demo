Stappenplan AutoBay

# NODE
Er zijn twee mogelijke setups, lokaal of VirtualBox.

## SETUP 1 omgeving: lokaal
* Installeer MongoDB: http://www.mongodb.org/downloads
* Installeer Node.js (http://nodejs.org/download/). 
* Zorg dat je c:\nodejs, c:\nodejs\node_modules en c:\windows\system32 in je PATH staan. Maak hiervoor een environment variabele aan (gebruikersvariabele, geen systeemvariabele) en zet deze op (c:\node is het standaard pad):

~~~
  %PATH%;c:\windows\system32;c:\nodejs;c:\nodejs\node_modules
~~~

* Installeer de volgende modules(zie ook http://cria.tezzt.nl/wordpress/?page_id=52859): 

Let op: Kopieer de regels niet rechtstreeks, maar tot aan het #-je, dit is comment! 
~~~
  npm install -g express # install express framework, see http://expressjs.com
  npm install -g supervisor # for development, see https://github.com/isaacs/node-supervisor
  npm install -g forever # continuous running, see https://github.com/nodejitsu/forever
  npm install -g mongoose # database driver, see http://mongoosejs.com
  npm install -g socket.io # websocket implementation, see http://socket.io
~~~

* Installeer RockMongo (web-based admin voor mongo): http://rockmongo.com/downloads

## SETUP 2 omgeving: VirtualBox
* Installeer virtualbox (https://www.virtualbox.org)
* Download de geprepareerde VM (http://cria.tezzt.nl/downloads/webdev-node.ova)
* Check of alles werkt en indien nodig voer de installatie- (http://cria.tezzt.nl/wordpress/?page_id=61487) en/of configuratie (http://cria.tezzt.nl/wordpress/?page_id=52859) opnieuw uit

Er zijn meerdere wegen naar Rome, maar maak een keuze uit een van de onderste twee. De eerste aanpak doet eerst het back-end (lastigste) en daarna het front-end, de tweede aanpak geeft snel visueel resultaat maar de data/JSON-koppeling komt dan op het einde.

# PHP
Installeer XAMPP. Als Apache niet wil starten check dan dat poort 80 en 443 niet bezet is door IIS op Windows (het beste zet je de WebServer/IIS van Windows uit)

# AANPAK AutoBay Applicatie, BOTTOM-UP

* Bekijk de AutoBay demo op http://cria.tezzt.nl/wordpress/?page_id=64477. Het voorbeeld maakt gebruik van classes (Relation) en subclasses (Administrator en Customer), maar dat is niet noodzakelijk. 
* Maak een klasse-/moduleontwerp voor de client, server en database. Voor de database kun je kijken naar http://cria.tezzt.nl/wordpress/wp-content/uploads/2013/02/Schermafbeelding-2013-03-27-om-22.20.17.png. Houd bij het ontwerp goed rekening met welke functionaliteit je op de client en op de server wilt hebben, denk hierbij aan:
  - client: aanroepen van urls met HTTP of WebSockets, het verwerken van JSON, het tonen van JSON data in de vorm van dynamische HTML
  - server: ontvangen van HTTP/WebSocket-aanroepen, aanroepen van queries en connecties met Mongo en het returnen van (JSON) data
* Realiseer de database door een schema te creeren met Mongoose en een stukje code waarmee je enkele queries kunt testen door je .js bestand te runnen met Node. Je kunt met RockMongo of via de mongo command line checken of de juiste data erin staat.
* Realiseer een HTTP- of WebSocket server die requests kan koppelen aan een of meerdere queries. Je kunt gebruik maken van REST zoals in het voorbeeld (http://cria.tezzt.nl/wordpress/?page_id=64477), maar dat is niet noodzakelijk. Je REST/HTTP server kun je het beste bouwen met Express, voor WebSockets is Socket.IO een prima start.
* Schrijf wat code waarmee je de HTTP-call kan doen (XmlHttpRequest of jQuery/etc.) en kunt testen. Zorg ervoor dat je alvast JSON kunt alerten of kunt tonen in je browser.
* Schrijf code waarmee je de JSON kunt parsen en kunt representeren in HTML/CSS
* Gegeven de algemene stappen kun je nu:
  - een scherm opbouwen met alle auto's (select, get)
  - een filter maken waarmee je een _selectie_ van auto's kan ophalen (select, get)
  - details kunt opvragen van een geselecteerde auto (select, get)
  - een reserveringsformulier toont voor de geselecteerde auto (incl. HTML5 veldvalidatie)
  - een reservering kunt versturen (insert, post)
  - in kunt loggen als admin (je mag sessies gebruiken, maar ook een admin-modus maken)
  - een scherm maken waarmee je een auto kunt toevoegen (insert, post)
  - de tabel met auto's kunt uitbreiden met delete/update knoppen (tip: link de id van de auto aan de knop die erachter staat en stuur deze mee als parameter naar de server)
  - de delete en update functionaliteit maakt (update is vergelijkbaar met een nieuwe auto toevoegen)
  - statistieken kunt ophalen/tonen 
  - de rest van de details (max. aantal reserveringen, server-side validatie etc.) inbouwen

# AANPAK AutoBay Applicatie, TOP-DOWN
* Bekijk de AutoBay demo op http://cria.tezzt.nl/wordpress/?page_id=64477. Het voorbeeld maakt gebruik van classes (Relation) en subclasses (Administrator en Customer), maar dat is niet noodzakelijk. 
* Maak een klasse-/moduleontwerp voor de client, server en database. Voor de database kun je kijken naar http://cria.tezzt.nl/wordpress/wp-content/uploads/2013/02/Schermafbeelding-2013-03-27-om-22.20.17.png. Houd bij het ontwerp goed rekening met welke functionaliteit je op de client en op de server wilt hebben, denk hierbij aan:
  - client: aanroepen van urls met HTTP of WebSockets, het verwerken van JSON, het tonen van JSON data in de vorm van dynamische HTML
  - server: ontvangen van HTTP/WebSocket-aanroepen, aanroepen van queries en connecties met Mongo en het returnen van (JSON) data
* Maak een scherm met alle auto's (select, get), maar haal de data uit een (tijdelijke, hardcoded) JSON array
* Maak het detailscherm en reserveringsscherm
* Bouw een loginscherm waarmee je in admin-mode kan komen waardoor de tabel wordt uitgebreid met delete/update-knoppen
* Bouw een statistiekenscherm op basis van (tijdelijke/hardcoded) JSON data
* Realiseer het back-end van de applicatie:
  - Realiseer de database door een schema te creeren met Mongoose en een stukje code waarmee je enkele queries kunt testen door je .js bestand te runnen met Node. Je kunt met RockMongo of via de mongo command line checken of de juiste data erin staat.
  - Realiseer een HTTP- of WebSocket server die requests kan koppelen aan een of meerdere queries. Je kunt gebruiken van REST zoals in het voorbeeld (http://cria.tezzt.nl/wordpress/?page_id=64477), maar dat is niet noodzakelijk. 
  - Schrijf wat code waarmee je de HTTP-call kan doen (XmlHttpRequest of jQuery/etc.) en kunt testen. Zorg ervoor dat je alvast JSON kunt alerten of kunt tonen in je browser.
  - Vervang je (tijdelijke/hardcoded) JSON door de JSON die van het back-end terug komt
  - Bouw de rest van de details (max. aantal reserveringen, validatie etc.) 

Bij problemen met installatie op Windows geeft StackOverFlow antwoord maar ook een van de volgende youtuve video's kan handig zijn:
* http://www.youtube.com/watch?v=jm6E1smu408 (Node JS op Windows)
* http://www.youtube.com/watch?v=RUH1y6H55Ao (Hoe een HTTP server te maken in Node)
* http://www.youtube.com/watch?v=4fQsDiioj3I (sorry voor het slechte Engels, intro voor Mongo en Mongoose)
* http://www.youtube.com/watch?v=F2qsnYkF-5M (hoe met Express een REST service te bouwen)

HAVE FUN!
