
sap.ui.define([
    'sap/ui/core/mvc/Controller'
],function(Controller){
    var json = {
        tab1:"tab1.html"
    }
    var TabController = Controller.extend("sap.m.sample.tab.controller.IconTabBar",{
        onInit : function () {

        },
        selectHandler : function (evt) {
            alert(evt.getParameter('item').getKey());
            //alert(evt.getParameter('item').getText());
        }
    });

    return TabController;

});