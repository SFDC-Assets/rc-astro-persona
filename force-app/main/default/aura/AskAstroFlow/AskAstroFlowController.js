({

    init: function(component, event, helper) {

        var personaName = component.get("v.personaName");
        var flowName = component.get("v.flowName");
        console.log('AskAstroFlowController > init - personaName: ' + personaName + ', flowName: ' + flowName); 

        if (!flowName) {
            flowName = component.get("v.defaultFlowName");
            console.log('AskAstroFlowController > init - using default flowName: ' + flowName);
        }
        
        var componentID = "AskAstroFlow";        
        
        if (flowName && flowName != "") {

            // find the view component (by aura:id) where the flow will be displayed
            var flow = component.find(componentID);

            // flow inputs
            var inputVariables = [];
            
            if (flowName == "Ask_Astro_Persona") {
                inputVariables[0] = { name : "personaName", type : "String", value: personaName };
            }            
            console.log('AskAstroFlowController > init - inputVariables: ' + JSON.stringify(inputVariables));
    
            // start the flow by the flow Unique Name
            flow.startFlow(flowName, inputVariables);
        }
        
    }, // end init

})