<p align="center"><img src="assets/banner.svg" width="100%" alt="modern-design-pack · Modern, context-aware UI design for Claude Code" /></p>

<p align="center">Un plugin de Claude Code para que cualquier persona, sepa o no de diseño, consiga interfaces modernas, adaptadas a su proyecto, que no parezcan hechas con IA y basadas en referencias reales de internet.</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-C9A227?style=flat-square&labelColor=0B1F3A" alt="Licencia: MIT" /></a>
  <img src="https://img.shields.io/badge/Claude%20Code-plugin-C9A227?style=flat-square&labelColor=0B1F3A" alt="Plugin de Claude Code" />
  <img src="https://img.shields.io/badge/status-early%20development-C9A227?style=flat-square&labelColor=0B1F3A" alt="Estado: desarrollo inicial" />
</p>

<p align="center"><a href="README.md">English</a> · <b>Español</b></p>

> **En desarrollo inicial.** `design-review` está escrita y ha pasado una primera ronda de pruebas ([resultados](docs/examples/phase-2-results.md), en inglés). `modern-design` tiene escrito y probado su primer paso, dirección y brief de diseño ([resultados](docs/examples/phase-3/phase-3-results.md), en inglés); los pasos de tokens, componentes y animación siguen vacíos. Consulta el [Roadmap](docs/ROADMAP.md).

## Tabla de contenidos

