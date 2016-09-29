sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/m/routing/Router',
    'sap/ui/model/resource/ResourceModel',
    'sap/ui/model/odata/ODataModel',
    'sap/ui/model/json/JSONModel'
], function (UIComponent,
             Router,
             ResourceModel,
             ODataModel,
             JSONModel) {

    return UIComponent.extend("sap.m.sample.splitApp.Component", {

        metadata:{
            includes:["css/style.css"],
            routing:{
                config:{
                    routerClass:Router,
                    viewType:"XML",
                    viewPath:"sap.m.sample.splitApp.view",
                    controlId:"splitApp",
                    transition:"slide",
                    bypassed:{
                        target:["home,","notFound"]
                    }
                },
                routes:[
                    {
                        pattern:"",
                        name:"home",
                        target:"home"
                    },
                ],
                targets:{
                    home:{
                        viewName:"Home",
                        viewLevel:1,
                        controlAggregation:"masterPages"
                    },
                },
            },
        },
        
        init:function () {
            UIComponent.prototype.init.apply(this, arguments);

            this._router = this.getRouter();

            this._router.initialize();
        },

        createContent:function () {

            return sap.ui.view({
                viewName:"sap.m.sample.splitApp.view.App",
                type:"XML"
            });

        },

    });


});