
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/Popover',
    'jquery.sap.global'
],function(Controller,Popover,jQuery){
    var HeaderController = Controller.extend("sap.m.sample.header.controller.Header",{
        onInit : function () {
            var isLogin = true;
            if(isLogin){
                //var toolHeader = sap.ui.xmlfragment("sap.m.sample.header.view.ToolHeader", this);
                //this.getView().addDependent(toolHeader);
                //alert(toolHeader);
                var button = this.getView().byId("loginInfo");
                button.setText("aaaa");
            }
        },
        handleUserNamePress: function (oEvent) {
            /* var popover = new Popover({
                showHeader: false,
                placement: sap.m.PlacementType.Bottom,
                content:[
                    new Button({
                        text: 'Feedback',
                        type: sap.m.ButtonType.Transparent
                    }),
                    new Button({
                        text: 'Help',
                        type: sap.m.ButtonType.Transparent
                    }),
                    new Button({
                        text: 'Logout',
                        type: sap.m.ButtonType.Transparent,
                        press: 'logoutHandler'
                    })
                ]
            }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

            popover.openBy(event.getSource());*/
            // create popover
            if (! this._oPopover) {
                this._oPopover = sap.ui.xmlfragment("sap.m.sample.header.view.Popover", this);
                this.getView().addDependent(this._oPopover);
            }

            // delay because addDependent will do a async rerendering and the actionSheet will immediately close without it.
            var oButton = oEvent.getSource();
            jQuery.sap.delayedCall(0, this, function () {
                this._oPopover.openBy(oButton);
            });
        },
        logoutHandler:function (evt) {
            alert('logout');
        }
    });

    return HeaderController;

});