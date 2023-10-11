# SQL_Challenge_Employee_Tracker

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation

The user will need to have node.js installed, mysql2 and Inquier@8.2.4 packages to use this app. 

## Usage

This is the URL for my GitHub repository for this challenge: https://github.com/melkali42/SQL_Challenge_Employee_Tracker

This is the link for the walkthrough video demonstrating the functionality of the application: https://drive.google.com/file/d/1chodCW9_3k821qoAgoNNB7YDFsp20trH/view

![Screenshot1](https://github.com/melkali42/SQL_Challenge_Employee_Tracker/blob/main/assets/mysql%201.PNG)
![Screenshot2](https://github.com/melkali42/SQL_Challenge_Employee_Tracker/blob/main/assets/mysql%202.PNG)
![Screenshot3](https://github.com/melkali42/SQL_Challenge_Employee_Tracker/blob/main/assets/SQL%20Challenge%201.PNG)
![Screenshot4](https://github.com/melkali42/SQL_Challenge_Employee_Tracker/blob/main/assets/SQL%20Challenge%202.PNG)
![Screenshot5](https://github.com/melkali42/SQL_Challenge_Employee_Tracker/blob/main/assets/SQL%20Challenge%203.PNG)

  
## Credits

Create by Melissa Kalish. I conducted several searches in https://www.google.com/ and utilized https://stackoverflow.com/ and https://www.w3schools.com/ for reserach, viewing others code examples, questions and answers. I used https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide to create the challenge README for the repository.

## License

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
