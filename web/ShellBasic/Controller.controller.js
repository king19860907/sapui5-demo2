sap.ui.define([
		'jquery.sap.global',
		'sap/m/MessageToast',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/ui/unified/sample/ShellBasic/RatesController'
	], function(jQuery, MessageToast, Fragment, Controller, JSONModel,RatesController) {
	"use strict";

	var ControllerController = Controller.extend("sap.ui.unified.sample.ShellBasic.Controller", {
		onInit: function() {
			var oData = {logo: jQuery.sap.getModulePath("sap.ui.core", '/') + "mimes/logo/sap_50x26.png"};
			var oModel = new JSONModel();
			oModel.setData(oData);
			this.getView().setModel(oModel);
		},

		handlePressConfiguration: function(oEvent) {
			var oItem = oEvent.getSource();
			var oShell = this.getView().byId("myShell");
			var bState = oShell.getShowPane();
			oShell.setShowPane(!bState);
			oItem.setShowMarker(!bState);
			oItem.setSelected(!bState);
		},

		handleLogoffPress: function(oEvent) {
			MessageToast.show("Logoff Button Pressed");
		},

		handleUserItemPressed: function(oEvent) {
			MessageToast.show("User Button Pressed");
		},

		handleSearchItemSelect: function(oEvent) {
			MessageToast.show("Search Entry Selected: " + oEvent.getSource().getTitle());
		},

		handleShellOverlayClosed: function() {
			MessageToast.show("Overlay closed");
		},

		handleSearchPressed: function(oEvent) {
			var sQuery = oEvent.getParameter("query");
			if(sQuery == "") {
				return;
			}

			// create Overlay only once
			if (!this._overlay) {
				this._overlay = sap.ui.xmlfragment(
					"sap.ui.unified.sample.ShellBasic.ShellOverlay",
					this
				);
				this.getView().addDependent(this._overlay);
			}

			// mock data
			var aResultData = [];
			for(var i = 0; i < 10; i++) {
				aResultData.push({
									title:(i + 1) + ". " + sQuery,
									text:"Lorem ipsum sit dolem"
								});
			}
			var oData = {
							searchFieldContent: sQuery,
							resultData: aResultData
						};
			var oModel = new JSONModel();
			oModel.setData(oData);
			this._overlay.setModel(oModel);

			// set reference to shell and open overlay
			this._overlay.setShell(this.getView().byId("myShell"));
			this._overlay.open();
		},
		select:function (oEvent) {
			var item = oEvent.getParameter('item');
			var key = item.getKey();
			var page;
			if(key == 'page1'){
				page = this.getpage1();
			}else{
				page = this.getpage2();
			}
			var navCon = this.getView().byId("navCon");
			navCon.to(page,null);
		},
		clearContent:function () {
			this.getView().byId("p2").destroyContent();
			this.getView().byId("p3").destroyContent();
		},
		getpage2:function () {

			var controller = {
				testPress:function (event) {
					alert('bbb');
					alert(event);
				}
			};

			var content = sap.ui.xmlfragment(
				"sap.ui.unified.sample.ShellBasic.Rates",
				RatesController
			);
			var page = this.getView().byId("p3");
			this.clearContent();
			page.insertContent(content,0);
			return page;
		},
		getpage1:function () {
			var content = sap.ui.xmlfragment(
				"sap.ui.unified.sample.ShellBasic.ShellOverlay",
				this
			);
			var aResultData = [];
			for(var i = 0; i < 10; i++) {
				aResultData.push({
					title:(i + 1) + ". " + 'aaa',
					text:"Lorem ipsum sit dolem"
				});
			}
			var oData = {
				searchFieldContent: 'aaa',
				resultData: aResultData
			};
			var oModel = new JSONModel();
			oModel.setData(oData);
			var page = this.getView().byId("p2");
			page.setModel(oModel);
			this.clearContent();
			page.insertContent(content,0);
			return page;
		},
		testPress:function () {
			alert('aaa');
		}
	});

	return ControllerController;

});
