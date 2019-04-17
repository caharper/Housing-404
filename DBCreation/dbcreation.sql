CREATE TABLE users(
	id int PRIMARY KEY, 
	name varchar(25), 
	email varchar(25), 
	password varchar(64));
	
CREATE TABLE uProfiles(
	id int PRIMARY KEY,
	gender  varchar(3),
	picture BLOB,
	smoker bit,
	genderP varchar(3),
	smokerP bit,
	year int,
	tidynessP int,
	yearP int,
	tempP int,
	bedTimeP varchar(5),
	wakeTime varchar(5),
	wakeTimeP varchar(5),
	pets varchar(1),
	FOREIGN KEY(id) 
	REFERENCES users(id));
	
	CREATE TABLE aProfiles (
	a_id int PRIMARY KEY,
	u_id int,
	FOREIGN KEY (u_id) REFERENCES users(id),
	location varchar(200),
	rent int,
	leaseTime int,
	description varchar(500),
	picture blob,
	occupants int,
	beds int,
	baths float,
	squareFeet int,
	rooms int,
	kitchen bit,
	laundry varchar(50),
	floor int,
	pets bit,
	poBox bit,
	studyRooms int,
	roomStyle varchar(15),
	gym bit,
	pool bit,
	ac bit,
	heat bit
	);
	
CREATE TABLE prevRents(
	a_id int,
	rent int,
	FOREIGN KEY(a_id) REFERENCES aProfiles(a_id)
);
	

CREATE TABLE events(
	e_id int PRIMARY KEY,
	owner int,
	details varchar[500],
	date varchar[14],
	picture blob
	FOREIGN KEY(owner) REFERENCES users(id));

CREATE TABLE attending(
	e_id int, 
	u_id int,
	FOREIGN KEY(u_id) REFERENCES users(id));

CREATE TABLE notifications(
	to_u_id int,
	from_u_id int,
	notification varchar(100),
	FOREIGN KEY(to_u_id) REFERENCES users(id),
	FOREIGN KEY(from_u_id) REFERENCES users(id)
);
