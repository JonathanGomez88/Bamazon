DROP DATABASE IF EXISTS bamazon_productsdb;
CREATE DATABASE bamazon_productsdb;

USE bamazon_productsdb;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL (8,2) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Master Sword", "armory", 300, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cyclops' Visor", "clothing", 550, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad", "electronics", 439, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gum", "groceries", 2.49, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yankee Candle", "bath", 15, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("X-box One", "electronics", 259.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Peanut Butter", "groceries", 5.49, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bow and Arrow Set", "armory", 99.59, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Poker Set", "games", 19.99, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Panther's Cap", "clothing", 14.99, 700);
