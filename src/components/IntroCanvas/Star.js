class Star {
    constructor(x, y, dx, dy, radius, ctx, canvas) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;
      this.ctx = ctx;
      this.canvas = canvas;
      const randomColors = ['#EBEBEB','yellow', 'orange', 'lightblue', 'pink'];
      this.color = randomColors[0];
    }
    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.ctx.fillStyle = this.color;
      this.ctx.shadowBlur = 15;
      this.ctx.shadowColor = this.color;
      this.ctx.strokeStyle = this.color;
      this.ctx.fill();
      this.ctx.stroke();
    }
    update(mouseCoords) {
      if (this.x > this.canvas.width) {
        this.x = 0;
       }
      if(this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
     
      // const range = 4;
      // if(this.x + this.radius + range > mouseCoords.x && this.x - this.radius - range < mouseCoords.x
      //   && this.y + this.radius + range > mouseCoords.y && this.y - this.radius - range < mouseCoords.y) {
      // }
        this.x += this.dx;
        this.y += this.dy;

      this.draw();
    }
  }
  
  export default Star;