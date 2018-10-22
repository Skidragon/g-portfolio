import React from "react";
import Star from "./Star";
import "../../css/variables.css";

const canvasStyle = {
  boxSizing: "border-box",
  width: "100%",
  fontFamily: "Rochester"
};

class IntroCanvas extends React.Component {
  constructor(props) {
    super(props);

    }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    
    // Sizes and colors the canvas

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Creates the text appear on the canvas
    ctx.fillStyle = "white";
    ctx.font = "3rem Rochester";
    ctx.textAlign = "center";
    ctx.fillText(this.props.name, canvas.width / 2, canvas.height / 2);
    ctx.fillText(this.props.title, canvas.width / 2, canvas.height / 2 + 75);
    const stars = [];
    // Creates the stars of the canvas
    for (let i = 0; i < 25; i++) {
      let x = Math.random() * canvas.width;
      let y = (Math.random() * canvas.height) / 3;
      let radius = Math.random() * 6;
      let dx = Math.random() * 1;
      let star = new Star(x, y, dx, 0, radius, ctx, canvas);
      stars.push(star);
    }
    
    ctx.beginPath();
    ctx.ellipse(
      canvas.width / 2,
      canvas.height,
      canvas.width / 4,
      0,
      canvas.width,
      200,
      Math.PI,
      true
    );
    ctx.fillStyle = "darkblue";
    ctx.fill();
    function animate() {
      requestAnimationFrame(animate);
        // Stops updating the stars once the
        // user has reached a certain part of the window
        if(window.scrollY < 700) {
      ctx.clearRect(0, 0, canvas.width, canvas.height / 2.5);
      for (let i = 0; i < 25; i++) {
        stars[i].update();
      }
    }
    }
    animate();
  }
  render() {
    return (
      <div>
        <canvas style={canvasStyle} ref="canvas" height="1000px" />
      </div>
    );
  }
}

export default IntroCanvas;
