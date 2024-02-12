USE db-nfc-game;

CREATE TABLE IF NOT EXISTS Card (
    id_card INT AUTO_INCREMENT PRIMARY KEY,
    title_card VARCHAR(255),
    detail_card TEXT,
    path_image_card VARCHAR(255),
    count_scan_card INT
);

CREATE TABLE IF NOT EXISTS BoardGame (
    id_boardgame INT AUTO_INCREMENT PRIMARY KEY,
    title_game VARCHAR(255),
    detail_game TEXT,
    path_image_boardgame VARCHAR(255),
    player_recommend_start INT,
    player_recommend_end INT,
    age_recommend INT,
    time_playing INT,
    count_scan_boardgame INT
);


CREATE TABLE IF NOT EXISTS Report (
    id_report INT AUTO_INCREMENT PRIMARY KEY,
    id_boardgame INT,
    FOREIGN KEY (id_boardgame) REFERENCES BoardGame(id_boardgame),
    count_scan_card INT,
    count_scan_boardgame INT,
    date_report DATETIME DEFAULT CURRENT_TIMESTAMP,
    checkType VARCHAR(10),
    detail_report TEXT
);

CREATE TABLE IF NOT EXISTS Connect_BoardGame_Card (
    id_total_boardgame INT AUTO_INCREMENT PRIMARY KEY,
    id_card INT,
    FOREIGN KEY (id_card) REFERENCES Card(id_card),
    id_boardgame INT,
    FOREIGN KEY (id_boardgame) REFERENCES BoardGame(id_boardgame)
);

