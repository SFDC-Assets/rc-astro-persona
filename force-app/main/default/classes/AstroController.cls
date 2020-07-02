global without sharing class AstroController {

    @AuraEnabled
    public static Persona__c getPersona(String personaName) {

        System.debug('AstroController > getPersona - personaName: ' + personaName);
        Persona__c persona;

        List<Persona__c> personas = [
                SELECT Id, Name, Full_Name__c, Role__c, Image__c, Where_Are_We__c 
                FROM Persona__c
                WHERE Name = :personaName
        ];

        if (personas.size() > 0) {
            persona = personas.get(0);           
            if (persona.Full_Name__c == null) { persona.Full_Name__c = 'blank'; }
            if (persona.Role__c == null) { persona.Role__c = 'blank'; }
            if (persona.Image__c == null) { persona.Image__c = 'blank'; }
            if (persona.Where_Are_We__c == null) { persona.Where_Are_We__c = 'blank'; }
        }
        System.debug('AstroController > getPersona - persona: ' + persona);

        return persona;

    } // end getPersona
    
    @InvocableMethod(label='Get Persona')
    global static List<Persona__c> getPersonaDetails(List<String> personaName) {
        
        List<Persona__c> personaResponse = new List<Persona__c>();
        for (String name : personaName) {
        	System.debug('AstroController > getPersonaDetails - personaName: ' + name);
        	Persona__c persona = getPersona(name);
            personaResponse.add(persona);
        }
        
        return personaResponse;
        
    } // end getPersonaDetails   
    
    
}