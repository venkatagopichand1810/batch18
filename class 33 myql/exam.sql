CREATE TABLE students (
  id INT,
  name VARCHAR(100),
  grade VARCHAR(5)
  )ENGINE = InnoDB;
  
 INSERT INTO students(id, name, grade) VALUES 
 (1, "VENKAT", "A"),
 (2, "harsha", "A+"),
 (3, "bala", "B"),
 (4, "amulya", "D"),
 (5, "kavitha", "C");
 
 SELECT * from students;