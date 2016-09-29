sap.ui.define([
    'jquery.sap.global',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(jQuery, MessageToast, Fragment, Controller, JSONModel) {
    "use strict";

    var ControllerController = Controller.extend("sap.m.sample.shellBasic2.controller.Left", {
        onInit: function() {
        },

        select:function (oEvent) {
            this._router = this.getOwnerComponent().getRouter();
            var item = oEvent.getParameter('item');
            var key = item.getKey();
            if(key == 'page1'){
                this._router.navTo("page1");
            }else if(key == 'page2'){
                this._router.navTo("page2");
            }else{
                this._router.navTo("page2");
            }
        },

    });

    return ControllerController;

});
