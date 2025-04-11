# Floristería Jardín Encantado

## Descripción del Proyecto
"Floristería Jardín Encantado" es una aplicación web responsiva que permite a los usuarios explorar un menú de productos, agregar productos a un carrito de compras simulado y realizar un pago electrónico simulado. Esta aplicación está diseñada para ofrecer una experiencia de usuario intuitiva y atractiva, alineada con el tema de una floristería.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

```
floristeria-jardin-encantado
├── src
│   ├── index.html          # Punto de entrada principal de la aplicación
│   ├── styles              # Carpeta que contiene los estilos CSS
│   │   └── styles.css      # Estilos para la aplicación
│   ├── scripts             # Carpeta que contiene los scripts JavaScript
│   │   └── app.js          # Lógica de la aplicación
│   ├── components          # Componentes HTML de la aplicación
│   │   ├── cart.html       # Estructura del carrito de compras
│   │   ├── menu.html       # Estructura del menú de productos
│   │   └── payment.html    # Estructura de la simulación de pago
│   └── assets              # Recursos adicionales utilizados en el proyecto
│       └── README.md       # Documentación sobre los activos
├── package.json            # Configuración de npm y dependencias
├── README.md               # Documentación general del proyecto
└── .gitignore              # Archivos y directorios a ignorar por Git
```

## Instalación
Para ejecutar la aplicación localmente, en docker play ground, sigue los siguientes pasos:

1. Descargar git y nano:
   ```
   apk add git
   apk add nano
   ```

2. Crea el dockerfile:
   ```
   nano Dockerfile
   ```

3. Dentro del dockerfile copiar lo siguiente:
   ```
   # Usar una imagen base de Ubuntu
   FROM ubuntu:latest
   
   # Evitar prompts interactivos durante la instalación
   ENV DEBIAN_FRONTEND=noninteractive
   
   # Instalar Apache, MySQL, PHP y git
   RUN apt-get update && apt-get install -y \
       apache2 \
       mysql-server \
       php \
       libapache2-mod-php \
       php-mysql \
       git
   
   # Clonar el repositorio de GitHub (reemplaza con tu URL)
   RUN git clone https://github.com/Ignaciomono/floristeria-jardin-encantado.git /tmp/html
   
   # Limpiar el directorio de Apache y mover los archivos HTML
   RUN rm -rf /var/www/html/* && mv /tmp/html/src/* /var/www/html/ 
   
   # Exponer el puerto 80
   EXPOSE 80
   
   # Iniciar Apache y MySQL al arrancar el contenedor
   CMD service mysql start && apache2ctl -D FOREGROUND
   ```

4. Inicia la aplicación:
   ```
   docker build -t Flores-web .

   docker run -d -p 80:80 Flores-web

   proceder a abrir el puerto 80 en docker
   ```

## Características
- Visualización de un menú de productos con detalles como nombre, imagen, descripción y precio.
- Funcionalidad para agregar y eliminar productos del carrito de compras.
- Simulación de un proceso de pago con un formulario de entrada.

## Uso
Accede a la aplicación a través de tu navegador en `http://localhost:80` (o el puerto que hayas configurado). Explora los productos, agrega artículos al carrito y simula un pago para completar la experiencia de compra.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.
