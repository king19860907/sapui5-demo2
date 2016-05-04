/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/InstanceManager","jquery.sap.history"],function(C,I,q){"use strict";return C.extend("sap.ui.demokit.icex.view.App",{getDefaultPage:function(){return"Master";},onInit:function(){var h=function(n){if(n===q.sap.history.NavType.Back){this.navBack(this.getDefaultPage());}else{this.navTo(this.getDefaultPage(),null,false);}};var a=function(p,n){if(!p||!p.id){q.sap.log.error("invalid parameter: "+p);}else{if(n===q.sap.history.NavType.Back){this.navBack(p.id);}else{this.navTo(p.id,p.data,false);}}};q.sap.history({routes:[{path:"page",handler:q.proxy(a,this)}],defaultHandler:q.proxy(h,this)});var b=this.getOwnerComponent().getEventBus();b.subscribe("nav","to",this.navHandler,this);b.subscribe("nav","back",this.navHandler,this);b.subscribe("nav","virtual",this.navHandler,this);},navHandler:function(c,e,d){if(e==="to"){this.navTo(d.id,d.data,true);}else if(e==="back"){q.sap.history.back();}else if(e==="virtual"){q.sap.history.addVirtualHistory();}else{q.sap.log.error("'nav' event cannot be processed. There's no handler registered for event with id: "+e);}},navTo:function(i,d,w){var p=null;if(i===undefined){q.sap.log.error("navTo failed due to missing id");}else{var m=(i!=="Detail");var a=this.getView().app;if(a.getPage(i,m)===null){this.getOwnerComponent().runAsOwner(function(){p=sap.ui.view({id:i,viewName:"sap.ui.demokit.icex.view."+i,type:"XML"});});if(m){a.addMasterPage(p);}else{a.addDetailPage(p);}q.sap.log.info("app controller > loaded page: "+i);}a.to(i,"slide",d);if((w===undefined||w)&&(sap.ui.Device.system.phone||m)){q.sap.history.addHistory("page",{id:i},false);}q.sap.log.info("navTo - to page: "+i+" ["+w+"]");}},navBack:function(i){if(!i){q.sap.log.error("navBack - parameters id must be given");}else{if(I.hasOpenPopover()){I.closeAllPopovers();}if(I.hasOpenDialog()){I.closeAllDialogs();q.sap.log.info("navBack - closed dialog(s)");}var a=this.getView().app;var c=(a.getCurrentPage())?a.getCurrentPage().getId():null;if(c!==i){a.backToPage(i);q.sap.log.info("navBack - back to page: "+i);}}}});});