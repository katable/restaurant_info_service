import React from 'react';
import ReactDOM from 'react-dom';
import './scss/base.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        Some text
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
