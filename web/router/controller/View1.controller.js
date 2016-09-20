/**
 * Created by majun on 16/8/17.
 */

sap.ui.define([
    'sap/ui/core/mvc/Controller'
],function(Controller){
    "use strict";
    var controller = Controller.extend("sap.m.sample.router.controller.View1",{
        onInit:function(){
            var url =  "#"+this.getOwnerComponent().getRouter().getURL("page2");
            this.byId("link").setHref(url);
        },
        onToPage2:function () {
            this.getOwnerComponent().getRouter().navTo("page2");
        }
    });
    return controller;
});