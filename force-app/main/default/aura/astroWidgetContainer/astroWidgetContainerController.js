({
    doInit: function(cmp, evt, helper) {      
    	var widgetWidth = cmp.get("v.widgetWidth");
    	console.log('astroWidgetContainerController - widgetWidth: ' + widgetWidth);
        var widgetHeight = cmp.get("v.widgetHeight");
    	console.log('astroWidgetContainerController - widgetHeight: ' + widgetHeight);
    },
    
    /* calulates height of section element */
    reCalcHeight: function(cmp, evt, helper) {
        const posY = evt.getParam("posY");
        helper.calcHeight(cmp, posY);
    },
    
    handleToggleEvent: function(cmp, evt, helper) {
        const openStatus = evt.getParam("openStatus");
        cmp.set("v.widgetStatus", openStatus);
    }
    
});