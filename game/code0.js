gdjs.AttemptAsteroidalsCode = {};
gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2_1final = [];

gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2_1final = [];

gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2_1final = [];

gdjs.AttemptAsteroidalsCode.GDPlayerObjects1_1final = [];

gdjs.AttemptAsteroidalsCode.GDPlayerObjects2_1final = [];

gdjs.AttemptAsteroidalsCode.forEachIndex2 = 0;

gdjs.AttemptAsteroidalsCode.forEachIndex3 = 0;

gdjs.AttemptAsteroidalsCode.forEachObjects2 = [];

gdjs.AttemptAsteroidalsCode.forEachObjects3 = [];

gdjs.AttemptAsteroidalsCode.forEachTemporary2 = null;

gdjs.AttemptAsteroidalsCode.forEachTemporary3 = null;

gdjs.AttemptAsteroidalsCode.forEachTotalCount2 = 0;

gdjs.AttemptAsteroidalsCode.forEachTotalCount3 = 0;

gdjs.AttemptAsteroidalsCode.GDPlayerObjects1= [];
gdjs.AttemptAsteroidalsCode.GDPlayerObjects2= [];
gdjs.AttemptAsteroidalsCode.GDPlayerObjects3= [];
gdjs.AttemptAsteroidalsCode.GDBulletObjects1= [];
gdjs.AttemptAsteroidalsCode.GDBulletObjects2= [];
gdjs.AttemptAsteroidalsCode.GDBulletObjects3= [];
gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects1= [];
gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2= [];
gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3= [];
gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects1= [];
gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2= [];
gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3= [];
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects1= [];
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2= [];
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3= [];
gdjs.AttemptAsteroidalsCode.GDGameOverObjects1= [];
gdjs.AttemptAsteroidalsCode.GDGameOverObjects2= [];
gdjs.AttemptAsteroidalsCode.GDGameOverObjects3= [];
gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects1= [];
gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects2= [];
gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects3= [];


