# Cases-Frontend

Dieses Projekt wurde erstellt mit: [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Wie stelle ich eine neue Version dieser Seite ins Internet (auf einen FTP-Server)?

1. Das aktuelle Projekt herunterladen (pullen)
1. im heruntergeladenen Ordner `ng build` ausführen
1. das gebaute Projekt befindet sich nun im `cases/dist`-Ordner 
1. auf dem FTP-Server im `htdocs`-Ordner alles außer `.htaccess` und `api` löschen
1. alle Datein im `cases/dist` bzw. `cases/dist/cases`-Ordner in den `htdocs`-Ordner einfügen.

fertig
