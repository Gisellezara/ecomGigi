USE ecom_proj;

 CREATE TABLE Products (
  item_number INT AUTO_INCREMENT,
  item_description VARCHAR(150),
  color VARCHAR(50),
  material VARCHAR(70),
  size INT,
  price  INT,
  PRIMARY KEY (item_number)
 );
 

 INSERT INTO Products ( item_description, color, material, size, price)
 VALUES
 ('White Gliter Cup', 'White', 'Plastic', 24, 45),
 ('Pink Cup', 'Pink', 'Plastic', 24, 45),
 ('Naruto Cup', 'Black', 'Plastic', 24, 45),
 ('Among Us Cup', 'Clear', 'Plastic', 24, 25),
 ('Wonder Woman Cup', 'Black', 'Plastic', 24, 45),
 ('Black Holloween Cup', 'Black', 'Plastic', 24, 30),
 ('Frida Kahlo Cup', 'Clear', 'Plastic', 20, 25),
 ('Baby Yoda Cup', 'Clear', 'Plastic', 20, 25),
 ('Mermaid Ombre Studded Cup', 'Purple', 'Plastic', 24, 55),
 ('Grinch Cup', 'Clear', 'Plastic', 20, 25),
('Valentines Cup', 'Red', 'Plastic', 20, 35),
 ('Valentines Bundle Cups', 'Clear', 'Plastic', 20, 70);