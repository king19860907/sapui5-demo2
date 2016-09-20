/**
 * Created by jun_ma on 2016/5/5.
 */

sap.ui.define(['sap/ui/core/UIComponent'],function(UIComponent){
    "use strict"

    var Component = UIComponent.extend("sap.m.sample.router.Component",{
        metadata :{
            rootView : "sap.m.sample.router.view.Router",
            routing:{
                config:{
                  routerClass:"sap.m.routing.Router",
                  viewPath:"sap.m.sample.router.view",
                  controlId:"rootControl",
                  controlAggregation:"pages",
                  viewType:"XML"
                },
                routes:[
                    {
                        name:"page1",
                        //如果为控,则默认为开始页
                        pattern:"",
                        target:"page1"
                    },
                    {
                        name:"page2",
                        pattern:"Page2",
                        target:"page2"
                    },
                ],
                targets:{
                    page1:{
                      viewName:"View1",
                        viewLevel:0
                    },
                    page2:{
                        viewName:"View2",
                        viewLevel:1
                    },
                },

            },
        },
        init:function () {
            UIComponent.prototype.init.apply(this,arguments);
            this.getRouter().initialize();
        }
    });

    Component.prototype.createContent = function () {
        this._rootView = sap.ui.xmlview({ viewName : "sap.m.sample.router.view.Router"});
        return this._rootView;
    };

    return Component;

});