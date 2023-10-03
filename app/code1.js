gdjs.bolumlerCode = {};
gdjs.bolumlerCode.GDNewTextObjects1= [];
gdjs.bolumlerCode.GDNewTextObjects2= [];
gdjs.bolumlerCode.GDatelektaziObjects1= [];
gdjs.bolumlerCode.GDatelektaziObjects2= [];
gdjs.bolumlerCode.GDcorpulmonareObjects1= [];
gdjs.bolumlerCode.GDcorpulmonareObjects2= [];
gdjs.bolumlerCode.GDperikardiyalef_9595zyonObjects1= [];
gdjs.bolumlerCode.GDperikardiyalef_9595zyonObjects2= [];
gdjs.bolumlerCode.GDpnomotoraksObjects1= [];
gdjs.bolumlerCode.GDpnomotoraksObjects2= [];


gdjs.bolumlerCode.mapOfGDgdjs_9546bolumlerCode_9546GDatelektaziObjects1Objects = Hashtable.newFrom({"atelektazi": gdjs.bolumlerCode.GDatelektaziObjects1});
gdjs.bolumlerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("atelektazi"), gdjs.bolumlerCode.GDatelektaziObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.bolumlerCode.mapOfGDgdjs_9546bolumlerCode_9546GDatelektaziObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "atelektazisahne", false);
}}

}


};

gdjs.bolumlerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bolumlerCode.GDNewTextObjects1.length = 0;
gdjs.bolumlerCode.GDNewTextObjects2.length = 0;
gdjs.bolumlerCode.GDatelektaziObjects1.length = 0;
gdjs.bolumlerCode.GDatelektaziObjects2.length = 0;
gdjs.bolumlerCode.GDcorpulmonareObjects1.length = 0;
gdjs.bolumlerCode.GDcorpulmonareObjects2.length = 0;
gdjs.bolumlerCode.GDperikardiyalef_9595zyonObjects1.length = 0;
gdjs.bolumlerCode.GDperikardiyalef_9595zyonObjects2.length = 0;
gdjs.bolumlerCode.GDpnomotoraksObjects1.length = 0;
gdjs.bolumlerCode.GDpnomotoraksObjects2.length = 0;

gdjs.bolumlerCode.eventsList0(runtimeScene);

return;

}

gdjs['bolumlerCode'] = gdjs.bolumlerCode;
