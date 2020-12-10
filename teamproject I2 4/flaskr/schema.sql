DROP TABLE IF EXISTS current_user;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS user_info;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS dailypass;
DROP TABLE IF EXISTS quarantine;
DROP TABLE IF EXISTS high_risk_states;


CREATE TABLE current_user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT  NOT NULL
);

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE "user_info" (
	"id"	INTEGER NOT NULL,
	"username"	TEXT NOT NULL ,
	"pretrain_status" Integer,
	"test_result"	INTEGER DEFAULT 0,
	"at_risk"	INTEGER DEFAULT 0,
	"is_quarantined"	INTEGER DEFAULT 0,
	"quarantine_days"	INTEGER DEFAULT 0,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE post (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author_id INTEGER NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  FOREIGN KEY (author_id) REFERENCES user (id)
);

CREATE TABLE "dailypass" (
	id	INTEGER,
	username	TEXT NOT NULL,
	symptoms	BOOL,
	date DATE,
	mudd	integer DEFAULT 0,
	nwc integer DEFAULT 0,
	bulter  integer DEFAULT 0,
	lerner  integer DEFAULT 0,
	others integer default 0,
	PRIMARY KEY(id AUTOINCREMENT)
);


CREATE TABLE "quarantine" (
	"id"	INTEGER,
	"username"	TEXT NOT NULL,
	"date" DATE,
	"quarantine_validity" BOOL,
	"symptoms" BOOL,
	"latitude" FLOAT,
	"longitude" FLOAT,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE high_risk_states (
  id INTEGER,
  statename TEXT NOT NULL
);

