import { ComponentWrapper } from '../lib/ComponentWrapper';

export enum ThumbstickDirection {
   NORTH = 'north',
   EAST = 'east',
   SOUTH = 'south',
   WEST = 'west',
   CENTER = 'center',
}

interface ThumbstickDirectionalPadSchema {
   direction: ThumbstickDirection;
}

class ThumbstickDirectionalPad extends ComponentWrapper<ThumbstickDirectionalPadSchema> {

   public constructor() {
      super('thumbstick-dpad', {
         direction: {
            type: 'string',
            default: ThumbstickDirection.CENTER,
         },
      });
   }

   public init() {
      this._addEventListener('thumbstickmoved', this._onThumbstickMove);
   }

   private _onThumbstickMove(evt: Event) {
      const eventDetail = ((evt as unknown) as { detail: { x: number; y: number } }).detail || {};

      let newDirection = ThumbstickDirection.CENTER;

      if (eventDetail.y > 0.95) {
         newDirection = ThumbstickDirection.SOUTH;
      } else if (eventDetail.y < -0.95) {
         newDirection = ThumbstickDirection.NORTH;
      } else if (eventDetail.x > 0.95) {
         newDirection = ThumbstickDirection.EAST;
      } else if (eventDetail.x < -0.95) {
         newDirection = ThumbstickDirection.WEST;
      }

      if (this.data.direction !== newDirection) {
         this.data.direction = newDirection;
         this.el.emit(`thumbstick${newDirection}`);
      }
   }

}

new ThumbstickDirectionalPad().register();
