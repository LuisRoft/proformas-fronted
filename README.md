# Genesis App

Genesis App es una aplicación web desarrollada con Next.js que permite a los usuarios subir imágenes de proformas, comparar los precios unitarios entre ellas y generar una tabla que muestra los precios más bajos.

## Características

- Subida de imágenes de proformas
- Análisis y comparación de precios unitarios
- Generación de tabla comparativa con resaltado de precios más bajos
- Interfaz de usuario moderna y responsive con Tailwind CSS y PrimeReact

## Requisitos previos

Asegúrate de tener instalado en tu sistema:

- Node.js (versión 14.0 o superior)
- npm /yarn (normalmente viene con Node.js)

## Instalación

1. Clona este repositorio:

   ```ssh
   git clone https://github.com/LuisRoft/proformas-fronted.git
   cd proformas-fronted
   ```

2. Instala las dependencias:

   ```ssh
   npm install
   ```

## Uso

1. Inicia el servidor de desarrollo:

   ```ssh
   npm run dev
   ```

2. Abre tu navegador y visita `http://localhost:3000`

3. Sube las imágenes de las proformas utilizando la interfaz de la aplicación.

4. La aplicación procesará las imágenes y generará una tabla comparativa con los precios unitarios más bajos resaltados.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm start`: Inicia la aplicación en modo producción
- `npm run lint`: Ejecuta el linter para verificar el código

## Tecnologías utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PrimeReact](https://www.primefaces.org/primereact/)

## Contribución

Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
