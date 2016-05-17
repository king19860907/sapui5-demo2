/**
 * Created by jun_ma on 2016/5/5.
 */

sap.ui.define(['sap/ui/core/UIComponent'],function(UIComponent){
    "use strict"

    var Component = UIComponent.extend("sap.m.sample.login.Component",{
        metadata :{
            rootView : "sap.m.sample.login.view.Login"
        }
    });

    return Component;

});