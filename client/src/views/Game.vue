<template>
   <!-- eslint-disable max-len -->
   <div class="view">
      <a-scene>
         <a-assets>
            <canvas id="texture-floor" width="1024" height="1024" crossorigin="anonymous"></canvas>
         </a-assets>
         <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
         <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
         <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
         <a-plane
            position="0 0 -4"
            rotation="-90 0 0"
            width="40"
            height="40"
            material='src: #texture-floor; repeat: 10, 10'></a-plane>
         <a-sky color="#8ddfff"></a-sky>
         <a-entity id="cameraRig"
            movement-controls="controls: keyboard, touch"
            thumbstick-dpad>
            <a-entity id="head"
               camera
               position="0 1.6 0"
               look-controls="pointerLockEnabled: true"></a-entity>
            <a-entity id="leftHand"
               thumbstick-dpad
               snap-turn="cameraRig: #cameraRig"
               teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; startEvents: thumbsticknorth; endEvents: thumbstickcenter;"
               hand-controls="hand: left; handModelStyle: highPoly; color: #dedede"></a-entity>
            <a-entity id="rightHand"
               teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head; button: trigger; startEvents: thumbsticknorth; endEvents: thumbstickcenter;"
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
import renderGridTexture from '../aframe/textures/grid';

export default defineComponent({

   name: 'Game',

   mounted: () => {
      renderGridTexture('texture-floor');
   },

});
</script>

<style scoped lang="scss">
.view {
   height: 100vh;
}
</style>
