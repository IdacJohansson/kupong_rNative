create table cupong(
                     id int auto_increment,
                     couponAmount int NOT NULL,
                     isValid VARCHAR(255) NOT NULL,
                     expirationDate VARCHAR(255),
                     couponName VARCHAR(255)
);

create table user(
                     id int auto_increment,
                     username int NOT NULL,
                     password VARCHAR(255) NOT NULL,
);