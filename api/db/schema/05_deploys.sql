DROP TABLE IF EXISTS deploys CASCADE;

CREATE TABLE deploys(
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES technologies(id) ON DELETE CASCADE,
  name VARCHAR(50),
  image_file_name VARCHAR(50),
  link VARCHAR(255),
  type varchar(10)
);