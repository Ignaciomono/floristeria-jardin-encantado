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
├── docker                  # Carpeta que contiene la configuración de Docker
│   └── ApellidoE1_ApellidoE2.dockerfile # Configuración para desplegar la aplicación
├── package.json            # Configuración de npm y dependencias
├── README.md               # Documentación general del proyecto
└── .gitignore              # Archivos y directorios a ignorar por Git
```

## Instalación
Para ejecutar la aplicación localmente, sigue estos pasos:

1. Clona el repositorio:
   ```
   git clone https://github.com/tu_usuario/floristeria-jardin-encantado.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd floristeria-jardin-encantado
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Inicia la aplicación:
   ```
   npm start
   ```

## Características
- Visualización de un menú de productos con detalles como nombre, imagen, descripción y precio.
- Funcionalidad para agregar y eliminar productos del carrito de compras.
- Simulación de un proceso de pago con un formulario de entrada.

## Uso
Accede a la aplicación a través de tu navegador en `http://localhost:3000` (o el puerto que hayas configurado). Explora los productos, agrega artículos al carrito y simula un pago para completar la experiencia de compra.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.