CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  grade VARCHAR(5)
  )ENGINE = InnoDB;
  
 INSERT INTO students(name, age, grade) VALUES 
 ("VENKAT", 30, "A"),
 ("harsha",25, "A+"),
 ("bala", 20, "B"),
 ("amulya", 19, "D"),
 ("kavitha", 22, "C"),
 ("VENKAT", 30, "A"),
 ("VENKAT", 30, "A"),
 ("harsha",25, "A+"),
 ("bala", 20, "B"),
 ("amulya", 19, "D"),
 ("kavitha", 22, "C"),
 ("VENKAT", 30, "A");
 
 UPDATE students SET grade = "B" WHERE name = "amulya";
 
 -- ALTER TABLE students ADD email VARCHAR(100);
 
 -- SELECT * from students;
 
 -- select * from students WHERE name = "kavitha";
 
 -- I wanted to find the unqiue student names and remove duplictes
 
  -- SELECT DISTINCT age, name from students;
  
  -- fetch first 3 records
  
  -- SELECT * from students LIMIT 2;
  
  -- skip the first 3 rows and fetch the next 3 (pagination)
  
  -- SELECT * from students LIMIT 3 OFFSET 2;
  
  -- I WANTED TO SORT the age by descending order
  
  select * from students ORDER BY age DESC;
  
    -- I WANTED TO SORT the age by Ascending order
      select * from students ORDER BY age ASC;
    
  
  
  
  
  
  
  
  
  
  
  
 
 
 
 
 