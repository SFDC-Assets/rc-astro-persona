({
	doInit: function(cmp, evt, helper) {      
    	var persona = cmp.get("v.persona");
        
    	console.log('astroWidgetIndexController - persona: ' + JSON.stringify(persona));        
    	console.log('astroWidgetIndexController - widgetWidth: ' + cmp.get("v.widgetWidth") + ', widgetHeight: ' + cmp.get("v.widgetHeight"));
        console.log('astroWidgetIndexController - backgroundImage: ' + cmp.get("v.backgroundImage"));
        console.log('astroWidgetIndexController - backgroundColor: ' + cmp.get("v.backgroundColor"));
    },
})