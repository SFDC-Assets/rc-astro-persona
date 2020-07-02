BEGIN TRANSACTION;
CREATE TABLE "Persona__c" (
	sf_id VARCHAR(255) NOT NULL, 
	"Name" VARCHAR(255), 
	"Flow_API_Name__c" VARCHAR(255), 
	"Full_Name__c" VARCHAR(255), 
	"Image__c" VARCHAR(255), 
	"Role__c" VARCHAR(255), 
	"Where_Are_We__c" VARCHAR(255), 
	record_type VARCHAR(255), 
	PRIMARY KEY (sf_id)
);
INSERT INTO "Persona__c" VALUES('a001D000003IUalQAG','Distributor','Ask_Astro_Persona','Lauren Bailey','laurenbailey','Distributor','archSalesforceInternal',NULL);
INSERT INTO "Persona__c" VALUES('a001D000003IUabQAG','Category Desk','Ask_Astro_Persona','Sarah Farmer','sarahfarmer','Category Desk','archSalesforceInternal',NULL);
INSERT INTO "Persona__c" VALUES('a001D000003IUgVQAW','Astro','Ask_Astro','','astroHead','','',NULL);
COMMIT;
