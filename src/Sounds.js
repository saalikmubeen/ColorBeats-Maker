import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import "./App.css";

import bubbles from "./sounds/bubbles.mp3";
import clay from "./sounds/clay.mp3";
import confetti from "./sounds/confetti.mp3";
import corona from "./sounds/corona.mp3";
import spiral from "./sounds/dotted-spiral.mp3";
import flash1 from "./sounds/flash-1.mp3";
import flash2 from "./sounds/flash-2.mp3";
import flash3 from "./sounds/flash-3.mp3";
import glimmer from "./sounds/glimmer.mp3";
import moon from "./sounds/moon.mp3";
import pinwheel from "./sounds/pinwheel.mp3";
import piston1 from "./sounds/piston-1.mp3";
import piston2 from "./sounds/piston-2.mp3";
import piston3 from "./sounds/piston-3.mp3";
import prism1 from './sounds/prism-1.mp3';
import prism2 from "./sounds/prism-2.mp3";
import prism3 from "./sounds/prism-3.mp3";
import splits from "./sounds/splits.mp3";
import squiggle from './sounds/squiggle.mp3';
import strike from "./sounds/strike.mp3";
import suspension from "./sounds/suspension.mp3";
import timer from "./sounds/timer.mp3";
import ufo from "./sounds/ufo.mp3";
import veil from "./sounds/veil.mp3";
import wipe from "./sounds/wipe.mp3";
import zigZag from "./sounds/zig-zag.mp3";

var a = "linear-gradient(to right, #4ac29a, #bdfff3)";
var b = "linear-gradient(to right, #bdc3c7, #2c3e50)";
var c = "linear-gradient(to right, #ee9ca7, #ffdde1)";
var d = "linear-gradient(to right, #2193b0, #6dd5ed)";
var e = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
var f = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
var g = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";
var h = "linear-gradient(to right, #b92b27, #1565c0)";
var i = "linear-gradient(to right, #373b44, #4286f4)";
var j = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
var k = "linear-gradient(to right, #000000, #0f9b0f)";
var l = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
var m = "linear-gradient(to right, #1e130c, #9a8478)";
var n = "linear-gradient(to left, #000000, #e74c3c)";
var o = "linear-gradient(to left, #16a085, #f4d03f)";
var p = "linear-gradient(to left, #00416a, #799f0c, #ffe000)";
var q = "linear-gradient(to left, #bbd2c5, #536976, #292e49";
var r = "linear-gradient(to left, #ff6e7f, #bfe9ff)";
var s = "linear-gradient(to left, #1d2b64, #f8cdda)";
var t = "linear-gradient(to left, #ed4264, #ffedbc)";
var u = "linear-gradient(to left, #fbd3e9, #bb377d)";
var v = "linear-gradient(to left, #780206, #061161)";
var w = "linear-gradient(to left, #8e0e00, #1f1c18)";
var x = "linear-gradient(to left, #2f7336, #aa3a38)";
var y = "linear-gradient(to left, #000000, #434343)";
var z = "linear-gradient(to left, #a80077, #66ff00)";


class Sounds extends Component {
    static defaultProps = {
        sounds: [
            bubbles, clay, confetti, corona, spiral, flash1, flash2, flash3, glimmer, moon, pinwheel,
            piston1, piston2, piston3, prism1, prism2, prism3, splits, squiggle, strike, suspension, timer,
            ufo, veil, wipe, zigZag
        ],
        colors: [
             a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
        ],
        animations: ["animate-side", "animate-up"]
    }

    constructor(props){
        super(props);
        this.state = {
            sound: bubbles,
            playing: false,
            background: "",
            animate: false,
            showing: true
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleKeyPress(e){

        this.setState({playing: true, animate: true, showing: false});

        setTimeout(() => {
            this.setState({animate: false})
        }, 1000);
        
        if(e.keyCode === 65){
            this.setState({sound: bubbles, background: a})
        }

        if(e.keyCode === 66){
            this.setState({sound: clay, background: b})
        }

        if(e.keyCode === 67){
            this.setState({sound: confetti, background: c})
        }

        if(e.keyCode === 68){
            this.setState({sound: corona, background: d})
        }

        if(e.keyCode === 69){
            this.setState({sound: spiral, background: e})
        }

        if(e.keyCode === 70){
            this.setState({sound: flash1, background: f})
        }

        if(e.keyCode === 71){
            this.setState({sound: flash2, background: g})
        }

        if(e.keyCode === 72){
            this.setState({sound: flash3, background: h})
        }

        if(e.keyCode === 73){
            this.setState({sound: glimmer, background: i})
        }

        if(e.keyCode === 74){
            this.setState({sound: moon, background: j})
        }

        if(e.keyCode === 75){
            this.setState({sound: pinwheel, background: k})
        }

        if(e.keyCode === 76){
            this.setState({sound: piston1, background: l})
        }

        if(e.keyCode === 77){
            this.setState({sound: piston2, background: m})
        }

        if(e.keyCode === 78){
            this.setState({sound: piston3, background: n})
        }

        if(e.keyCode === 79){
            this.setState({sound: prism1, background: o})
        }

        if(e.keyCode === 80){
            this.setState({sound: prism2, background: p})
        }

        if(e.keyCode === 81){
            this.setState({sound: prism3, background: q})
        }

        if(e.keyCode === 82){
            this.setState({sound: splits, background: r})
        }

        if(e.keyCode === 83){
            this.setState({sound: squiggle, background: s})
        }

        if(e.keyCode === 84){
            this.setState({sound: strike, background: t})
        }

        if(e.keyCode === 85){
            this.setState({sound: suspension, background: u})
        }

        if(e.keyCode === 86){
            this.setState({sound: timer, background: v})
        }

        if(e.keyCode === 87){
            this.setState({sound: ufo, background: w})
        }

        if(e.keyCode === 88){
            this.setState({sound: veil, background: x})
        }

        if(e.keyCode === 89){
            this.setState({sound: wipe, background: y})
        }

        if(e.keyCode === 90){
            this.setState({sound: zigZag, background: z})
        }
    }

    handleClick(){
        var randIdx = Math.floor(Math.random() * this.props.sounds.length)
        this.setState({
                      sound: this.props.sounds[randIdx], 
                       playing: true, animate: true, showing: false,
                       background: this.props.colors[randIdx]});

       setTimeout(() => {
          this.setState({animate: false})
      }, 1000);
    }

    render() {
         var {sound, playing, background, animate, showing } = this.state;
         var {animations} = this.props;
        return (
             <div onKeyDown={this.handleKeyPress} tabIndex={0} style=
               {{ height: "100vh", width: "100%", background: background}}
                 onClick={this.handleClick} className={animate ? animations[Math.floor(Math.random() * 2)] : "container"}>
                     {showing && <p className="message">Press any key, A to Z or tap and turn up speakers</p>}
                 <ReactHowler
                 src={sound}
                 playing={playing}
                 volume={1.0}
                 />
             </div>
        )
    }
}


export default Sounds;