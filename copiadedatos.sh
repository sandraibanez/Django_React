#!/bin/bash
# variables
directorio="./db/dump2.sql";
database="ontibici";
fecha="`date +%Y%m%d%H%M%S`";
usuario="postgres"
host="localhost"
export PGPASSWORD=sandra2001

# generar el dump y crear el log
pg_dump -U $usuario -h $host -F t -d $database|gzip -9 > $directorio;