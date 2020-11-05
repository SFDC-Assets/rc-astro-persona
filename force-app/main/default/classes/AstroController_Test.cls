@isTest
private class AstroController_Test {

    @isTest static void test() {
        
        System.debug('AstroController_Test >> start');
        
        // data
        String personaName = 'Service Agent';
        Persona__c p = new Persona__c(Name = personaName);
        p.Full_Name__c = 'Ryan Cox';
        p.Role__c = personaName;
		insert p;
        
        // test
        Test.startTest();
        List<String> personaNames = new List<String>{ personaName };
        List<Persona__c> personas = AstroController.getPersonaDetails(personaNames);
        System.assertEquals(personas.size(), 1);
        Test.stopTest();
        
        System.debug('AstroController_Test >> complete');
        
    }
    
} // end AstroController_Test