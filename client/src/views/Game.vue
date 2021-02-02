<template>
   <!-- eslint-disable max-len -->
   <div class="view">
      <a-scene>
         <a-assets>
            <canvas id="texture-floor" width="1024" height="1024" crossorigin="anonymous"></canvas>
         </a-assets>
         <a-entity gltf-model="url(./models/world.glb)"></a-entity>
         <a-entity id="navmesh"
            nav-mesh
            visible="false"
            gltf-model="url(./models/world-navmesh.glb)"></a-entity>
         <a-sky color="#8ddfff"></a-sky>
         <a-entity id="cameraRig"
            movement-controls="controls: keyboard, touch; constrainToNavMesh: true"
            thumbstick-dpad>
            <a-entity id="head"
               camera
               position="0 1.6 0"
               look-controls="pointerLockEnabled: true"></a-entity>
            <a-entity id="leftHand"
               thumbstick-dpad
               snap-turn="cameraRig: #cameraRig"
               teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; startEvents: thumbsticknorth; endEvents: thumbstickcenter; collisionEntities: #navmesh"
               hand-controls="hand: left; handModelStyle: highPoly; color: #dedede"></a-entity>
            <a-entity id="rightHand"
               teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; startEvents: thumbsticknorth; endEvents: thumbstickcenter; collisionEntities: #navmesh"
               hand-controls="hand: right; handModelStyle: highPoly; color: #dedede"></a-entity>
         </a-entity>
      </a-scene>
   </div>
   <!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'aframe';
import 'aframe-extras';
import 'aframe-teleport-controls';
import '../aframe/components/ThumbstickDirectionalPad';
import '../aframe/components/SnapTurn';

export default defineComponent({

   name: 'Game',

});
</script>

<style scoped lang="scss">
.view {
   height: 100vh;
}
</style>
