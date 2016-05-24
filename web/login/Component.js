/**
 * Created by jun_ma on 2016/5/5.
 */

sap.ui.define(['sap/ui/core/UIComponent'],function(UIComponent){
    "use strict"

    var Component = UIComponent.extend("sap.m.sample.login.Component",{
        metadata :{
            rootView : "sap.m.sample.login.view.Login",
            publicMethods : [
                "getLoginInfo"
            ]
        },
        getLoginInfo : function () {
            return this._rootView.getContent()[0];
        }
    });

    Component.prototype.createContent = function () {
        this._rootView = sap.ui.xmlview({ viewName : "sap.m.sample.login.view.Login"});
        return this._rootView;
    };

    return Component;

});