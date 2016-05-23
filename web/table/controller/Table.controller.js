/**
 * Created by jun_ma on 2016/5/5.
 */

sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../Formatter'
],function(jQuery,Controller,JSONModel,Formatter){
    "use strict";
    var TableController = Controller.extend("sap.m.sample.table.controller.Table",{
        onInit: function () {
            //alert('bbb');
            var oModel = new JSONModel("/table/data/table.json");
            this.getView().setModel(oModel);
        },
        updateFinishedHandler : function (evt) {
            var oTable = this.byId("idProductsTable");
            var growingInfo = oTable.getGrowingInfo();
            //alert(JSON.stringify(growingInfo));
            var oBinding = oTable.getBinding("items");
            //alert(oBinding.getLength());
            //var oItems = oTable.getItems(true);
            //alert(oItems);
        }

    });
    return TableController;
});