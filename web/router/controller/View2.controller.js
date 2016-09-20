/**
 * Created by majun on 16/8/17.
 */

sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/routing/History"
],function(Controller,History){
    "use strict";
    var controller = Controller.extend("sap.m.sample.router.controller.View2",{
        onInit:function(){
            var url =  "#"+this.getOwnerComponent().getRouter().getURL("page1");
            this.byId("link").setHref(url);
        },
        onToPage1:function () {
            this.getOwnerComponent().getRouter().navTo("page1");
        },
        onBack:function () {
            var sPreviousHash = History.getInstance().getPreviousHash();
            //The history contains a previous entry
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                // There is no history!
                // replace the current hash with page 1 (will not add an history entry)
                this.getOwnerComponent().getRouter().navTo("page1", null, true);
            }
        }
    });
    return controller;
});