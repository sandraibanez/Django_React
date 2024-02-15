-- Crear la tabla "Stations"
CREATE TABLE stations_stations (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(255) NOT NULL,
    name VARCHAR(200) NOT NULL,
    direction VARCHAR(255) NOT NULL,
    location VARCHAR(200) NOT NULL,
    img VARCHAR(255) NOT NULL
);

-- Crear la tabla "Bicis"
CREATE TABLE stations_bicis (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    status VARCHAR(100) NOT NULL
);

-- Crear la tabla "Slot"
CREATE TABLE stations_slot (
    id SERIAL PRIMARY KEY,
    stations_id INT NOT NULL,
    bici_id INT,
    status VARCHAR(100) NOT NULL,
    slot_number INT NOT NULL,
    FOREIGN KEY (stations_id) REFERENCES stations_stations(id) ON DELETE CASCADE,
    FOREIGN KEY (bici_id) REFERENCES stations_bicis(id) ON DELETE CASCADE,
    UNIQUE (bici_id)
);

-- Insertar datos de ejemplo en la tabla "Stations"
INSERT INTO stations_stations (slug, name, direction, location, img) VALUES
('station-1', 'Estación 1', 'Dirección 1', 'Ubicación 1', 'imagen-1.jpg'),
('station-2', 'Estación 2', 'Dirección 2', 'Ubicación 2', 'imagen-2.jpg'),
('station-3', 'Estación 3', 'Dirección 3', 'Ubicación 3', 'imagen-3.jpg');

-- Insertar datos de ejemplo en la tabla "Bicis"
INSERT INTO stations_bicis (slug, name, status) VALUES
('bici-1', 'Bici 1', 'Disponible'),
('bici-2', 'Bici 2', 'En uso'),
('bici-3', 'Bici 3', 'Disponible');

-- Insertar datos de ejemplo en la tabla "Slot"
INSERT INTO stations_slot (stations_id, bici_id, status, slot_number) VALUES
(1, 1, 'Disponible', 1),
(2, 2, 'En uso', 2),
(3, NULL, 'Disponible', 3);
