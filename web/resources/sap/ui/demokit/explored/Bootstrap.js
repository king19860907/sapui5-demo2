/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";q("#busyIndicator").css({"margin-top":"8em","text-align":"center",color:"#555555"});var B={run:function(){sap.ui.demokit._loadAllLibInfo("","_getDocuIndex",function(l,d){B._processAndStoreIndices(l,d);B._loadUi();});},_processAndStoreIndices:function(l,d){var c=["Action","Application","Container","Display","Chart","Mini Chart","Layout","List","Popup","Tile","User Input","Testing","Theming","Tutorial","Routing","Data Binding","Map"];var a=["namespace","since","category"];var f={namespace:{},since:{},category:{},formFactors:{"Independent":true,"Condensed":true,"Compact":true,"Cozy":true}};var F={"-":"Independent","S":"Condensed","SM":"Condensed, Compact","SL":"Condensed, Cozy","SML":"Condensed, Compact, Cozy","M":"Compact","ML":"Compact, Cozy","L":"Cozy"};sap.ui.demokit.explored.data={};sap.ui.demokit.explored.data.entityCount=0;sap.ui.demokit.explored.data.entities=[];sap.ui.demokit.explored.data.filter={};sap.ui.demokit.explored.data.samples={};q.each(d,function(i,D){if(!D.explored){return;}else if(!D.explored.samplesRef){q.sap.log.error("explored: cannot register lib '"+D.library+"'. missing 'explored.samplesRef'");return;}else if(Array.isArray(D.explored.samplesRef)&&D.explored.samplesRef.length!==D.explored.samplesRef.filter(function(I){return I.namespace&&I.ref;}).length){q.sap.log.error("explored: cannot register lib '"+D.library+"'. missing 'explored.samplesRef.namespace' or 'explored.samplesRef.ref' in one or more of the configured namespaces");return;}else if(!Array.isArray(D.explored.samplesRef)&&!D.explored.samplesRef.namespace){q.sap.log.error("explored: cannot register lib '"+D.library+"'. missing 'explored.samplesRef.namespace'");return;}else if(!Array.isArray(D.explored.samplesRef)&&!D.explored.samplesRef.ref){q.sap.log.error("explored: cannot register lib '"+D.library+"'. missing 'explored.samplesRef.ref'");return;}else if(!D.explored.entities){q.sap.log.error("explored: cannot register lib '"+D.library+"'. missing 'explored.entities'");return;}else{q.sap.log.info("explored: now reading lib '"+D.library+"'");}if(Array.isArray(D.explored.samplesRef)){D.explored.samplesRef.forEach(function(I){q.sap.registerModulePath(I.namespace,""+I.ref);});}else{q.sap.registerModulePath(D.explored.samplesRef.namespace,""+D.explored.samplesRef.ref);}q.each(D.explored.samples,function(i,s){if(!s.id){q.sap.log.error("explored: cannot register sample '?'. missing 'id'");}else if(!s.name){q.sap.log.error("explored: cannot register sample '"+s.id+"'. missing 'name'");}else{sap.ui.demokit.explored.data.samples[s.id]=s;}});q.each(D.explored.entities,function(j,e){if(!e.id){q.sap.log.error("explored: cannot register entity '?'. missing 'id'");return;}if(D.explored.entitiesDefaults){q.each(D.explored.entitiesDefaults,function(k,v){if(!e.hasOwnProperty(k)){e[k]=v;}});}var I=e.id.lastIndexOf(".");var n=(I!==-1)?e.id.substring(0,I):e.id;e.namespace=n;if(!e.name){q.sap.log.error("explored: cannot register entity '"+e.id+"'. missing 'name'");return;}if(c.indexOf(e.category)===-1){q.sap.log.error("explored: cannot register entity '"+e.id+"'. category '"+e.category+"' is not allowed");return;}if(!e.formFactors){q.sap.log.error("explored: cannot register entity '"+e.id+"'. missing 'formFactors'");return;}if(!F[e.formFactors]){q.sap.log.error("explored: cannot register entity '"+e.id+"'. formFactors '"+e.formFactors+"' is not allowed");return;}e.formFactors=F[e.formFactors];var A=false;q.each(a,function(i,p){if(!e[p]){q.sap.log.error("explored: cannot register entity '"+e.id+"'. missing '"+p+"'");A=true;return false;}});if(A){return;}q.each(a,function(i,p){f[p][e[p]]=true;});sap.ui.demokit.explored.data.entities.push(e);});});q.each(sap.ui.demokit.explored.data.entities,function(n,e){var i=0,s,p;e.searchTags=e.name+" "+e.name.replace(" ","")+" "+e.category;if(e.samples&&!(e.samples instanceof Array)){e.samples=[];q.sap.log.error("explored: cannot register samples for entity '"+e.id+"'. 'samples' is not an array");return;}if(!e.samples){e.samples=[];}if(e.samplesAsSteps){if(!(e.samplesAsSteps instanceof Array)){q.sap.log.error("explored: cannot register samples for entity '"+e.id+"'. 'samplesAsSteps' is not an array");return;}p=function(N){if(N.toString().length===1){return"0"+N;}return N;};for(;i<e.samplesAsSteps.length;i++){s={"id":e.id+"."+p(i+1),"name":e.name+" - Step "+(i+1)+" - "+e.samplesAsSteps[i]};if(i>0){s.previousSampleId=e.id+"."+p(i);}if(i<e.samplesAsSteps.length-1){s.nextSampleId=e.id+"."+p(i+2);}e.samples.push(s);sap.ui.demokit.explored.data.samples[s.id]=s;e.searchTags+=" "+s.name;}}else{var S=[],P;q.each(e.samples,function(j,I){var g=sap.ui.demokit.explored.data.samples[I];if(!g){q.sap.log.warning("explored: cannot register sample '"+I+"' for '"+e.id+"'. not found in the available docu indizes");}else{g.previousSampleId=(P?P.id:undefined);if(P){P.nextSampleId=g.id;}P=g;S.push(g);e.searchTags+=" "+g.name;}});e.samples=S;}e.sampleCount=e.samples.length;});sap.ui.demokit.explored.data.entityCount=sap.ui.demokit.explored.data.entities.length;q.each(f,function(s,e){sap.ui.demokit.explored.data.filter[s]=[];q.each(e,function(k,v){sap.ui.demokit.explored.data.filter[s].push({id:k});});});q.sap.require("sap.ui.core.util.LibraryInfo");var L=new sap.ui.core.util.LibraryInfo();var o={};var b=function(C){o[C.library]=C.componentInfo;};for(var i=0;i<l.length;i++){L._getLibraryInfo(l[i],b);}sap.ui.demokit.explored.data.libComponentInfos=o;},_loadUi:function(){var p=q.sap.getModulePath("sap.ui.demokit.explored");new sap.m.Shell("Shell",{title:"SAPUI5 Explored",showLogout:false,app:new sap.ui.core.ComponentContainer({name:'sap.ui.demokit.explored'}),homeIcon:{'phone':p+'/img/57_iPhone_Desktop_Launch.png','phone@2':p+'/img/114_iPhone-Retina_Web_Clip.png','tablet':p+'/img/72_iPad_Desktop_Launch.png','tablet@2':p+'/img/144_iPad_Retina_Web_Clip.png','favicon':p+'/img/favicon.ico','precomposed':false}}).placeAt('content');}};return B;},true);
