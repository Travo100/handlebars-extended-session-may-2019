DROP DATABASE IF EXISTS heroes_db;
CREATE DATABASE heroes_db;

USE heroes_db;

CREATE TABLE heroes (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    sidekick BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);

INSERT INTO heroes SET name = "Batman";
INSERT INTO heroes SET name = "Robin", sidekick = TRUE;

SELECT * FROM heroes;