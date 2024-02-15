 # #!/bin/bash

 # # Detalles del servidor PgAdmin y credenciales
 # PGADMIN_SERVER="http://localhost:8888"
 # PGADMIN_USERNAME="sandrasoleribanez@gamil.com"
 # PGADMIN_PASSWORD="sandra2001"

 # # Datos del servidor PostgreSQL
 # POSTGRES_HOST="local_pgdb"
 # POSTGRES_PORT="5432"
 # POSTGRES_USERNAME="postgres"
 # POSTGRES_PASSWORD="sandra2001"
 # POSTGRES_DBNAME="ontibici"

 # # Crear el servidor en PgAdmin
 # curl -X POST -H "Content-Type: application/json" -d '{
#   "name": "Mi Servidor PostgreSQL",
 #   "host": "'"${POSTGRES_HOST}"'",
 #   "port": "'"${POSTGRES_PORT}"'",
 #   "maintenance_database": "'"${POSTGRES_DBNAME}"'",
 #   "username": "'"${POSTGRES_USERNAME}"'",
 #   "password": "'"${POSTGRES_PASSWORD}"'",
 #   "ssl_mode": "prefer"
 # }' -u "${PGADMIN_USERNAME}:${PGADMIN_PASSWORD}" "${PGADMIN_SERVER}/servers"
 #!/bin/bash

# Variables de conexión
HOST="postgres_container"
PORT="5432"
USERNAME="potgres"
PASSWORD="sandra2001"
DATABASE="ontibici"

# Crear el archivo de configuración
cat <<EOF > server_config.json
{
  "Servers": {
    "1": {
      "Name": "Nombre_del_Servidor",
      "Group": "Servers",
      "Host": "${HOST}",
      "Port": "${PORT}",
      "MaintenanceDB": "${DATABASE}",
      "Username": "${USERNAME}",
      "SSLMode": "prefer",
      "PassFile": "",
      "SSLCompression": 0,
      "Timeout": 4,
      "DBRestriction": "",
      "ConnLimit": 0,
      "Role": "",
      "Service": "",
      "UseSSHTunnel": 0,
      "TunnelHost": "",
      "TunnelPort": "22",
      "TunnelUsername": "",
      "TunnelAuthentication": 0,
      "TunnelIdentityFile": "",
      "TunnelPassword": "",
      "TunnelTimeout": "15",
      "TunnelKeepAlive": "1800",
      "TunnelCompression": 0,
      "TunnelPublicKeyFile": "",
      "TunnelPassphrase": "",
      "TunnelRemoteCmd": "",
      "Shared": false,
      "ServerColor": "#FF0000",
      "Comments": ""
    }
  }
}
EOF

# Importar el archivo de configuración en pgAdmin
pgAdmin_command="pgadmin4 --conf server_config.json"

# Ejecutar el comando
eval $pgAdmin_command
