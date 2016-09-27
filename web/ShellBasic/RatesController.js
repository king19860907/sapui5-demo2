sap.ui.define([
		'jquery.sap.global',
		'sap/m/MessageToast',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, MessageToast, Fragment, Controller, JSONModel) {
	"use strict";

	var ControllerController =  {
		testPress:function (event) {
			alert('ccc');
			alert(event);
		}
	};

	return ControllerController;

});
