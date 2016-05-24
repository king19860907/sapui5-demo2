
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
],function(Controller,JSONModel){
    var json = {
        tab1:"tab1.html"
    }
    var TabController = Controller.extend("sap.m.sample.tab.controller.IconTabBar",{
        onInit : function () {

        },
        selectHandler : function (evt) {
            //alert(evt.getParameter('item').getKey());
            //alert(evt.getParameter('item').getText());
            //alert(this._oTable);
            if(evt.getParameter('item').getKey()==='tab2' && (typeof (this._oTable) == 'undefined' || this._oTable == null)){
                this.getView().byId("idIconTabBarStretchContent").removeContent(0);
                this._loginInfo = null;

                var oModel = new JSONModel("/table/data/table.json");
                this.getView().setModel(oModel);
                var oComp = sap.ui.getCore().createComponent({
                    name : 'sap.m.sample.table'
                });
                oComp.setModel(this.getView().getModel());
                this._oTable = oComp.getTable();
                this.getView().byId("idIconTabBarStretchContent").insertContent(this._oTable,0);

                // update table
                this._oTable.setHeaderText(null);
                this._oTable.setShowSeparators("Inner");
            }
            if(evt.getParameter('item').getKey()==='tab1' && (typeof (this._loginInfo) == 'undefined' || this._loginInfo == null)){
                this.getView().byId("idIconTabBarStretchContent").removeContent(0);
                this._oTable = null;

                var oComp = sap.ui.getCore().createComponent({
                    name : 'sap.m.sample.login'
                });
                oComp.setModel(this.getView().getModel());
                this._loginInfo = oComp.getLoginInfo();
                this.getView().byId("idIconTabBarStretchContent").insertContent(this._loginInfo,0);
            }
        }
    });

    return TabController;

});