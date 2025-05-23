# Proyecto 5
Aplicación web con React en la que se consume una API pública. Proyecto práctico con fines educativos.

## Requerimientos
- Uso de vite para la generación del proyecto
- Crear componentes funcionales
- Utilizar una API pública y mostrar los datos obtenidos en tu interfaz de usuario
- Uso de Hooks (mínimo useEffect para los procesos asíncronos)
- Implementar rutas en tu aplicación con React Router
- Manejar errores de renderizado con Error Boundaries
- Implementación CSS a través de un framework (TailwindCSS, MUI, Bootstrap)
- Permitir alguna interacción del usuario (por ejemplo, mediante botones o formularios)
- Mostrar proyecto a través de una URL, usando un servicio de terceros (Netlify, GitHub Pages, Render)


## Descripción
La aplicación muestra los Continentes del mundo y los países ordenados por Continente.

Para esta aplicación se está consumiendo la API pública de países disponible en el link: *https://restcountries.com/v3.1/all*
En este proyecto utilizamos Tailwind para dar estilo a las páginas y componentes y se utiliza Netlify para mostrar proyecto a través de la URL *udd-c17-proyecto5.netlify.app*.


## Instrucciones de instalación
Es necesario descargar los archivos de la aplicación e instalar las dependencias utilizadas las cuales estás en el archivo package.json.
Para esto se requiere ir la Consola y digitar la instrucción ***npm install***

Una vez que se instalan las dependencias digite el comando ***npm run dev*** para iniciar el servidor de desarrollo.



## Instrucciones de uso
- La aplicación muestra los Continentes del mundo, cada continente es un botón en el que puede dar click para ver los nombres y banderas de los países del continente seleccionado.
- A su vez, si desea ver más información de alguno de los países puede dar click en el país y será direccionado a la tarjeta con información del país escogido.
- Si desea volver a la página donde aparecen los continentes puede dar click en volver o en el botón de inicio que está disponible en la barra de navegación.
