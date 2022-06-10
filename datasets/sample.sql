BEGIN TRANSACTION;
CREATE TABLE "Persona__c" (
	id INTEGER NOT NULL, 
	"Background_Color__c" VARCHAR(255), 
	"Background_Image__c" VARCHAR(255), 
	"Flow_API_Name__c" VARCHAR(255), 
	"Full_Name__c" VARCHAR(255), 
	"Height__c" VARCHAR(255), 
	"Image__c" VARCHAR(255), 
	"Name" VARCHAR(255), 
	"Role__c" VARCHAR(255), 
	"Where_Are_We__c" VARCHAR(255), 
	"Width__c" VARCHAR(255), 
	PRIMARY KEY (id)
);
INSERT INTO "Persona__c" VALUES(1,'#00A1E1','','Ask_Astro_Persona','Lauren Bailey','620.0','laurenbailey','Distributor','Distributor','archSalesforceInternal','400.0');
INSERT INTO "Persona__c" VALUES(2,'','widgetBG-min.png','Ask_Astro_Persona','Sarah Farmer','','sarahfarmer','Category Desk','Category Desk','archSalesforceInternal','');
INSERT INTO "Persona__c" VALUES(3,'','widgetBG-min.png','Ask_Astro','Lauren Bailey','620.0','astroHead','Astro','Distributor','','380.0');
INSERT INTO "Persona__c" VALUES(4,'white','','Ask_Astro_HR_Use_Cases','Helen Connor','800.0','helenconnor','EmployeeService','Employee Service','hrFutureArchitecture','600.0');
INSERT INTO "Persona__c" VALUES(5,'#FD8800','','Ask_Astro','Robot','620.0','astro_robot_orange','Robot','Guide Me','','380.0');
COMMIT;
