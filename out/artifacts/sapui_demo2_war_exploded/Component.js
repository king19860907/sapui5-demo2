/**
 * Created by jun_ma on 2016/5/4.
 */
sap.ui.define(['sap/ui/core/UIComponent'],
    function(UIComponent) {
        "use strict";

        var Component = UIComponent.extend("sap.m.sample.Component", {

            metadata : {
                rootView : "sap.m.sample.view.Index",
                dependencies : {
                    libs : [
                        "sap.m"
                    ]
                },
                config : {
                    sample : {
                        stretch : true,
                        files : [
                            "Page.view.xml",
                            "Page.controller.js",
                            "data.json"
                        ]
                    }
                }
            }
        });

        return Component;

    });
