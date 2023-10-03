gdjs.atelektazisahneCode = {};
gdjs.atelektazisahneCode.GDbaslikObjects1= [];
gdjs.atelektazisahneCode.GDbaslikObjects2= [];
gdjs.atelektazisahneCode.GDbelirObjects1= [];
gdjs.atelektazisahneCode.GDbelirObjects2= [];
gdjs.atelektazisahneCode.GDbelir2Objects1= [];
gdjs.atelektazisahneCode.GDbelir2Objects2= [];
gdjs.atelektazisahneCode.GDgostergeObjects1= [];
gdjs.atelektazisahneCode.GDgostergeObjects2= [];
gdjs.atelektazisahneCode.GDgorselObjects1= [];
gdjs.atelektazisahneCode.GDgorselObjects2= [];


gdjs.atelektazisahneCode.mapOfGDgdjs_9546atelektazisahneCode_9546GDbelirObjects1Objects = Hashtable.newFrom({"belir": gdjs.atelektazisahneCode.GDbelirObjects1});
gdjs.atelektazisahneCode.mapOfGDgdjs_9546atelektazisahneCode_9546GDbelir2Objects1Objects = Hashtable.newFrom({"belir2": gdjs.atelektazisahneCode.GDbelir2Objects1});
gdjs.atelektazisahneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("belir"), gdjs.atelektazisahneCode.GDbelirObjects1);
{for(var i = 0, len = gdjs.atelektazisahneCode.GDbelirObjects1.length ;i < len;++i) {
    gdjs.atelektazisahneCode.GDbelirObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("belir2"), gdjs.atelektazisahneCode.GDbelir2Objects1);
{for(var i = 0, len = gdjs.atelektazisahneCode.GDbelir2Objects1.length ;i < len;++i) {
    gdjs.atelektazisahneCode.GDbelir2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gosterge"), gdjs.atelektazisahneCode.GDgostergeObjects1);
{for(var i = 0, len = gdjs.atelektazisahneCode.GDgostergeObjects1.length ;i < len;++i) {
    gdjs.atelektazisahneCode.GDgostergeObjects1[i].setString("Cevap");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("belir"), gdjs.atelektazisahneCode.GDbelirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.atelektazisahneCode.mapOfGDgdjs_9546atelektazisahneCode_9546GDbelirObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gosterge"), gdjs.atelektazisahneCode.GDgostergeObjects1);
{for(var i = 0, len = gdjs.atelektazisahneCode.GDgostergeObjects1.length ;i < len;++i) {
    gdjs.atelektazisahneCode.GDgostergeObjects1[i].setString("fraktür alanı");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("belir2"), gdjs.atelektazisahneCode.GDbelir2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.atelektazisahneCode.mapOfGDgdjs_9546atelektazisahneCode_9546GDbelir2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gosterge"), gdjs.atelektazisahneCode.GDgostergeObjects1);
{for(var i = 0, len = gdjs.atelektazisahneCode.GDgostergeObjects1.length ;i < len;++i) {
    gdjs.atelektazisahneCode.GDgostergeObjects1[i].setString("klavikula");
}
}}

}


};

gdjs.atelektazisahneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.atelektazisahneCode.GDbaslikObjects1.length = 0;
gdjs.atelektazisahneCode.GDbaslikObjects2.length = 0;
gdjs.atelektazisahneCode.GDbelirObjects1.length = 0;
gdjs.atelektazisahneCode.GDbelirObjects2.length = 0;
gdjs.atelektazisahneCode.GDbelir2Objects1.length = 0;
gdjs.atelektazisahneCode.GDbelir2Objects2.length = 0;
gdjs.atelektazisahneCode.GDgostergeObjects1.length = 0;
gdjs.atelektazisahneCode.GDgostergeObjects2.length = 0;
gdjs.atelektazisahneCode.GDgorselObjects1.length = 0;
gdjs.atelektazisahneCode.GDgorselObjects2.length = 0;

gdjs.atelektazisahneCode.eventsList0(runtimeScene);

return;

}

gdjs['atelektazisahneCode'] = gdjs.atelektazisahneCode;
