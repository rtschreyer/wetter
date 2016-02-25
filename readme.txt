Die forecastApp als Beispiel Anwendung zur L�sung der Kiwigrid Testaufgabe.

Installationshinweis:

Die zip Datei enpacken. Danach auf der Konsole in das entpackte Verzeichnis wechseln und 'npm install' ausf�hren.
Dabei sollten auch bower_components installiert werden. Falls nicht muss noch 'bower install' aufgerufen werden.

Wenn alles installiert ist kann die App gestartet werden, in dem die index.html in den browser geladen wird.

Ein einfacher jasmine test kann auf der Konsole ausgef�hrt werden mit 'grunt test'.

Wichtig: die App benutzt im Auslieferungszustand den ApiKey, den ich selbst bei forecast.io erworben habe.
Dieser key sollte nicht weitergegeben werden und ich kann auch keine Garantie daf�r �bernehmen, dass er endlos g�ltig ist.
Daher sollte jeder user seinen eigenen ApiKey verwenden. Zum wechseln des keys �ffnet man die Datei 'config.json' und tr�gt dort als 'apiKey' seinen eigenen ein.
Man kann dort auch die Sprache wechsel, in dem man z.B. den Wert f�r 'lang' von 'de' auf 'ru' �ndert.

Die gesamte Anwendung befindet sich noch im extremen beta Zustand. Die implementierten features sind nur Ans�tze und dienen nur der Demonstration.

Meine Antworten auf die von kiwigrid gestellten Testfragen befinden sich unter dem Men�punkt Readme.