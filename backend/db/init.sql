

-- -- CREATE DATABASE ontibici;
-- CREATE DATABASE IF NOT EXISTS ontibici;

-- \c ontibici;

-- -- Crear un usuario y asignarle privilegios
-- CREATE USER postgres WITH PASSWORD 'sandra2001';
-- ALTER ROLE sandrasoleribanez@gmail.com SET client_encoding TO 'utf8';
-- ALTER ROLE sandrasoleribanez@gmail.com SET default_transaction_isolation TO 'read committed';
-- ALTER ROLE sandrasoleribanez@gmail.com SET timezone TO 'UTC';
-- GRANT ALL PRIVILEGES ON DATABASE ontibici TO sandrasoleribanez@gmail.com;
CREATE USER postgres;
CREATE DATABASE ontibici;
GRANT ALL PRIVILEGES ON DATABASE ontibici TO postgres;