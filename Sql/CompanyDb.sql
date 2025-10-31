-- Creating a Database
CREATE DATABASE IF NOT EXISTS CompanyDB;   -- Creating the DB if it doesn't exist already
USE CompanyDB;                             -- Using the created DB

-- Creating a Table
CREATE TABLE IF NOT EXISTS Staff (
    StaffID INT PRIMARY KEY AUTO_INCREMENT,   -- Primary Key with Auto Increment 
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    HireDate DATE NOT NULL,                   -- Date type for storing dates
    Salary DECIMAL(10, 2) NOT NULL            -- Decimal type with precision and scale
);

-- Inserting Data into the Table
INSERT INTO Staff (FirstName, LastName, Email, HireDate, Salary) VALUES
('Michael', 'Brown', 'michael.brown@company.com', '2023-04-12', 55000.00),
('Sarah', 'Davis', 'sarah.davis@company.com', '2023-05-18', 72000.00),
('David', 'Wilson', 'david.wilson@company.com', '2023-06-25', 68000.00);

-- Querying the Data from the Table
SELECT * FROM Staff;                                -- Select all columns and rows

SELECT FirstName, LastName, Email FROM Staff;        -- Select specific columns

-- New Query: Staff earning more than 65,000
SELECT FirstName, LastName, Salary 
FROM Staff
WHERE Salary > 65000;
