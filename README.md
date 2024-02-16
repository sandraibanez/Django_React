# Proyecto Dockerizado de React, Django, PostgreSQL y nginx en Windows

Este proyecto consiste en un entorno dockerizado que incluye React, Django, PostgreSQL y nginx.

## Pasos para probar el funcionamiento del proyecto

### 1. Instalación de Docker

Asegúrate de tener Docker instalado en tu sistema.

### 2. Imágenes Docker

Asegúrate de tener las imágenes Docker necesarias para el proyecto.

### 3. Configuración del Proyecto

Una vez clonado el proyecto, sigue los siguientes pasos:

#### 3.1 Configuración del Backend

- Crea un nuevo archivo `.sh` en la carpeta del backend con el mismo contenido que el archivo denominado `backend.sh`.
  
  ##### 3.1.1 Cambia el nombre del Dockerfile del backend

  Cambia el nombre del Dockerfile del backend donde aparece el nombre del backend.sh a exactamente el mismo nombre del archivo creado anteriormente para darle permisos y permitir que se ejecute.

  ##### 3.1.2 Solución de problemas de conexión

  Si no se realizan el paso anterior, es posible que al iniciar los contenedores se muestre un mensaje de error de conexión en el contenedor del backend. En este caso, sigue estos pasos alternativos:
  
  - Accede a pgAdmin y realiza los pasos explicados más adelante.
  - Una vez dentro de pgAdmin, detén y vuelve a iniciar el contenedor del backend. Esto debería solucionar el problema. Es preferible que se haga el paso explicado en el apartado 3.1.1

#### 3.2 Configuración del Frontend

- Elimina la carpeta `node_modules` del frontend.
- Desde la consola, en la ruta del frontend, ejecuta el comando `npm install` o `npm i` para reinstalar las dependencias y crear la carpeta `node_modules`.

### 4. Ejecución del Proyecto

Una vez realizados los cambios anteriores, ejecuta el siguiente comando en la ruta donde se encuentra el archivo `docker-compose.yml`:

