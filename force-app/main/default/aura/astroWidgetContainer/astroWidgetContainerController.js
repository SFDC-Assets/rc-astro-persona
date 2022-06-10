({
    doInit: function(cmp, evt, helper) {    
        console.log('astroWidgetContainerController - openUp: ' + cmp.get("v.openUp"));
    	console.log('astroWidgetContainerController - widgetWidth: ' + cmp.get("v.widgetWidth") + ', widgetHeight: ' + cmp.get("v.widgetHeight"));        
        console.log('astroWidgetContainerController - backgroundImage: ' + cmp.get("v.backgroundImage"));
        console.log('astroWidgetContainerController - backgroundColor: ' + cmp.get("v.backgroundColor"));
    },
    
    /* calulates height of section element */
    reCalcHeight: function(cmp, evt, helper) {
        const posY = evt.getParam("posY");
        helper.calcHeight(cmp, posY);
    },
    
    handleToggleEvent: function(cmp, evt, helper) {
        const openStatus = evt.getParam("openStatus");
        cmp.set("v.widgetStatus", openStatus);
        console.log('astroWidgetContainerController - openUp: ' + cmp.get("v.openUp") + ', widgetStatus: ' + cmp.get("v.widgetStatus"));
    }
    
});