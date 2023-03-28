INSERT INTO departments (deptName)
VALUES ("human resources"),
    ("finance"),
    ("sales");

SELECT * FROM DEPARTMENTS;

INSERT INTO roles (title, salary, department)
VALUES ("recruiter", 60000, "human resources"),
    ("staff coordinator", 70000, "human resources"),
    ("hr manager", 100000, "human resources"),
    ("accountant", 70000, "finance"),
    ("accounting manager", 120000, "finance"),
    ("account executive", 90000, "sales"),
    ("sales manager", 110000, "sales"),
    ("sales representative", 65000, "sales");

SELECT * FROM ROLES;

INSERT INTO employees (first_name, last_name, title, salary)
VALUES ("John", "Doe", "recruiter", 60000),
    ("Rachel", "Collins", "staff coordinator", 70000),
    ("Mike", "Jones", "hr manager", 100000),
    ("Robert", "Smith", "account executive", 90000),
    ("Sarah", "Black", "sales representative", 65000);

SELECT * FROM employees;