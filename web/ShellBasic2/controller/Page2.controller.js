sap.ui.define([
    'jquery.sap.global',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(jQuery, MessageToast, Fragment, Controller, JSONModel) {
    "use strict";

    var ControllerController = Controller.extend("sap.m.sample.shellBasic2.controller.Page2", {
        onInit: function() {
        },

        onPress:function (oEvent) {
            alert('aaa');
            this.getOwnerComponent().getRouter().navTo("page3");

        },

    });

    return ControllerController;

});
