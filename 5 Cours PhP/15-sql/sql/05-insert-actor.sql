-- Ce code évite les doublons
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE webflix.actor;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `webflix`.`actor` (`name`, `firstname`, `birthday`)
VALUES 

('Pacino', 'Al', '1940-04-25'),
('Brando', 'Marlon', '1924-04-03'),
('de Niro', 'Robert', '1943-08-17'),
('Willis', 'Bruce', '1955-03-19'),
('Liotta', 'Ray', '1954-12-18'),
('Snipes', 'Wesley', '1962-07-31'),
('Stalone', 'Sylvester', '1946-07-06'),
('Norton', 'Edward', '1969-08-18'),
('Spacey', 'Kevin', '1959-07-26'),
('Kilmer', 'Val', '1959-12-31'),
('Milou', 'Tintin', '1999-12-25');