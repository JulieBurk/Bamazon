
CREATE DATABASE IF NOT EXISTS bamazonDB;

USE bamazonDB;

CREATE TABLE IF NOT EXISTS products (
  item_ID INTEGER AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price_toCustomer DECIMAL(10, 2) NOT NULL,
  stock_quantity INT(5) NOT NULL,
PRIMARY KEY (item_ID)
);


INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("grey_socks", "socks", "4.00", 200);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("furry_socks", "hot_socks", "5.00", 100);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("groddy_socks", "sticky_socks", "6.00", 100);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("exotic_socks", "clear_socks", "5.00", 100);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("cheap_socks", "socks", "1.00", 100);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("unstable_socks", "grass_socks", "5.00", 100);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("glitter_socks", "socks", "5.00", 100);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("giant_socks", "hot_socks", "3.00", 100);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("tiny_socks", "hot_socks", "5.00", 100);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("fancy_socks", "hot_socks", "10.00", 100);

INSERT INTO products (product_name, department_name, price_toCustomer, stock_quantity)
VALUES ("turtle_socks", "socks", "105.00", 100);

SELECT * FROM products;