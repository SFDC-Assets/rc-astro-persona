BEGIN TRANSACTION;
CREATE TABLE "Persona__c" (
	sf_id VARCHAR(255) NOT NULL, 
	"Name" VARCHAR(255), 
	"Flow_API_Name__c" VARCHAR(255), 
	"Full_Name__c" VARCHAR(255), 
	"Image__c" VARCHAR(255), 
	"Role__c" VARCHAR(255), 
	"Where_Are_We__c" VARCHAR(255), 
	PRIMARY KEY (sf_id)
);
INSERT INTO "Persona__c" VALUES('a0056000004XHI5AAO','Distributor','Ask_Astro_Persona','Lauren Bailey','laurenbailey','Distributor','archSalesforceInternal');
INSERT INTO "Persona__c" VALUES('a0056000004XHI6AAO','Category Desk','Ask_Astro_Persona','Sarah Farmer','sarahfarmer','Category Desk','archSalesforceInternal');
INSERT INTO "Persona__c" VALUES('a0056000004XHI7AAO','Astro','Ask_Astro','Lauren Bailey','astroHead','Distributor','');
INSERT INTO "Persona__c" VALUES('a0056000004XHNGAA4','EmployeeService','Ask_Astro_HR_Use_Cases','Helen Connor','helenconnor','Employee Service Use Cases','');
COMMIT;
