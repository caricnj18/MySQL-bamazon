--the information--

DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (100) NOT NULL,
  dept_name VARCHAR (45) NOT NULL,
  price INT default 0,
  stock_quantity INT NOT NULL, 
  PRIMARY KEY (id)
);



    --Populate this database with around 10 different products--

    --product 1--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("DVD", "Entertainment", 20, 50);

--product 2--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("CD", "Music", 10, 50);

--product 3--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("DVD Player", "Electronics", 85, 20);

--product 4--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("Portable CD Player", "Electronics", 35, 10);

--product 5--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("HDTV", "Electronics", 500, 50);

--product 6--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("VHS", "Entertainment", 10, 10);

--product 7--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("VHS Player", "Electronics", 55, 5);

--product 8--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("Cassette Tape", "Music", 7, 5);

--product 9--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("Portable Cassette Player", "Electronics", 20, 3);

--product 10--
    INSERT INTO products
        (product_name, dept_name, price, stock_quantity)
    VALUES
        ("Headphones", "Electronics", 20, 40);

        SELECT * FROM products;