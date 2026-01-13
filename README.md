# RetoPlaywright

Framework de prueba que implementa Playwright con Cucumber.

## Estructura del proyecto

La estructura de las carpetas se encuentra de la siguiente manera:

.
src/test
├── features
│   └── example.feature
├── steps
│   └── example.steps.ts
├── support
│   ├── hooks.ts
│   └── world.ts
├── cucumber.json
├── tsconfig.json
├── package.json
├── cucumber-report.html
├── .github/workflows
│   └── playwright.yml
├── tests
│   └── example.spec.ts
├── playwright-report
│   └── index.html
└── playwright.config.ts

### Requerimiento previo

Asegurese de tener instalado Node.js y npm en su sistema. Puede instalarlo por medio de [https://nodejs.org/].
En este proyecto se utilizo Node: V22.17.0

### Instalación de dependencias

Ejecute los siguientes comandos en su proyecto (linea de comandos o terminal):

```bash
npm ci
```

```bash
npx playwright install --with-deps
```

## Listado de dependencias

```json
"devDependencies": {
    "@cucumber/cucumber": "^12.5.0",
    "@playwright/test": "^1.57.0",
    "@types/node": "^25.0.3",
    "playwright": "^1.57.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  }
```


## Ejecución de pruebas

Para realizar la ejecucion de los test utilice los comandos a continuación:

- Correr comando node (que enlaza la configuracion de cucumber):

```bash
npm run testear
```

- Correr comando cucumber:

```bash
cucumber-js test
```

- Correr comando node (que enlaza la configuracion de playwright):

```bash
npm run start
```

- Correr comando playwright:

```bash
npx playwright test --reporter=html
```

## Generación de reportes

El proyecto utiliza [html:cucumber-report.html] para generar reportes de los scenarios ejecutados.
- Los reportes de cucumber se guardan en la raiz del proyecto.
- Los reportes de playwright se guardan en la carpeta 'playwright-report'

## Liciencia

MIT License
---