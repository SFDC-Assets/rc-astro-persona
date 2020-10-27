({
	doInit: function(cmp, evt, helper) {      
    	var persona = cmp.get("v.persona");
    	console.log('astroWidgetIndexController - persona: ' + JSON.stringify(persona));
        var widgetHeight = cmp.get("v.widgetHeight");
    	console.log('astroWidgetIndexController - widgetHeight: ' + widgetHeight);
    },
})