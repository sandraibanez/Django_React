# Proyecto Dockerizado de React, Django, PostgreSQL y nginx en Windows

Este proyecto consiste en un entorno dockerizado que incluye React, Django, PostgreSQL y nginx.

# Índice

1. [Instalación de Docker](#1-Instalación-de-Docker)
2. [Imágenes necesarias](#2-Imágenes-Docker)
3. [Configuración del Proyecto](#3-Configuración-del-Proyecto)
4. [Creación de Contenedores](#4-Ejecución-del-Proyecto)
5. [Pasos Finales](#pasos-finales)


## Pasos para probar el funcionamiento del proyecto

## 1. Instalación de Docker

Asegúrate de tener Docker instalado en tu sistema.

## 2. Imágenes Docker

Asegúrate de tener las imágenes Docker necesarias para el proyecto.

### 3. Configuración del Proyecto

cambia a la rama main_docker_compose situandote en el projecto colonado y mediante el comando `git checkout main_docker_compose`

Una vez clonado el proyecto, sigue los siguientes pasos:

#### 3.1 Configuración del Backend

- Crea un nuevo archivo `.sh` en la carpeta del backend con el mismo contenido que el archivo denominado `backend.sh`.
  
  ##### 3.1.1 Cambia el nombre del Dockerfile del backend

  Cambia el nombre del Dockerfile del backend donde aparece el nombre del backend.sh a exactamente el mismo nombre del archivo creado anteriormente para darle permisos y permitir que se ejecute.

  ##### 3.1.2 Solución de problemas de conexión

  Si no se realizan el paso anterior, es posible que al iniciar los contenedores se muestre un mensaje de error de conexión en el contenedor del backend. En este caso, sigue estos pasos alternativos:
  
  - Accede a pgAdmin y realiza los pasos explicados más adelante.
  - Una vez dentro de pgAdmin, detén y vuelve a iniciar el contenedor del backend. Esto debería solucionar el problema. Es preferible que se haga el paso explicado en el apartado 3.1.1 y si se ha hecho esos pasos y aun asi persiste el problema intente realizar los pasos de este apartado el 3.1.2

   ##### 3.1.3 Solucion de problemas del backend
    -  si haciendo los cambios del [3.1.1](#311-cambia-el-nombre-del-dockerfile-del-backend) aun asi aparece el mismo problema del apartado [3.1.2](#312-Solución-de-problemas-de-conexión) hay que realizar la misma solucion que en el aparatdo [3.1.2](#312-Solución-de-problemas-de-conexión)

#### 3.2 Configuración del Frontend

- Elimina la carpeta `node_modules` del frontend.
- Desde la consola, en la ruta del frontend, ejecuta el comando `npm install` o `npm i` para reinstalar las dependencias y crear la carpeta `node_modules`.
- Sino realiza esos pasos al crear los contenedores el frontend mostrara por consola que tiene el sigiente error relacionado con `react-scripts` y no se iniciara el contendedor.

### 4. Ejecución del Proyecto

Una vez realizados los cambios anteriores, ejecuta el siguiente comando `docker-compose up` en la ruta donde se encuentra el archivo `docker-compose.yml` y se crearan las imagen, los volumenes y los contenedores

