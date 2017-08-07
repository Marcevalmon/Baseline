# NODEJS API BASELINE
> Documentación de instalación API BASELINE.

## Clonar proyecto
Mediante linea de comando, posicionarse en la ubicación en donde se alojará la aplicación.

```sh
cd /path
git clone git@www.hovahealth.com:root/HealthJS.git
```

## Instalación de dependencias
Para la instalación de los módulos de NodeJS, ubicarse raiz de la aplicación y ejecutar el comando npm install.

Windows, macOS & Linux:
```sh
cd /HealthJS
npm install
```

<!-- ## Antes de ejecutar
Es necesario crear carpetas para la subida de imagenes y archivos

Windows, macOS & Linux:

```sh
npm run
``` -->

## Ejecución de la aplicación
Para iniciar la aplicación, solo basta con correr un solo comando, el cual cambiara dependiendo del ambiente en que querramos correr la aplicación. A continuacíón se muestran los diferentes ambientes y sus respectivos comandos:

MacOS & Linux

Ambiente de producción.
```sh
npm run production
```

Ambiente de pruebas.
```sh
npm run test
```

Ambiente de desarrollo.
```sh
npm run dev
```

## Instalación de modulos extra
Algunos módulos son necesarios para levantar el servidor

Forever (Ambiente de producción y pruebas)
```sh
npm install -g forever
```
Nodemon (Ambiente de desarollo)
```sh
npm install -g nodemon
```

## Historial de lanzamientos

* 0.1.0
    * Trabajo en progreso

## Información

Marcello Montenegro – FullStack Developer - marcello.montenegro@hovahealth.com

Hova Health 2017.