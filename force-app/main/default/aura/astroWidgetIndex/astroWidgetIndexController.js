({
	doInit: function(cmp, evt, helper) {      
    	var persona = cmp.get("v.persona");
    	console.log('astroWidgetIndexController - persona: ' + JSON.stringify(persona));
        
        var widgetHeight = cmp.get("v.widgetHeight");
    	console.log('astroWidgetIndexController - widgetHeight: ' + widgetHeight);
        
        /**
        if (persona && persona.Width__c) {
            var widgetWidth = persona.Width__c.toString();
            console.log('astroWidgetIndexController > widgetWidth: ' + widgetWidth);
            component.set("v.widgetWidth", widgetWidth);
        }
        **/
    },
})