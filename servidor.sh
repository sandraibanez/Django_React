# import pgadmin

# # Crear un nuevo servidor en pgAdmin
# server = pgadmin.create_server(name="docker", host="postgres_container", port=5432, database="ontibici", user="postgres", password="sandra2001")

# # Conectarse al servidor
# server.connect()

#!/bin/bash

# Función para crear un servidor
function crear_servidor() {
    # Obtener los parámetros
    nombre="$1"
    host="$2"
    puerto="$3"
    database="$4"
    username="$5"
    password="$6"

    # Crear una instancia de pgAdmin
    pgadmin4 --username postgres --password postgres --host localhost --port 5432

    # Crear un nuevo servidor
    pgadmin4 create-server --name "$nombre" --host "$host" --port "$puerto" --database "$database" --username "$username" --password "$password"

    # Registrar el servidor
    pgadmin4 register-server "$nombre"

    # Salir de pgAdmin
    exit
}

# Parámetros del servidor
nombre="docker"
host="postgres_container"
puerto=5432
database="ontibici"
username="postgres"
password="sandra2001"

# Crear el servidor
crear_servidor "$nombre" "$host" "$puerto" "$database" "$username" "$password"

# Imprimir un mensaje de éxito
echo "Servidor creado correctamente"
