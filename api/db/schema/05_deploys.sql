DROP TABLE IF EXISTS deploys CASCADE;

CREATE TABLE deploys(
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES technologies(id) ON DELETE CASCADE,
  front VARCHAR(50),
  front_image_file_name VARCHAR(50),
  front_link VARCHAR(255),
  back VARCHAR(50),
  back_image_file_name VARCHAR(50),
  back_link VARCHAR(255)
);