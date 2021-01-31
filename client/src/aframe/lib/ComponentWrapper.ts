import AFrame from 'aframe';

function hasMethod(obj: unknown, name: string): boolean {
   const desc = Object.getOwnPropertyDescriptor(obj, name);

   return !!desc && typeof desc.value === 'function';
}

function getInstanceMethodNames(obj: unknown, stopAt: unknown): string[] {
   const names: string[] = [];

   let proto = Object.getPrototypeOf(obj);

   function pushNameIfFound(name: string): void {
      if (name !== 'constructor') {
         if (hasMethod(proto, name)) {
            names.push(name);
         }
      }
   }

   while (proto && proto !== stopAt) {
      Object.getOwnPropertyNames(proto).forEach(pushNameIfFound);
      proto = Object.getPrototypeOf(proto);
   }

   return names;
}

// Based on https://github.com/olioapps/aframe-typescript-toolkit/blob/master/src/aframe_wrapper.ts
// eslint-disable-next-line max-len
export abstract class ComponentWrapper<SCHEMA extends object = Record<string, unknown>, SYSTEM extends AFrame.System = AFrame.System> implements AFrame.Component<SCHEMA, SYSTEM> {

   public el!: AFrame.Entity
   public id!: string
   public data!: SCHEMA
   public schema: AFrame.Schema<SCHEMA>
   public system!: SYSTEM
   public name!: string
   public initialized!: boolean

   public constructor(name: string, schema?: AFrame.Schema<SCHEMA>) {
      this.name = name;
      this.schema = schema || {};
   }

   public remove(): void {
      // noop
   }

   public update(/* oldData: SCHEMA */): void {
      // noop
   }

   public extendSchema(/* update: Record<string, unknown> */): void {
      // noop
   }

   public flushToDOM(): void {
      // noop
   }

   public init(): void {
      // noop
   }

   public pause(): void {
      // noop
   }

   public play(): void {
      // noop
   }

   public destroy() {
      const parentEl = this.el.parentElement;

      if (parentEl) {
         parentEl.removeChild(this.el);
      }
   }

   public register() {
      const funcs = getInstanceMethodNames(this, Object.prototype);

      funcs.forEach((fnName) => { (this as Record<string, unknown>)[fnName] = (this as Record<string, unknown>)[fnName]; });
      AFRAME.registerComponent(this.name, this);
   }

   protected _addEventListener(eventName: string, listener: EventListener): void {
      // TODO: This is needed due to the prototype copy thing. What if we bind when
      // copying functions?
      this.el.addEventListener(eventName, listener.bind(this));
   }

}
