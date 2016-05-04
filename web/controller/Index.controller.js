/**
 * Created by jun_ma on 2016/5/4.
 */
sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, JSONModel) {
    "use strict";

    var PageController = Controller.extend("sap.m.sample.controller.Index", {

        onInit : function (evt) {
            // set mock model
            var sPath = jQuery.sap.getModulePath("sap.m.sample", "/data/index.json");
            var oModel = new JSONModel(sPath);
            this.getView().setModel(oModel);
        },

        handleEditPress : function (evt) {
            var oTileContainer = this.getView().byId("container");
            var newValue = ! oTileContainer.getEditable();
            oTileContainer.setEditable(newValue);
            evt.getSource().setText(newValue ? "Done" : "Edit");
        },

        handleBusyPress : function (evt) {
            var oTileContainer = this.getView().byId("container");
            var newValue = ! oTileContainer.getBusy();
            oTileContainer.setBusy(newValue);
            evt.getSource().setText(newValue ? "Done" : "Busy state");
        },

        handleTileDelete : function (evt) {
            var tile = evt.getParameter("tile");
            evt.getSource().removeTile(tile);
        },
        tilePress : function (evt) {
            alert('aaa');
            var sRef = evt.getSource().data("ref");
            alert(sRef);
        }
    });

    return PageController;

});
