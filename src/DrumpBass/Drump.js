import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
class DrumpBass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          texto: "",
            drumPads: [
                {
                    "key": "Q",
                    "song": "Heater-1",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                },
                {
                    "key": "W",
                    "song": "Heater-2",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                },
                {
                    "key": "E",
                    "song": "Heater-3",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                },
                {
                    "key": "A",
                    "song": "Heater-4",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                },
                {
                    "key": "S",
                    "song": "Heater-6",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                },
                {
                    "key": "D",
                    "song": "Dsc_Oh",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                },
                {
                    "key": "Z",
                    "song": "Kick_n_Hat",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                },
                {
                    "key": "X",
                    "song": "RP4_KICK_1",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                },
                {
                    "key": "C",
                    "song": "Cev_H2",
                    "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                }
            ]
        }
        this.handleBoton = this.handleBoton.bind(this)
        this.onClick = this.onClick.bind(this);
        }
   
   componentDidMount(){
    window.addEventListener("keypress", this.handleBoton)
   }

    //onClick esta conectado al id del audio, al tomar este id con getElementById() este audio se reproduce con .play()
    onClick(e, song){
        return () => {
            const sound = document.getElementById(e)
            sound.currentTime = 0;
            sound.play();
            this.setState({
            texto: song
            });

        };  
    }
render(){
    
    return(
        
        <div id="display" className="medio container">
            <h2>BUENAS!</h2>
            <div className=" borderss">
            
         <button id={this.state.drumPads[0].song} className="drum-pad" onClick={this.onClick(this.state.drumPads[0].key, this.state.drumPads[0].song)}>
         <audio id={"Q"} className="clip"  src={this.state.drumPads[0].url}/>Q</button>

         <button id={this.state.drumPads[1].song} className="drum-pad" onClick={this.onClick(this.state.drumPads[1].key, this.state.drumPads[1].song)}>
         <audio id={"W"} className="clip"  src={this.state.drumPads[1].url}/>W</button>

         <button id={this.state.drumPads[2].song} className="drum-pad" onClick={this.onClick(this.state.drumPads[2].key, this.state.drumPads[2].song)}>
         <audio id={"E"} className="clip" src={this.state.drumPads[2].url}/>E</button>

         <br/>

         <button id={this.state.drumPads[3].song} className="drum-pad" onClick={this.onClick(this.state.drumPads[3].key, this.state.drumPads[3].song)}>
         <audio id={"A"} className="clip" src={this.state.drumPads[3].url}/>A</button>

         <button id={this.state.drumPads[4].song} className="drum-pad" onClick={this.onClick(this.state.drumPads[4].key, this.state.drumPads[4].song)}>
         <audio id={"S"} className="clip" src={this.state.drumPads[4].url}/>S</button>

         <button id={this.state.drumPads[5].song} className="drum-pad" onClick={this.onClick(this.state.drumPads[5].key, this.state.drumPads[5].song)}>
         <audio id={this.state.drumPads[5].key} className="clip" src={this.state.drumPads[5].url}/>D</button>
      
        <br/>
       
         <button id={this.state.drumPads[6].song} className="drum-pad" onClick={this.onClick(this.state.drumPads[6].key, this.state.drumPads[6].song)}>
         <audio id={"Z"} className="clip" src={this.state.drumPads[6].url}/>Z</button>

         <button id={this.state.drumPads[7].song} className="drum-pad" onClick={this.onClick(this.state.drumPads[7].key, this.state.drumPads[7].song)}>
         <audio id={"X"} className="clip" src={this.state.drumPads[7].url}/>X</button>

         <button id={this.state.drumPads[8].song} className="drum-pad" onClick={this.onClick(this.state.drumPads[8].key, this.state.drumPads[8].song)}>
         <audio id={"C"} className="clip" src={this.state.drumPads[8].url}/>C</button>
         <br/>
              <h1>{this.state.texto}</h1>
              
        </div>
    </div>
       
    )
}
componentWillUnmount() { window.removeEventListener('keypress', this.handleBoton);
}
handleBoton(e){

    const wason = this.state.drumPads.find(
        item => item.key === e.key.toUpperCase(),
    )
    if(wason){document.getElementById(wason.song).click();
             }
   }
}

export default DrumpBass