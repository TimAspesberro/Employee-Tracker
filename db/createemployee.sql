DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
  department_id VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(30) NOT NULL,
  role_id VARCHAR(30) NOT NULL,
  role_department VARCHAR(30) NOT NULL,
  role_salary VARCHAR(30) NOT NULL,
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_firstname VARCHAR(30) NOT NULL,
  employee_lastname VARCHAR(30) NOT NULL,
  employee_id VARCHAR(30) NOT NULL,
  employee_jobtitle VARCHAR(30) NOT NULL,
  employee_salary VARCHAR(30) NOT NULL,
  employee_manager VARCHAR(30) NOT NULL,
);

