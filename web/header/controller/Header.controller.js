
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageBox',
    'jquery.sap.global'
],function(Controller,JSONModel,MessageBox,jQuery){
    var HeaderController = Controller.extend("sap.m.sample.header.controller.Header",{
        onInit : function () {

        }
    });

    return HeaderController;

});