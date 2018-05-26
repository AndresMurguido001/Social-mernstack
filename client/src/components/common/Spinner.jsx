import React, { Component } from "react";
import anime from "animejs";

class Spinner extends Component {
  render() {
    let style = {
      backgroundColor: "red",
      height: "70px",
      width: "70px",
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      margin: "auto",
      borderRadius: "50%",
      inner: {
        height: "90px",
        width: "90px",
        backgroundColor: "#white",
        borderTop: "5px solid #eee",
        borderRight: "5px solid #eee",
        borderLeft: "5px solid #eee",
        borderBottom: "5px solid #343A40",
        borderRadius: "50%",
        top: "0",
        right: "0",
        left: "0",
        bottom: "0",
        margin: "auto",
        position: "absolute",
        transformOrigin: "center center"
      },
      load: {
        fontSize: "13px",
        position: "relative",
        zIndex: "1",
        top: "40%",
        left: "12%",
        color: "#fff",
        textShadow: "#000 0px 0px 1px"
      }
    };

    let spinOne = {
      backgroundColor: "rgb(119, 177, 239)",
      borderTop: "5px solid #343A40",
      borderRight: "5px solid #eee",
      borderLeft: "5px solid #eee",
      borderBottom: "5px solid #eee",
      height: "80px",
      width: "80px",
      position: "absolute",
      borderRadius: "50%",
      top: "0",
      right: "0",
      left: "0",
      bottom: "0",
      margin: "auto",
      transformOrigin: "50% 50%"
    };
    anime({
      targets: ".spin-1",
      rotate: [{ value: -360, duration: 1000, easing: "easeInOutCubic" }],
      loop: true,
      direction: "normal"
    });
    anime({
      targets: ".spin-2",
      rotate: "1turn",
      easing: "easeInOutCubic",
      loop: true,
      direction: "normal"
    });
    return (
      <div>
        <div className="spin" style={style}>
          <h5 style={style.load}>Loading...</h5>
        </div>
        <div className="spin-1" style={spinOne} />
        <div className="spin-2" style={style.inner} />
      </div>
    );
  }
}
export default Spinner;