gdjs.AttemptAsteroidalsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AsteroidBig"), gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects1);
gdjs.copyArray(runtimeScene.getObjects("AsteroidMedium"), gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects1);
gdjs.copyArray(runtimeScene.getObjects("AsteroidSmall"), gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playerlives"), gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, 0, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 0, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects1.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects1[i].getBehavior("Resizable").setWidth(33 * (( gdjs.AttemptAsteroidalsCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects1.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects1[i].setAngle(gdjs.random(360));
}
for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects1.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects1[i].setAngle(gdjs.random(360));
}
for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects1.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects1[i].setAngle(gdjs.random(360));
}
}}

}


};gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.AttemptAsteroidalsCode.GDBulletObjects2});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.AttemptAsteroidalsCode.GDBulletObjects2});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.AttemptAsteroidalsCode.GDPlayerObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidBigObjects3Objects = Hashtable.newFrom({"AsteroidBig": gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.AttemptAsteroidalsCode.GDPlayerObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidMediumObjects3Objects = Hashtable.newFrom({"AsteroidMedium": gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.AttemptAsteroidalsCode.GDPlayerObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidSmallObjects3Objects = Hashtable.newFrom({"AsteroidSmall": gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3});
gdjs.AttemptAsteroidalsCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8940284);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects2);
gdjs.AttemptAsteroidalsCode.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects2Objects, (( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[0].getPointX("BulletSpawn")), (( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[0].getPointY("BulletSpawn")), "");
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDBulletObjects2[i].rotateTowardAngle((( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[0].getAngle()), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDBulletObjects2[i].addPolarForce((( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[0].getAngle()), 350, 1);
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDBulletObjects2[i].setZOrder((( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[0].getZOrder()) - 2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Boss Shoot.aac", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects2);
gdjs.AttemptAsteroidalsCode.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getPointX("BulletSpawn")), (gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getPointY("Bulletspawn")), gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects2Objects, (gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getAngle()), 350, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDBulletObjects2[i].setZOrder((( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[0].getZOrder()) - 2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Boss Shoot.aac", false, 100, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("Physics2").applyPolarForce((gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getAngle()), 4.5, (gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getCenterXInScene()), (gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getCenterYInScene()));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Lose 3.aac", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("Physics2").applyTorque(-(0.5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("Physics2").applyTorque(0.5);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("Physics2").applyPolarForce((gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getAngle()), (-(4.5)), (gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getCenterXInScene()), (gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getCenterYInScene()));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Lose 3.aac", false, 30, 1.5);
}}

}


{



}


{

gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2.length = 0;

gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2.length = 0;

gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2.length = 0;

gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2_1final.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2_1final.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2_1final.length = 0;
gdjs.AttemptAsteroidalsCode.GDPlayerObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AsteroidBig"), gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDPlayerObjects3Objects, gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidBigObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3.length; j < jLen ; ++j) {
        if ( gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2_1final.indexOf(gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3[j]) === -1 )
            gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2_1final.push(gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.AttemptAsteroidalsCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2_1final.indexOf(gdjs.AttemptAsteroidalsCode.GDPlayerObjects3[j]) === -1 )
            gdjs.AttemptAsteroidalsCode.GDPlayerObjects2_1final.push(gdjs.AttemptAsteroidalsCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("AsteroidMedium"), gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDPlayerObjects3Objects, gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidMediumObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length; j < jLen ; ++j) {
        if ( gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2_1final.indexOf(gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[j]) === -1 )
            gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2_1final.push(gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.AttemptAsteroidalsCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2_1final.indexOf(gdjs.AttemptAsteroidalsCode.GDPlayerObjects3[j]) === -1 )
            gdjs.AttemptAsteroidalsCode.GDPlayerObjects2_1final.push(gdjs.AttemptAsteroidalsCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("AsteroidSmall"), gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDPlayerObjects3Objects, gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidSmallObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3.length; j < jLen ; ++j) {
        if ( gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2_1final.indexOf(gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3[j]) === -1 )
            gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2_1final.push(gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.AttemptAsteroidalsCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2_1final.indexOf(gdjs.AttemptAsteroidalsCode.GDPlayerObjects3[j]) === -1 )
            gdjs.AttemptAsteroidalsCode.GDPlayerObjects2_1final.push(gdjs.AttemptAsteroidalsCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2_1final, gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2);
gdjs.copyArray(gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2_1final, gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2);
gdjs.copyArray(gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2_1final, gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2);
gdjs.copyArray(gdjs.AttemptAsteroidalsCode.GDPlayerObjects2_1final, gdjs.AttemptAsteroidalsCode.GDPlayerObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.AttemptAsteroidalsCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Playerlives"), gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects2);
{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("Health").SetHealth((gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects2[i].getBehavior("Resizable").setWidth(33 * (( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.AttemptAsteroidalsCode.GDPlayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.AttemptAsteroidalsCode.GDPlayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects2);
for (var i = 0, k = 0, l = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[k] = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.AttemptAsteroidalsCode.GDPlayerObjects1_1final.indexOf(gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[j]) === -1 )
            gdjs.AttemptAsteroidalsCode.GDPlayerObjects1_1final.push(gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AttemptAsteroidalsCode.GDPlayerObjects2);
for (var i = 0, k = 0, l = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[k] = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.AttemptAsteroidalsCode.GDPlayerObjects1_1final.indexOf(gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[j]) === -1 )
            gdjs.AttemptAsteroidalsCode.GDPlayerObjects1_1final.push(gdjs.AttemptAsteroidalsCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.AttemptAsteroidalsCode.GDPlayerObjects1_1final, gdjs.AttemptAsteroidalsCode.GDPlayerObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.AttemptAsteroidalsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}}

}


};gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects3Objects = Hashtable.newFrom({"Bullet": gdjs.AttemptAsteroidalsCode.GDBulletObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidBigObjects3Objects = Hashtable.newFrom({"AsteroidBig": gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidMediumObjects3Objects = Hashtable.newFrom({"AsteroidMedium": gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidMediumObjects3Objects = Hashtable.newFrom({"AsteroidMedium": gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3});
gdjs.AttemptAsteroidalsCode.eventsList2 = function(runtimeScene) {

};gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects3Objects = Hashtable.newFrom({"Bullet": gdjs.AttemptAsteroidalsCode.GDBulletObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidMediumObjects3Objects = Hashtable.newFrom({"AsteroidMedium": gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidSmallObjects3Objects = Hashtable.newFrom({"AsteroidSmall": gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidSmallObjects3Objects = Hashtable.newFrom({"AsteroidSmall": gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3});
gdjs.AttemptAsteroidalsCode.eventsList3 = function(runtimeScene) {

};gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.AttemptAsteroidalsCode.GDBulletObjects2});
gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidSmallObjects2Objects = Hashtable.newFrom({"AsteroidSmall": gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2});
gdjs.AttemptAsteroidalsCode.eventsList4 = function(runtimeScene) {

};gdjs.AttemptAsteroidalsCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("AsteroidBig"), gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2);

for (gdjs.AttemptAsteroidalsCode.forEachIndex3 = 0;gdjs.AttemptAsteroidalsCode.forEachIndex3 < gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2.length;++gdjs.AttemptAsteroidalsCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.AttemptAsteroidalsCode.GDBulletObjects3);
gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length = 0;

gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3.length = 0;


gdjs.AttemptAsteroidalsCode.forEachTemporary3 = gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2[gdjs.AttemptAsteroidalsCode.forEachIndex3];
gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3.push(gdjs.AttemptAsteroidalsCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects3Objects, gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidBigObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidMediumObjects3Objects, (( gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3[0].getPointX("")), (( gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidMediumObjects3Objects, (( gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3[0].getPointX("")), (( gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[i].rotateTowardAngle(gdjs.randomFloatInRange(0, 360), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[i].addPolarForce((gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[i].getAngle()), 3, 1);
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDBulletObjects3.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDBulletObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion 1.aac", false, 100, 1);
}}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("AsteroidMedium"), gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2);

for (gdjs.AttemptAsteroidalsCode.forEachIndex3 = 0;gdjs.AttemptAsteroidalsCode.forEachIndex3 < gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2.length;++gdjs.AttemptAsteroidalsCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.AttemptAsteroidalsCode.GDBulletObjects3);
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3.length = 0;

gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length = 0;


gdjs.AttemptAsteroidalsCode.forEachTemporary3 = gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2[gdjs.AttemptAsteroidalsCode.forEachIndex3];
gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.push(gdjs.AttemptAsteroidalsCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects3Objects, gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidMediumObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidSmallObjects3Objects, (( gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[0].getPointX("")), (( gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidSmallObjects3Objects, (( gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[0].getPointX("")), (( gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3[i].rotateTowardAngle(gdjs.randomFloatInRange(0, 360), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3[i].addPolarForce((( gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length === 0 ) ? 0 :gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[0].getAngle()), 3, 1);
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDBulletObjects3.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDBulletObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion 5.aac", false, 100, 1);
}}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("AsteroidSmall"), gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects1);

for (gdjs.AttemptAsteroidalsCode.forEachIndex2 = 0;gdjs.AttemptAsteroidalsCode.forEachIndex2 < gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects1.length;++gdjs.AttemptAsteroidalsCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.AttemptAsteroidalsCode.GDBulletObjects2);
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2.length = 0;


gdjs.AttemptAsteroidalsCode.forEachTemporary2 = gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects1[gdjs.AttemptAsteroidalsCode.forEachIndex2];
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2.push(gdjs.AttemptAsteroidalsCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDBulletObjects2Objects, gdjs.AttemptAsteroidalsCode.mapOfGDgdjs_9546AttemptAsteroidalsCode_9546GDAsteroidSmallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.AttemptAsteroidalsCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.AttemptAsteroidalsCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "1up 3.aac", false, 100, 1);
}}
}

}


};gdjs.AttemptAsteroidalsCode.eventsList6 = function(runtimeScene) {

};gdjs.AttemptAsteroidalsCode.eventsList7 = function(runtimeScene) {

{


gdjs.AttemptAsteroidalsCode.eventsList0(runtimeScene);
}


{


gdjs.AttemptAsteroidalsCode.eventsList1(runtimeScene);
}


{


gdjs.AttemptAsteroidalsCode.eventsList5(runtimeScene);
}


{


gdjs.AttemptAsteroidalsCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.AttemptAsteroidalsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AttemptAsteroidalsCode.GDPlayerObjects1.length = 0;
gdjs.AttemptAsteroidalsCode.GDPlayerObjects2.length = 0;
gdjs.AttemptAsteroidalsCode.GDPlayerObjects3.length = 0;
gdjs.AttemptAsteroidalsCode.GDBulletObjects1.length = 0;
gdjs.AttemptAsteroidalsCode.GDBulletObjects2.length = 0;
gdjs.AttemptAsteroidalsCode.GDBulletObjects3.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects1.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects2.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidBigObjects3.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects1.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects2.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidMediumObjects3.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects1.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects2.length = 0;
gdjs.AttemptAsteroidalsCode.GDAsteroidSmallObjects3.length = 0;
gdjs.AttemptAsteroidalsCode.GDGameOverObjects1.length = 0;
gdjs.AttemptAsteroidalsCode.GDGameOverObjects2.length = 0;
gdjs.AttemptAsteroidalsCode.GDGameOverObjects3.length = 0;
gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects1.length = 0;
gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects2.length = 0;
gdjs.AttemptAsteroidalsCode.GDPlayerlivesObjects3.length = 0;

gdjs.AttemptAsteroidalsCode.eventsList7(runtimeScene);

return;

}

gdjs['AttemptAsteroidalsCode'] = gdjs.AttemptAsteroidalsCode;
