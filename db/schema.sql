CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers
(
    id INTEGER,
    AUTO_INCREMENT NOT_NULL,
    burger_name VARCHAR
    (255),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);