- [Sobre el proyecto](#sobre-el-proyecto)
- [Funcionalidades](#funcionalidades)
- [Instalación](#instalación)
- [Cómo funciona](#cómo-funciona)
- [Skills](#skills)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Limitaciones conocidas](#limitaciones-conocidas)
- [Créditos](#créditos)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Sobre el proyecto

Hay demasiados recursos de diseño: librerías de componentes, packs de skills, galerías, webs de fuentes, kits de animación, listas para quitar el "aspecto IA" en redes sociales. Para una diseñadora o un diseñador es una caja de herramientas. Para alguien que no lo es, es fricción: no sabes cuál usar, cuándo ni cómo encajan, y acabas con la misma landing con degradado morado que todo el mundo.

Este plugin ordena esos recursos y los aplica con criterio. Primero pregunta por el producto y el público, mira webs reales como referencia y después pasa por tokens, componentes, animación y revisión en un orden fijo. Las reglas dependen del contexto: un patrón que es un cliché en un producto puede ser la decisión correcta en otro.

## Funcionalidades

Previstas. Nada de esto funciona todavía.

- **Primero el contexto:** un brief breve (producto, público, tono, stack) que siguen todos los pasos posteriores.
- **Referencias en vivo:** busca en internet webs comparables y extrae sus principios, sin clonarlas.
- **Tokens de diseño:** paleta, combinación tipográfica, espaciado, radios, sombras, temas claro y oscuro.
- **Componentes de fuentes contrastadas:** secciones y componentes adaptados al brief y al stack del proyecto.
- **Animación con propósito:** tiempos, curvas y microinteracciones, y saber cuándo no animar.
- **Revisión anti-slop:** detecta los patrones genéricos de las webs hechas con IA antes de entregar.
- **QA visual:** capturas en un navegador real a tres anchos, más contraste, foco, desbordamientos y estados vacíos.
- **Auditar cualquier URL:** revisión de solo lectura de cualquier web pública, entregada como informe con problemas críticos, problemas menores, patrones obsoletos, consejos, propuestas y alternativas. Cada hallazgo indica si está medido o es criterio de diseño.
- **Activación bilingüe:** las skills responden a peticiones en inglés y en español.

## Instalación

Necesitas [Claude Code](https://code.claude.com). En una sesión de Claude Code:

```text
/plugin marketplace add santiagodie/modern-design-pack
/plugin install modern-design-pack@santiagodie-plugins
```

Para ofrecerlo a todo el equipo de un proyecto, añade esto al `.claude/settings.json` del proyecto:

```json
{
  "extraKnownMarketplaces": {
    "santiagodie-plugins": {
      "source": { "source": "github", "repo": "santiagodie/modern-design-pack" }
    }
  },
  "enabledPlugins": {
    "modern-design-pack@santiagodie-plugins": true
  }
}
```

Cada persona acepta el aviso de confianza del espacio de trabajo e instala el plugin una vez por clon, por ejemplo con `claude plugin install modern-design-pack@santiagodie-plugins --scope project`.

Las skills se activan solas a partir de su descripción, o se pueden llamar directamente, por ejemplo `/modern-design-pack:modern-design`, o `/modern-design-pack:design-review https://example.com` para auditar una web.

## Cómo funciona

Dos skills: una construye y la otra revisa.

```mermaid
flowchart LR
    A[modern-design] --> B[design-review]
    B -- problemas detectados --> A
```

`modern-design` trabaja en cinco pasos: dirección, tokens, componentes, animación y paso a `design-review`. Cada paso carga su propio archivo de referencia solo cuando hace falta, así que una petición sobre colores no carga las pautas de animación.

`design-review` tiene dos modos. En tu propio proyecto revisa, comprueba en un navegador real y corrige. Con una URL pública hace una auditoría de solo lectura (tres páginas como máximo, sin logins) con capturas a 375, 768 y 1440 px, lectura del HTML y Lighthouse si hay Chrome disponible, y guarda un informe en `audits/`.

**El contexto manda sobre las reglas.** Las reglas se escriben como "haz X cuando Y", no como prohibiciones absolutas. El brief del paso de dirección decide cuándo se aplica cada una.

**Referencias, no copias.** El paso de dirección usa WebSearch para encontrar webs comparables, WebFetch para leerlas y capturas con Playwright para verlas. Anota los principios de cada referencia, nunca su código, recursos ni textos.

Más detalle en [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) (en inglés).

## Skills

| Skill | Para qué sirve |
|---|---|
| `modern-design` | Punto de entrada para diseñar o rediseñar. Reúne contexto y referencias en vivo y después define dirección, tokens (color, tipografía, espaciado), componentes y animación para el proyecto. |
| `design-review` | Revisa cualquier interfaz. En tu proyecto: detecta y corrige patrones genéricos de IA y errores de UI, con revisión en un navegador real. Con una URL pública: auditoría de solo lectura con informe completo. |

## Estructura del proyecto

```text
modern-design-pack/
├── .claude-plugin/
│   ├── plugin.json          # manifiesto del plugin
│   └── marketplace.json     # marketplace "santiagodie-plugins", apunta a este repo como "./"
├── skills/
│   ├── modern-design/
│   │   ├── SKILL.md
│   │   └── references/      # direction, responsive, components/, tokens, motion, resources
│   └── design-review/
│       ├── SKILL.md
│       └── references/      # unslop-checklist, visual-qa, audit-report
├── assets/banner.svg
├── docs/
│   ├── research/            # guía de landing pages del autor, base de los componentes
│   ├── examples/            # informes y capturas de las pruebas de cada fase
│   ├── SOURCES.md           # todas las fuentes externas y el estado de su licencia
│   ├── ARCHITECTURE.md      # flujo entre skills y principios
│   └── ROADMAP.md
├── .claude/CLAUDE.md        # convenciones para trabajar en este repo
├── README.md / README.es.md
├── CHANGELOG.md
├── LICENSE
└── THIRD_PARTY_NOTICES.md
```

## Limitaciones conocidas

- **modern-design está incompleta:** solo el paso de dirección tiene contenido. Tokens, componentes y animación funcionan con el criterio por defecto del modelo, siguiendo el brief.
- **Poco probado:** `design-review` se ha probado con tres webs públicas y una landing generada, una o dos veces cada una, en sesiones no interactivas ([resultados](docs/examples/phase-2-results.md)). Dos cambios de reglas hechos tras la última ronda no se han vuelto a probar. Los juicios y las métricas de laboratorio varían entre ejecuciones. No está comprobado que las skills se activen con peticiones naturales en inglés y en español.
- **Auditoría de licencias parcial:** solo se han revisado las fuentes que usa `design-review`. El resto de `docs/SOURCES.md` sigue en `TO VERIFY` y se revisa cuando se vaya a usar cada fuente. No se ha copiado texto de terceros: las ideas se reescriben y se acreditan.
- **Fuentes sin identificar:** dos de las listas anti-slop vienen de capturas cuyo autor aún no está identificado.
- **Depende de un navegador:** la revisión en navegador de `design-review` y la parte de capturas del paso de dirección necesitarán Playwright, que el plugin no instala. Lighthouse en las auditorías de URL también necesita Chrome; si no está, el informe lo indica y omite las puntuaciones medidas.
- **Sin icono:** el plugin aún no tiene icono para el listado.

## Créditos

Este plugin ordena ideas de muchas personas del diseño y de proyectos de código abierto. La lista completa está en [docs/SOURCES.md](docs/SOURCES.md), y todo lo que se adapte se acreditará con su licencia en [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Complementos recomendados (opcionales):

- [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): un gran catálogo de estilos, paletas y combinaciones tipográficas que encaja bien junto a este plugin.
- [Impeccable](https://impeccable.style), de Paul Bakaus: comandos de diseño y más de 60 comprobaciones automáticas de antipatrones. Se solapa con `design-review`, que resume algunas de sus ideas con palabras propias pero no replica sus comprobaciones. Úsalo cuando quieras esa profundidad.

## Licencia

Publicado bajo la [licencia MIT](LICENSE). El material de terceros conserva su propia licencia, indicada en [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Contacto

Santiago Die · [GitHub](https://github.com/santiagodie) · [LinkedIn](https://www.linkedin.com/in/santiago-die-morejon)
