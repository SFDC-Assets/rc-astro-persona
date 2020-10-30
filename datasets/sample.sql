BEGIN TRANSACTION;
CREATE TABLE "Persona__c" (
	id INTEGER NOT NULL, 
	"Flow_API_Name__c" VARCHAR(255), 
	"Full_Name__c" VARCHAR(255), 
	"Image__c" VARCHAR(255), 
	"Name" VARCHAR(255), 
	"Role__c" VARCHAR(255), 
	"Where_Are_We__c" VARCHAR(255), 
	"Width__c" VARCHAR(255), 
	PRIMARY KEY (id)
);
INSERT INTO "Persona__c" VALUES(1,'Ask_Astro_Persona','Lauren Bailey','laurenbailey','Distributor','Distributor','archSalesforceInternal','');
INSERT INTO "Persona__c" VALUES(2,'Ask_Astro_Persona','Sarah Farmer','sarahfarmer','Category Desk','Category Desk','archSalesforceInternal','');
INSERT INTO "Persona__c" VALUES(3,'Ask_Astro','Lauren Bailey','astroHead','Astro','Distributor','','');
INSERT INTO "Persona__c" VALUES(4,'Ask_Astro_HR_Use_Cases','Helen Connor','helenconnor','EmployeeService','Employee Service','hrFutureArchitecture','600.0');
COMMIT;
