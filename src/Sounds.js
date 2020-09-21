import React, { Component } from 'react';
import ReactHowler from 'react-howler';

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


class Sounds extends Component {
    static defaultProps = {
        sounds: [
            bubbles, clay, confetti, corona, spiral, flash1, flash2, flash3, glimmer, moon, pinwheel,
            piston1, piston2, piston3, prism1, prism2, prism3, splits, squiggle, strike, suspension, timer,
            ufo, veil, wipe, zigZag
        ]
    }

    constructor(props){
        super(props);
        this.state = {
            sound: bubbles,
            playing: false
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleKeyPress(e){

        this.setState({playing: true});
        
        if(e.keyCode === 65){
            this.setState({sound: bubbles})
        }

        if(e.keyCode === 66){
            this.setState({sound: clay})
        }

        if(e.keyCode === 67){
            this.setState({sound: confetti})
        }

        if(e.keyCode === 68){
            this.setState({sound: corona})
        }

        if(e.keyCode === 69){
            this.setState({sound: spiral})
        }

        if(e.keyCode === 70){
            this.setState({sound: flash1})
        }

        if(e.keyCode === 71){
            this.setState({sound: flash2})
        }

        if(e.keyCode === 72){
            this.setState({sound: flash3})
        }

        if(e.keyCode === 73){
            this.setState({sound: glimmer})
        }

        if(e.keyCode === 74){
            this.setState({sound: moon})
        }

        if(e.keyCode === 75){
            this.setState({sound: pinwheel})
        }

        if(e.keyCode === 76){
            this.setState({sound: piston1})
        }

        if(e.keyCode === 77){
            this.setState({sound: piston2})
        }

        if(e.keyCode === 78){
            this.setState({sound: piston3})
        }

        if(e.keyCode === 79){
            this.setState({sound: prism1})
        }

        if(e.keyCode === 80){
            this.setState({sound: prism2})
        }

        if(e.keyCode === 81){
            this.setState({sound: prism3})
        }

        if(e.keyCode === 82){
            this.setState({sound: splits})
        }

        if(e.keyCode === 83){
            this.setState({sound: squiggle})
        }

        if(e.keyCode === 84){
            this.setState({sound: strike})
        }

        if(e.keyCode === 85){
            this.setState({sound: suspension})
        }

        if(e.keyCode === 86){
            this.setState({sound: timer})
        }

        if(e.keyCode === 87){
            this.setState({sound: ufo})
        }

        if(e.keyCode === 88){
            this.setState({sound: veil})
        }

        if(e.keyCode === 89){
            this.setState({sound: wipe})
        }

        if(e.keyCode === 90){
            this.setState({sound: zigZag})
        }
    }

    handleClick(){
        var randIdx = Math.floor(Math.random() * this.props.sounds.length)
        this.setState({sound: this.props.sounds[randIdx], playing: true})
    }

    render() {
         var {sound, playing} = this.state;
        return (
             <div onKeyDown={this.handleKeyPress} tabIndex={0} style={{position: "absolute", height: "100vh", width: "100%"}}
                 onClick={this.handleClick}>
                 <ReactHowler
                 src={sound}
                 playing={playing}
                 />
             </div>
        )
    }
}


export default Sounds;