import AFrame from 'aframe';
import { ComponentWrapper } from '../lib/ComponentWrapper';

export enum ThumbstickDirection {
   NORTH = 'north',
   EAST = 'east',
   SOUTH = 'south',
   WEST = 'west',
   CENTER = 'center',
}

interface SnapTurnSchema {
   readonly cameraRig: AFrame.Entity;
   readonly angle: number;
   readonly leftEvent: string;
   readonly rightEvent: string;
}

class SnapTurn extends ComponentWrapper<SnapTurnSchema> {

   public constructor() {
      super('snap-turn', {
         cameraRig: {
            type: 'selector',
         },
         angle: {
            type: 'number',
            default: 45,
         },
         leftEvent: {
            type: 'string',
            default: 'thumbstickwest',
         },
         rightEvent: {
            type: 'string',
            default: 'thumbstickeast',
         },
      });
   }

   public init() {
      this._addEventListener(this.data.leftEvent, () => {
         this.data.cameraRig.object3D.rotation.y += this.data.angle;
      });
      this._addEventListener(this.data.rightEvent, () => {
         this.data.cameraRig.object3D.rotation.y -= this.data.angle;
      });
   }

}

new SnapTurn().register();
