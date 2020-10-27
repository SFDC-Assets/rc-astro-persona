({
    doInit: function(cmp, evt, helper) {      
    	var astroImage = cmp.get("v.astroImage");
    	console.log('astroWidgetCircleController - astroImage: ' + astroImage);
        var astroImageResource = $A.get('$Resource.' + astroImage);
        cmp.set("v.astroImageResource", astroImageResource);
        console.log('astroWidgetCircleController - astroImageResource: ' + astroImageResource);
    },
    
    handleToggleEvent: function(cmp, evt, helper) {
        const openStatus = evt.getParam("openStatus");
        if (openStatus === "OPEN") cmp.set("v.isOpen", true);
        else cmp.set("v.isOpen", false);
    }
});