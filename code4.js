gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.idToCallbackMap = new Map();
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects1= [];
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects2= [];
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1= [];
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2= [];
gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects1= [];
gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects2= [];
gdjs.GAME_32OVERCode.GDNewTiledSpriteObjects1= [];
gdjs.GAME_32OVERCode.GDNewTiledSpriteObjects2= [];
gdjs.GAME_32OVERCode.GDSummer_9595BackgroundObjects1= [];
gdjs.GAME_32OVERCode.GDSummer_9595BackgroundObjects2= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects1= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects2= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects1= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects2= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects1= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects2= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects1= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects2= [];
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects1= [];
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects2= [];
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects1= [];
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects2= [];
gdjs.GAME_32OVERCode.GDtxt_9595suvidaObjects1= [];
gdjs.GAME_32OVERCode.GDtxt_9595suvidaObjects2= [];
gdjs.GAME_32OVERCode.GDtitulo_9595subvidaObjects1= [];
gdjs.GAME_32OVERCode.GDtitulo_9595subvidaObjects2= [];
gdjs.GAME_32OVERCode.GD_95951Objects1= [];
gdjs.GAME_32OVERCode.GD_95951Objects2= [];
gdjs.GAME_32OVERCode.GDShadedLightJoystickObjects1= [];
gdjs.GAME_32OVERCode.GDShadedLightJoystickObjects2= [];
gdjs.GAME_32OVERCode.GDA_9595ButtonObjects1= [];
gdjs.GAME_32OVERCode.GDA_9595ButtonObjects2= [];
gdjs.GAME_32OVERCode.GDB_9595ButtonObjects1= [];
gdjs.GAME_32OVERCode.GDB_9595ButtonObjects2= [];
gdjs.GAME_32OVERCode.GDFireballObjects1= [];
gdjs.GAME_32OVERCode.GDFireballObjects2= [];


gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton2"), gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects1[k] = gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME OVER", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtxt_9595suvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtxt_9595suvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtitulo_9595subvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtitulo_9595subvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GD_95951Objects1.length = 0;
gdjs.GAME_32OVERCode.GD_95951Objects2.length = 0;
gdjs.GAME_32OVERCode.GDShadedLightJoystickObjects1.length = 0;
gdjs.GAME_32OVERCode.GDShadedLightJoystickObjects2.length = 0;
gdjs.GAME_32OVERCode.GDA_9595ButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDA_9595ButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDB_9595ButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDB_9595ButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList0(runtimeScene);
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButton2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtxt_9595suvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtxt_9595suvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtitulo_9595subvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtitulo_9595subvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GD_95951Objects1.length = 0;
gdjs.GAME_32OVERCode.GD_95951Objects2.length = 0;
gdjs.GAME_32OVERCode.GDShadedLightJoystickObjects1.length = 0;
gdjs.GAME_32OVERCode.GDShadedLightJoystickObjects2.length = 0;
gdjs.GAME_32OVERCode.GDA_9595ButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDA_9595ButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDB_9595ButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDB_9595ButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
