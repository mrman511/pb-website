
-- javascript frameworks 
INSERT INTO frameworks (language_id, name, icon_url, testing) VALUES
(1, 'React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', false),
(1, 'Cypress', NULL , true),
(1, 'Jest', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', true),
(1, 'JQuery and Ajax', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', false),
(1, 'Express', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', false),
(1, 'Mocha and Chai', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg', true),
(1, 'Socket.io', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', false),
(1, 'WS', NULL , false);

-- ruby frameworks
INSERT INTO frameworks (language_id, name, icon_url, testing) VALUES
(2, 'Rails', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg', false);

-- database frameworks
INSERT INTO frameworks (language_id, name, icon_url, testing) VALUES
(3, 'Postgres SQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', false),
(3, 'SQLite', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', false)