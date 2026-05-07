gdjs.JUEGO_32COMPLETADOCode = {};
gdjs.JUEGO_32COMPLETADOCode.localVariables = [];
gdjs.JUEGO_32COMPLETADOCode.idToCallbackMap = new Map();
gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDNewTiledSpriteObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDNewTiledSpriteObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDSummer_9595BackgroundObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDSummer_9595BackgroundObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595DERECHAObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595DERECHAObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595IZQUIERDAObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595IZQUIERDAObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ARRIBAObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ARRIBAObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ABAJOObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ABAJOObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDAREADERIESGOObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDAREADERIESGOObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDGold_9595CoinObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDGold_9595CoinObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDtxt_9595suvidaObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDtxt_9595suvidaObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GDtitulo_9595subvidaObjects1= [];
gdjs.JUEGO_32COMPLETADOCode.GDtitulo_9595subvidaObjects2= [];
gdjs.JUEGO_32COMPLETADOCode.GD_95951Objects1= [];
gdjs.JUEGO_32COMPLETADOCode.GD_95951Objects2= [];


gdjs.JUEGO_32COMPLETADOCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("JUEGO_COMPLETADO"), gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects1.length;i<l;++i) {
    if ( gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects1[k] = gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects1[i];
        ++k;
    }
}
gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "JUEGO COMPLETADO", false);
}
}

}


};

gdjs.JUEGO_32COMPLETADOCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595IZQUIERDAObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595IZQUIERDAObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ARRIBAObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ARRIBAObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ABAJOObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ABAJOObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDAREADERIESGOObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDAREADERIESGOObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDGold_9595CoinObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDGold_9595CoinObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDtxt_9595suvidaObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDtxt_9595suvidaObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDtitulo_9595subvidaObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDtitulo_9595subvidaObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GD_95951Objects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GD_95951Objects2.length = 0;

gdjs.JUEGO_32COMPLETADOCode.eventsList0(runtimeScene);
gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDJUEGO_9595COMPLETADOObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595IZQUIERDAObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595IZQUIERDAObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ARRIBAObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ARRIBAObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ABAJOObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDTRIGGER_9595ABAJOObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDAREADERIESGOObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDAREADERIESGOObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDGold_9595CoinObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDGold_9595CoinObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDtxt_9595suvidaObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDtxt_9595suvidaObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDtitulo_9595subvidaObjects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GDtitulo_9595subvidaObjects2.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GD_95951Objects1.length = 0;
gdjs.JUEGO_32COMPLETADOCode.GD_95951Objects2.length = 0;


return;

}

gdjs['JUEGO_32COMPLETADOCode'] = gdjs.JUEGO_32COMPLETADOCode;
