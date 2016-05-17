
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageBox',
    'jquery.sap.global'
],function(Controller,JSONModel,MessageBox,jQuery){
    var LoginController = Controller.extend("sap.m.sample.login.controller.Login",{
        onInit : function () {

            var JsonModel = new JSONModel({
                username : "",
                password : ""
            });
            this.getView().setModel(JsonModel);

            //初始化验证
            sap.ui.getCore().attachValidationError(function(evt){
                var control = evt.getParameter('element');
                if(control && control.setValueState){
                    control.setValueState("Error");
                }
            });
            sap.ui.getCore().attachValidationSuccess(function(evt){
                var control = evt.getParameter('element');
                if(control && control.setValueState){
                    control.setValueState("None");
                }
            });
        },
        loginHandler : function (evt) {
            var view = this.getView();
            var inputs = [
                view.byId("username"),
                view.byId("password")
            ];

            jQuery.each(inputs,function(i,input){
                if(!input.getValue()){
                    input.setValueState("Error");
                }
            });

            var canContinue = true;
            jQuery.each(inputs,function(i,input){
                if("Error" === input.getValueState()){
                    canContinue = false;
                    return false;
                }
            });

            if(canContinue){
                MessageBox.alert('success');
            }else{
                MessageBox.alert('Complete your input first.');
            }
        }
    });

    return LoginController;

});