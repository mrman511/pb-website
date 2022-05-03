DROP TABLE IF EXISTS frameworks CASCADE;

CREATE TABLE frameworks (
  id SERIAL PRIMARY KEY NOT NULL,
  language_id INTEGER REFERENCES languages(id),
  name VARCHAR(50) NOT NULL,
  icon_url VARCHAR(255),
  testing BOOLEAN NOT NULL
);