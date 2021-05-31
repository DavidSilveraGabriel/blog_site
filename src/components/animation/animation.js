import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

class Lottie extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        speed={1}
        src="https://assets2.lottiefiles.com/packages/lf20_QpolL2.json"
        style={{ height: '500px', width: '500px' }}
      ></Player>
    );
  }
}

export default Lottie;

/*
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
  }

  doSomething() {
    this.player.current.play(); // make use of the player and call methods
  }

  render() {
    return (
      <Player
        onEvent={event => {
          if (event === 'load') this.doSomething(); // check event type and do something
        }}
        ref={this.player}
        autoplay={false}
        loop={true}
        controls={true}
        src="https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"
        style={{ height: '300px', width: '300px' }}
      ></Player>
    );
  }
}

export default App;*/