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

    return UIComponent.extend("sap.m.sample.shellBasic2.Component", {

        metadata:{
            includes:["css/style.css"],
            routing:{
                config:{
                    routerClass:Router,
                    viewType:"XML",
                    viewPath:"sap.m.sample.shellBasic2.view",
                    controlId:"myShell",
                    transition:"slide",
                    bypassed:{
                        target:["left","notFound"]
                    }
                },
                routes:[
                    {
                        pattern:"",
                        name:"left",
                        target:"left"
                    },
                    {
                        name:"right",
                        pattern:"right",
                        target:["left","right"],
                    },
                    {
                        name:"page1",
                        pattern:"page1",
                        target:["left","page1"]
                    },
                    {
                        name:"page2",
                        pattern:"Page2",
                        target:["left","page2"]
                    },
                    {
                        name:"page3",
                        pattern:"Page3",
                        target:["left","page3"]
                    },
                ],
                targets:{
                    left:{
                        viewName:"Left",
                        viewLevel:0,
                        controlAggregation:"paneContent"
                    },
                    right:{
                        viewName:"Right",
                        viewLevel:1,
                        controlAggregation:"content"
                    },
                    page1:{
                        viewName:"Page1",
                        viewLevel:1,
                        controlId:"navCon",
                        controlAggregation:"pages"
                    },
                    page2:{
                        viewName:"Page2",
                        viewLevel:1,
                        controlId:"navCon",
                        controlAggregation:"pages"
                    },
                    page3:{
                        viewName:"Page3",
                        viewLevel:2,
                        controlId:"navCon",
                        controlAggregation:"pages"
                    },
                },
            },
            
        },
        
        init:function () {
            UIComponent.prototype.init.apply(this, arguments);

            this._router = this.getRouter();

            //this._router.getTargets().display("left");

            this._router.initialize();
        },

        createContent:function () {

            return sap.ui.view({
                viewName:"sap.m.sample.shellBasic2.view.App",
                type:"XML"
            });

        },

    });


});