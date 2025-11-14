# TesisEdi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

ByteCore — Sistema de Gestión de Envíos

Tecnologías utilizadas

Angular 19 (standalone components)

TypeScript

HTML5

SCSS

Google Fonts

Simulación de datos (sin backend)

Routing

Diseño responsive

Paleta de colores utilizada
--color-bg: #F8FAFC;
--color-primary: #3B82F6;
--color-secondary: #64748B;
--color-text: #111827;
--color-accent: #0EA5E9;
--color-border: #E2E8F0;

Estructura del proyecto
El proyecto está organizado siguiendo buenas prácticas de Angular y separación por componentes.

src/
app/
components/
inicio/
paquetes/
rutas/
reclamos/
app.routes.ts
app.component.ts
assets/
styles.scss
main.ts

Cada componente contiene su archivo HTML, SCSS y TS de forma separada para facilitar la lectura y mantenibilidad.

Funcionalidades principales

Inicio / Dashboard

KPIs con datos simulados (paquetes en tránsito, entregados, reclamos, etc.)

Gráfico simulado en CSS

Tabla con últimos paquetes

Accesos rápidos a otras secciones

Diseño simple, limpio y profesional

Paquetes

Tabla con datos simulados

Campos como código, destinatario, localidad, estado, fecha

Estados visuales diferenciados

Rutas

Campo para ingresar el código de un paquete

Simulación del estado actual del paquete

Mapa embebido mediante iframe de Google Maps para contexto visual

Reclamos

Formulario con campos: código de paquete, tipo de reclamo, descripción, email

Validaciones básicas

Simulación de envío sin backend

Navbar y notificaciones

Barra superior con navegación

Logo que redirige al inicio

Sistema básico de notificaciones simuladas con un panel desplegable

Footer

Información del sitio

Año y autor

Enlaces internos

Diseño responsivo

Personalización realizada
Este proyecto incluye modificaciones respecto al trabajo grupal original:

Nuevo diseño visual completo

Dashboard implementado desde cero

Paleta de colores personalizada

Componentes reorganizados

Sistema de notificaciones simulado

Footer y navbar rediseñados

Tipografía profesional importada desde Google Fonts

Datos ficticios coherentes y organizados

Estructura y navegación cuidada

Cómo ejecutar el proyecto

Clonar el repositorio
git clone https://github.com/tu-usuario/bytecore.git

Instalar dependencias
npm install

Ejecutar el servidor de desarrollo
ng serve -o
