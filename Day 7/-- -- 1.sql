-- -- 1. Create Database
-- CREATE DATABASE TechNovaDB;
 USE TechNovaDB;

-- -- 2. Create Tables
-- CREATE TABLE Department (
--     DeptID INT PRIMARY KEY AUTO_INCREMENT,
--     DeptName VARCHAR(50) NOT NULL UNIQUE,
--     Location VARCHAR(50)
-- );

-- CREATE TABLE Employee (
--     EmpID INT PRIMARY KEY AUTO_INCREMENT,
--     EmpName VARCHAR(50) NOT NULL,
--     Gender ENUM('Male','Female','Other'),
--     DOB DATE,
--     HireDate DATE,
--     DeptID INT,
--     FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
-- );

-- CREATE TABLE Project (
--     ProjectID INT PRIMARY KEY AUTO_INCREMENT,
--     ProjectName VARCHAR(100) NOT NULL,
--     DeptID INT,
--     StartDate DATE,
--     EndDate DATE,
--     FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
-- );

-- CREATE TABLE Performance (
--     EmpID INT,
--     ProjectID INT,
--     Rating DECIMAL(3,2),
--     ReviewDate DATE,
--     PRIMARY KEY (EmpID, ProjectID),
--     FOREIGN KEY (EmpID) REFERENCES Employee(EmpID),
--     FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
-- );

-- CREATE TABLE Reward (
--     EmpID INT,
--     RewardMonth VARCHAR(20),
--     RewardAmount DECIMAL(10,2),
--     FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
-- );

-- -- 3. Create Indexes
-- CREATE INDEX idx_empname ON Employee(EmpName);
-- CREATE INDEX idx_deptid ON Employee(DeptID);


-- -- 1. Insert Records
-- INSERT INTO Department (DeptName, Location) VALUES
-- ('HR', 'Bangalore'),
-- ('IT', 'Hyderabad'),
-- ('Finance', 'Chennai'),
-- ('Marketing', 'Delhi'),
-- ('R&D', 'Pune');

-- INSERT INTO Employee (EmpName, Gender, DOB, HireDate, DeptID) VALUES
-- ('Arjun Kumar', 'Male', '1990-05-12', '2020-02-15', 2),
-- ('Sneha Reddy', 'Female', '1995-07-23', '2021-03-10', 1),
-- ('Ravi Teja', 'Male', '1988-09-05', '2018-07-01', 3),
-- ('Priya Nair', 'Female', '1993-11-18', '2022-01-20', 4),
-- ('Vikram Das', 'Male', '1992-02-28', '2019-06-15', 5);

-- INSERT INTO Project (ProjectName, DeptID, StartDate, EndDate) VALUES
-- ('Payroll Automation', 3, '2023-01-01', '2023-07-01'),
-- ('AI Chatbot', 2, '2022-06-01', '2023-02-28'),
-- ('Recruitment Portal', 1, '2023-03-01', '2023-08-30'),
-- ('Market Analysis', 4, '2023-04-01', '2023-10-01'),
-- ('Product Innovation', 5, '2023-02-15', '2023-09-15');

-- INSERT INTO Performance (EmpID, ProjectID, Rating, ReviewDate) VALUES
-- (1, 2, 4.5, '2023-09-10'),
-- (2, 3, 4.2, '2023-09-11'),
-- (3, 1, 3.9, '2023-09-12'),
-- (4, 4, 4.8, '2023-09-13'),
-- (5, 5, 4.1, '2023-09-14');

-- INSERT INTO Reward (EmpID, RewardMonth, RewardAmount) VALUES
-- (1, '2023-08', 2500),
-- (2, '2023-09', 1800),
-- (3, '2023-07', 900),
-- (4, '2023-09', 3000),
-- (5, '2023-10', 2700);

-- -- 2. Update one employee’s department
-- UPDATE Employee
-- SET DeptID = 3
-- WHERE EmpName = 'Sneha Reddy';

select * from Employee;
