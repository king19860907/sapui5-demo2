/**
 * Created by jun_ma on 2016/5/5.
 */

sap.ui.define(function(){
    "use strict";

    var Formatter = {
        weightState : function (value) {
           try{
               value = parseFloat(value);
               if(value < 0){
                   return "None";
               } else if(value < 1000){
                   return "Success";
               } else if(value < 2000){
                   return "Warning";
               }else {
                   return "Error";
               }
           }catch (err){
               return "None";
           }
        }
    };
    return Formatter;
},true);