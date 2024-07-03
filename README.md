# Heroes App

Esta es una aplicación de búsqueda de héroes desarrollada con React + Vite.

## Características

- Búsqueda de héroes por nombre.
- Muestra resultados en tiempo real.
- Utiliza `react-router-dom` para la navegación.
- Utiliza `query-string` para el manejo de parámetros de consulta.

## Instalación

1. Clona el repositorio:
   bash
   git clone https://github.com/tu-usuario/heroes-app.git

2. Navega al directorio del proyecto:
   bash
   cd heroes-app
3. Instala las dependencias:
   bash
   npm install

## Uso

1. Inicia la aplicación:
   bash
   npm start

2. Abre tu navegador y ve a `http://localhost:3000`.

## Estructura del Proyecto

- `src/heroes/pages/SearchPage.jsx`: Página principal de búsqueda de héroes.
- `src/hooks/useForm.js`: Hook personalizado para manejar formularios.
- `src/heroes/components/HeroCard.jsx`: Componente para mostrar la información de un héroe.
- `src/heroes/helpers/getHeroesByName.js`: Función para obtener héroes por nombre.

## Dependencias

- `react`: ^17.0.2
- `react-dom`: ^17.0.2
- `react-router-dom`: ^5.2.0
- `query-string`: ^6.14.0

## Contribuir

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
