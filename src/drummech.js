import React from "react";

const data = [
  {
    id: "Q",
    letter: "Q",
    class: "firstrow",
    title: "Heater 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    id: "W",
    letter: "W",
    class: "firstrow",
    title: "Heater 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    id: "E",
    letter: "E",
    class: "firstrow",
    title: "Heater 3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    id: "A",
    letter: "A",
    class: "secondrow",
    title: "Heater 4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    id: "S",
    letter: "S",
    class: "secondrow",
    title: "Open HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: "D",
    letter: "D",
    class: "secondrow",
    title: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: "Z",
    letter: "Z",
    class: "thirdrow",
    title: "Kick N Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: "X",
    letter: "X",
    class: "thirdrow",
    title: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id: "C",
    letter: "C",
    class: "thirdrow",
    title: "Close D HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class DrumPad extends React.Component {
  componentDidMount() {
    console.log(this.audio);
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.title);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.title);
  };

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.id}
        className={this.props.className}
        onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <audio
          id={this.props.letter}
          className={this.props.className}
          src={this.props.src}
          ref={(ref) => (this.audio = ref)}
        ></audio>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click or Press a Key"
    };
  }

  handleDisplay = (display) => this.setState({ display });

  render() {
    return (
      <div className="mainbox">
        <div id="drum-machine" className="drummac">
          <div id="display" className="display">
            {this.state.display}
          </div>
          <div className="totalrows">
            <div id="drum-pads" className="drum-pad">
              {data.map((d) => (
                <DrumPad
                  title={d.title}
                  id={d.id}
                  className={d.class}
                  letter={d.letter}
                  src={d.src}
                  handleDisplay={this.handleDisplay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
