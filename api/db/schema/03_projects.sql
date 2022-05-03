DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  image_file_name VARCHAR(50),
  title VARCHAR(255) NOT NULL,
  link VARCHAR(255),
  github VARCHAR(255) NOT NULL,
  description TEXT,
  primary_media VARCHAR(50),
  finished BOOLEAN
);