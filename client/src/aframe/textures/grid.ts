export default function render(id: string): void {
   const canvasEl = (document.getElementById(id) as HTMLCanvasElement), // TODO: not the best to assume the element exists and is canvas
         ctx = canvasEl.getContext('2d');

   if (!ctx) {
      return;
   }

   ctx.fillStyle = '#dedede';
   ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

   ctx.strokeStyle = '#aaaaaa';
   ctx.lineWidth = 2;
   Array.from({ length: 7 }).forEach((_v, i) => {
      const offset = (canvasEl.width / 8) * (i + 1);

      ctx.beginPath();
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset, canvasEl.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, offset);
      ctx.lineTo(canvasEl.height, offset);
      ctx.stroke();
   });

   ctx.strokeStyle = '#888888';
   ctx.lineWidth = 6;
   ctx.beginPath();
   ctx.moveTo(0, 0);
   ctx.lineTo(0, canvasEl.width);
   ctx.lineTo(canvasEl.height, canvasEl.width);
   ctx.stroke();
}
