INSERT INTO pirate(pirateid, email, password, gender) VALUES (0,"pedroloco@gmail.com", "142pedro", "masculino");
INSERT INTO pirate(pirateid, email, password, gender) VALUES (0,"marimar@gmail.com", "12maria", "femanino");
INSERT INTO pirate(pirateid, email, password, gender) VALUES (0,"chuchoelroto@gmail.com", "98chuchin", "masculino");
INSERT INTO pirate(pirateid, email, password, gender) VALUES (0,"antonion@gmail.com", "1toñito", "masculino");




INSERT INTO donation(iddonation, amount, longitud, latitud, `user iduser`) VALUES (0,4500,-635,353,1);
INSERT INTO donation(iddonation, amount, longitud, latitud, `user iduser`) VALUES (0,9333,-724,5467,1);
INSERT INTO donation(iddonation, amount, longitud, latitud, `user iduser`) VALUES (0,9022,-904,835,5);
INSERT INTO donation(iddonation, amount, longitud, latitud, `user iduser`) VALUES (0,1000,-368,087,4);
INSERT INTO donation(iddonation, amount, longitud, latitud, `user iduser`) VALUES (0,3200,-0734,245,2);




INSERT INTO projects(idprojects, name) VALUES (0, "Instalar calefaccion");
INSERT INTO projects(idprojects, name) VALUES (0, "Pintar cubierta");
INSERT INTO projects(idprojects, name) VALUES (0, "Construir huerto");
INSERT INTO projects(idprojects, name) VALUES (0, "Publicidad");




INSERT INTO goods(goodid, title) VALUES (0, "cobijas roja con lineas blancas");
INSERT INTO goods(goodid, title) VALUES (0, "laptop hp pavillion dv5");
INSERT INTO goods(goodid, title) VALUES (0, "impresora canon MG3210");
INSERT INTO goods(goodid, title) VALUES (0, "Jabon liquido lava trastes");
INSERT INTO goods(goodid, title) VALUES (0, "Latas de atun dolores");



INSERT INTO history(idhistory, datetime, longitude, latitude, historyidhistory, piratepirateid, Goodsgoodid) VALUES (0, "2017-01-11", 19.451031,-99.166568, 1, 4, 2);
INSERT INTO history(idhistory, datetime, longitude, latitude, historyidhistory, piratepirateid, Goodsgoodid) VALUES (0, "2017-01-09", 20.659699,-103.349609, 2, 1, 1);
INSERT INTO history(idhistory, datetime, longitude, latitude, historyidhistory, piratepirateid, Goodsgoodid) VALUES (0, "2016-12-31", 25.686614,-100.316113, 2, 2, 3);





INSERT INTO activities(idactivities, name, longitude, latitude, projectsidprojects) VALUES (0,"ir de compras por el material",19.451031,-99.166568,1);
INSERT INTO activities(idactivities, name, longitude, latitude, projectsidprojects) VALUES (0,"comprar la pintura",19.451031,-99.166568,2);
INSERT INTO activities(idactivities, name, longitude, latitude, projectsidprojects) VALUES (0,"comprar material de jarineria",19.451031,-99.166568,3);
INSERT INTO activities(idactivities, name, longitude, latitude, projectsidprojects) VALUES (0,"imprimir volantes",19.451031,-99.166568,4);
INSERT INTO activities(idactivities, name, longitude, latitude, projectsidprojects) VALUES (0,"tomar medidas de barco",19.451031,-99.166568,1);




INSERT INTO pirate_activities(piratepirateid, activitiesidactivities) VALUES (4, 1);
INSERT INTO pirate_activities(piratepirateid, activitiesidactivities) VALUES (3, 2);
INSERT INTO pirate_activities(piratepirateid, activitiesidactivities) VALUES (2, 3);
INSERT INTO pirate_activities(piratepirateid, activitiesidactivities) VALUES (1, 4);



