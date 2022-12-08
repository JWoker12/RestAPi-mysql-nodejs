CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT ,
    name VARCHAR(45) DEFAULT NULL ,
    salary INT(5) DEFAULT NULL ,
    PRIMARY KEY (id)
);

INSERT INTO employee VALUES
    (1, 'Joe', 1000),
    (2, 'John', 2500),
    (3, 'Joana', 5000),
    (4, 'Carlos', 500),
    (5, 'Juanjo', 12);