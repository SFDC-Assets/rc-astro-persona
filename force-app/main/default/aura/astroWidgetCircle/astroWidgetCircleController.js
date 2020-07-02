({
    doInit: function(cmp, evt, helper) {      
    	var astroImage = cmp.get("v.astroImage");
    	console.log('astroWidgetCircleController - astroImage: ' + astroImage);
    },
    
    handleToggleEvent: function(cmp, evt, helper) {
        const openStatus = evt.getParam("openStatus");
        if (openStatus === "OPEN") cmp.set("v.isOpen", true);
        else cmp.set("v.isOpen", false);
    }
});