CREATE TABLE activities (idactivities int(11) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, longitude double NOT NULL, latitude double NOT NULL, projectsidprojects int(11) NOT NULL, PRIMARY KEY (idactivities)) engine=InnoDB;
CREATE TABLE donation (iddonation int(10) NOT NULL AUTO_INCREMENT, amount double NOT NULL, longitud double NOT NULL, latitud double NOT NULL, `user iduser` int(10) NOT NULL, PRIMARY KEY (iddonation)) engine=InnoDB;
CREATE TABLE goods (goodid int(11) NOT NULL AUTO_INCREMENT, title varchar(255) NOT NULL, PRIMARY KEY (goodid)) engine=InnoDB;
CREATE TABLE history (idhistory int(11) NOT NULL AUTO_INCREMENT, datetime datetime NOT NULL, longitude double NOT NULL, latitude double NOT NULL, historyidhistory int(11) NOT NULL, piratepirateid int(10) NOT NULL, Goodsgoodid int(11) NOT NULL, PRIMARY KEY (idhistory)) engine=InnoDB;
CREATE TABLE pirate (pirateid int(10) NOT NULL AUTO_INCREMENT, email varchar(255) NOT NULL UNIQUE, password varchar(255) NOT NULL, gender varchar(255) NOT NULL, PRIMARY KEY (pirateid)) engine=InnoDB;
CREATE TABLE pirate_activities (piratepirateid int(10) NOT NULL, activitiesidactivities int(11) NOT NULL, PRIMARY KEY (piratepirateid, activitiesidactivities)) engine=InnoDB;
CREATE TABLE projects (idprojects int(11) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY (idprojects)) engine=InnoDB;




ALTER TABLE pirate_activities ADD INDEX FKpirate_act840888 (piratepirateid), ADD CONSTRAINT FKpirate_act840888 FOREIGN KEY (piratepirateid) REFERENCES pirate (pirateid);
ALTER TABLE pirate_activities ADD INDEX FKpirate_act28884 (activitiesidactivities), ADD CONSTRAINT FKpirate_act28884 FOREIGN KEY (activitiesidactivities) REFERENCES activities (idactivities);
ALTER TABLE activities ADD INDEX FKactivities967733 (projectsidprojects), ADD CONSTRAINT FKactivities967733 FOREIGN KEY (projectsidprojects) REFERENCES projects (idprojects);
ALTER TABLE history ADD INDEX FKhistory614008 (Goodsgoodid), ADD CONSTRAINT FKhistory614008 FOREIGN KEY (Goodsgoodid) REFERENCES goods (goodid);
ALTER TABLE history ADD INDEX FKhistory284735 (piratepirateid), ADD CONSTRAINT FKhistory284735 FOREIGN KEY (piratepirateid) REFERENCES pirate (pirateid);
ALTER TABLE donation ADD INDEX FKdonation88811 (`user iduser`), ADD CONSTRAINT FKdonation88811 FOREIGN KEY (`user iduser`) REFERENCES pirate (pirateid);

