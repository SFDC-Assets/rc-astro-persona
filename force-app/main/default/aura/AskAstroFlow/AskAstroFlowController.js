({

    init: function(component, event, helper) {

        var personaName = component.get("v.personaName");
    	console.log('AskAstroWidgetController > init - personaName: ' + personaName); 

        var componentID = "AskAstroFlow";
        var flowName = "Ask_Astro_Persona";
        
        if (flowName) {

            // find the view component (by aura:id) where the flow will be displayed
            var flow = component.find(componentID);

            // flow inputs
            var inputVariables = [];
            inputVariables[0] = { name : "personaName", type : "String", value: personaName };
            console.log('AskAstroWidgetController > init - inputVariables: ' + JSON.stringify(inputVariables));
    
            // start the flow by the flow Unique Name
            flow.startFlow(flowName, inputVariables);
        }
        
    }, // end init

})