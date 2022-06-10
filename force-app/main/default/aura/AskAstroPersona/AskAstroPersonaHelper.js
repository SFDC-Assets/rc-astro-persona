({
    
  controllerFile: function() {
      return "AskAstroPersonaController";
  }, 
  
  helperFile: function() {
      return "AskAstroPersonaHelper";
  }, 

 getPersona: function(component) {

      return new Promise((resolve, reject) => {

          var personaName = component.get("v.personaName");
          console.log(this.helperFile() + ' > getPersona - personaName: ' + personaName);

          // Create the action
          var doAction = true;
          var action = component.get("c.getPersona"); // method on the AstroController
          if ((personaName) && (personaName != '')) {
              action.setParams({
                  "personaName": personaName
              });
          } else {
              // no input parameters
              doAction = false;
          }

          if (doAction) {

              // Add callback behavior for when response is received
              action.setCallback(this, function(response) {
                  console.log(this.helperFile() + ' > getPersona - response: ' + response.getState())
                  var state = response.getState();
                  if (state === "SUCCESS") {

                      var persona = response.getReturnValue();

                      if (persona) { 
                          console.log(this.helperFile() + ' > getPersona - persona:' + JSON.stringify(persona));
                          
                          if (persona.Width__c != null) component.set("v.widgetWidth", persona.Width__c);
                          if (persona.Height__c != null) component.set("v.widgetHeight", persona.Height__c);
                          console.log(this.helperFile() + ' > getPersona - widgetWidth: ' + component.get("v.widgetWidth") + ', widgetHeight: ' + component.get("v.widgetHeight"));
                          
                          if (persona.Background_Image__c != null) component.set("v.backgroundImage", persona.Background_Image__c);
                          console.log(this.helperFile() + ' > getPersona - backgroundImage: AskAstroResources/' + component.get("v.backgroundImage"));
                          
                          if (persona.Background_Color__c != null) component.set("v.backgroundColor", persona.Background_Color__c);
                          console.log(this.helperFile() + ' > getPersona - backgroundColor: ' + component.get("v.backgroundColor"));
                                                      
                          // set persona triggers the visibility of the astroWidgetIndex
                          component.set("v.persona", persona);
                      }
                  }
                  else {
                      console.log(this.helperFile() + ' > getPersona - failed with state: ' + state);
                      var error = new Error('getPersona - failed with state: ' + state);
                      reject(error);
                  }

                  // promise resolved
                  resolve();
              });

              // Send action off to be executed
              $A.enqueueAction(action);

          } // end doAction

      }) // end promise

  }, // end getPersona
  
  
/* loads location points of the widget. */
loadWidgetLocationPoints: function(cmp, evt, name) {
  if (localStorage.getItem("posX") && localStorage.getItem("posY")) {
    const [posX, posY] = this.keepAstroInWindow(cmp, localStorage.getItem("posX"), localStorage.getItem("posY"));
    if (posX && posY) {
      cmp.set("v.posX", posX);
      cmp.set("v.posY", posY);
      cmp.set("v.isPositioned", true);
      cmp.set("v.posXGhost", posX);
      cmp.set("v.posYGhost", posY);
      this.setPositionQuarter(cmp, posX, posY);
    }
  }
},
/* x and y are the location points of the widget as pixels on window width and height. */
saveWidgetLocationPoints: function(x, y) {
  localStorage.setItem("posX", x);
  localStorage.setItem("posY", y);
},
/* This function determins which screen quarter the widget is located in. */
setPositionQuarter: function(cmp, posX, posY) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const posX100 = posX / w * 100;
  const posY100 = posY / h * 100;
  if (posX100 < 50 && posY100 < 50) {
    cmp.set("v.quarter", "1");
  } else if (posX100 >= 50 && posY100 < 50) {
    cmp.set("v.quarter", "2");
  } else if (posX100 < 50 && posY100 >= 50) {
    cmp.set("v.quarter", "3");
  } else {
    cmp.set("v.quarter", "4");
  }
},
/* Fires the event to notify astroWidgetContainer to calculate height. */
calculateWidgetHeight: function(cmp, posY) {
  const appEvent = $A.get("e.c:astroWidgetCalcHeight");
  if (appEvent) {
    appEvent.setParams({ posY: posY });
    appEvent.fire();
  }
},
/* catch Astro if off page and keep coords within window margins */
keepAstroInWindow: function(cmp, posX, posY) {
  const isConsoleNavigation = cmp.get("v.isConsoleNavigation");
  const widgetSize = 60;
  const widgetDefaultMargin = 12;
  const consoleBottomBannerHeight = 40;
  const widgetBottomMargin = isConsoleNavigation
    ? widgetDefaultMargin + consoleBottomBannerHeight
    : widgetDefaultMargin;

  const w = window.innerWidth;
  const h = window.innerHeight;

  // min and max coords of margins in window
  const minX = widgetDefaultMargin;
  const maxX = w - widgetDefaultMargin - widgetSize;
  const minY = widgetDefaultMargin;
  const maxY = h - widgetBottomMargin - widgetSize;
  if (posX < minX) {
    posX = minX;
  }
  if (posX > maxX) {
    posX = maxX;
  }
  if (posY < minY) {
    posY = minY;
  }
  if (posY > maxY) {
    posY = maxY;
  }
  // return posX and posY values in array
  const posArray = [posX, posY];
  return posArray;
},
/* calculates x and y offset values if dragging by widget-circle or by a child image element */
calculateOffsetXY: function(cmp, evt) {
  let offsetX = evt.offsetX;
  let offsetY = evt.offsetY;
  const elementClickedIsChild = evt.target.dataset.isChild;
  // if child image element adjust offset values
  if (elementClickedIsChild === "true") {
    offsetX += evt.target.offsetLeft;
    offsetY += evt.target.offsetTop;
  }
  // return offsetX and offsetY values in array
  return [offsetX, offsetY];
},
/* save open closed status before dragging widget */
saveOpenClosedStatus: function(cmp) {
  const toggleEvent = $A.get("e.c:astroWidgetToggleEvent");
  toggleEvent.setParams({
    openStatus: "CLOSED"
  });
  toggleEvent.fire();
},
checkToReOpenWidget: function(cmp) {
  var isOpen = cmp.get("v.isOpen")==false?"CLOSED":"OPEN";
  const toggleEvent = $A.get("e.c:astroWidgetToggleEvent");
  toggleEvent.setParams({
    openStatus: isOpen
  });
  toggleEvent.fire();
},
behavioralPerformanceCheck: function(cmp, newPosX, newPosY) {
  // keep widget coords in window
  const [posX, posY] = this.keepAstroInWindow(cmp, newPosX, newPosY);

  // set coords values on cookie
  this.saveWidgetLocationPoints(posX, posY);
  // update screen quarter positioning
  this.setPositionQuarter(cmp, posX, posY);
  // calculate widget height after repositioning
  this.calculateWidgetHeight(cmp, posY);
  // set cmp attributes
  cmp.set("v.posX", posX);
  cmp.set("v.posY", posY);
},
setIsConsoleNavigationAttribute: function(cmp) {
  const posY = parseInt(cmp.get("v.posY"));
  const workspaceAPI = cmp.find("workspace");
  if (workspaceAPI) {
    workspaceAPI
      .isConsoleNavigation()
      .then(
        $A.getCallback(function(response) {
          if (response) {
            if (!cmp.get("v.isPositioned")) {
              const consoleBottomBannerHeight = 40;
              cmp.set("v.posY", posY + consoleBottomBannerHeight);
            }
            cmp.set("v.isConsoleNavigation", true);
          }
        })
      )
      .catch(function(e) {
        console.error(e);
      });
  }
}
});