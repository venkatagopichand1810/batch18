CREATE TABLE students ( 
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  gender VARCHAR(10), 
  email varchar(100), 
  phone varchar(15),
  grade varchar(2),
  department varchar(50), 
  city varchar(50), 
  is_active BOOLEAN
 );
 
insert into students (name, age, gender, email, phone, grade, department, city, is_active)
VALUES
("Ram", 20, "Male", "rama@gmail.com", "8878787846", "A", "Computer Science", "Mumbai", TRUE),
("bob", 21,"Male", "bob@gmail.com", "979454545", "B", "Civil", "Delhi", TRUE),
("venkat", 19, "Male", "venkat@gmail.com", "7875221954", "C", "Electrical", "Chennai", FALSE),
("kavitha", 23, "Female", "kavitha@gmail.com", "565451575", "A", "Mechanical", "Hyderabad", TRUE),
("amulya", 20, "Female", "amulya@gmail.com", "979454545", "B", "Civil", "Bangalore", FALSE),
("ganesh", 25, "Male", "ganesh@gmail.com", "7875221954", "C", "Computer Science", "Mumbai", TRUE);

-- SELECT ALL DATA
-- SELECT * FROM STUDENTS;

-- SELECT ONLY NAMES 
-- SELECT name from STUDENTS;

-- SELECT NAME AND EMAIL
-- select name, email from STUDENTS;

-- where clause

-- students from mumbai
-- select * from STUDENTS where city = "Mumbai";

-- students with grade "A"
-- select * from STUDENTS where grade = "A";

-- male students only 
-- select * from STUDENTS where gender = "Male"

-- active students
-- select * from STUDENTS where is_active = true;

-- students older than 24
-- select * from students where age > 24;

-- students whose name starts with "R";
-- select * from students where name LIKE "V%";

-- students from computer science department
-- select * from students where department = "Computer Science";

-- order by 

-- order by age ascending
-- select * from students order by age ASC;

-- order by id desceding order
-- select * from students order by id DESC;

-- using distict
-- select DISTINCT department from students;

-- unique cities and remove the duplicates
-- select DISTINCT city from students;


-- limit / offset

-- select first 3 students
-- select * from students LIMIT 3;

-- skip 2 students, then show next 2 students
 -- select * from students LIMIT 2 offset 2;
 
 -- in / between / not
 
 -- students from delhi or mumbai
--  select * from students where city IN ("Delhi", "Mumbai");
 
 
 -- aged b/w 20 and 22
  select * from students where age BETWEEN 20 AND 22;
  
 -- students not in grade "B"
  SELECT * FROM STUDENTS WHERE GRADE != "B"


-- update the single student grade

UPDATE students set grade = "A+" where name = "venkat";

-- update muliple fields for the student
update students set age = 40, city = "Pune" where id = 2;

-- set all inactive students to active
update students set is_active = true where is_active = false;

-- i wanted to delete the student with name kavitha
delete from students where name = "kavitha";
    
-- i wanted to delete all the students with grade "C"
delete from students where grade = "C";

-- delete all the students 
delete from students;

select * from students;

-- increase the age of all the students by 5 years
UPDATE students set age = age + 15;

-- deactivate students older than 38
update students set is_active = false where age > 38;

-- change email domain from gamil.com to guvi.com

update students set email = REPLACE(email, "@gmail.com" , "@guvi.com");



































    
    
    
    
    
    
    
    