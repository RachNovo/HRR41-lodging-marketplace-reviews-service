import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Body from './Components/Body/Body.jsx';
import Head from './Components/Head/Head.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'house': {}
    }
    //this bindings
    this.fetch = this.fetch.bind(this);
  }

  //set to call a specific house for ease of display on portfolio, functionality here to for a specific house to be queried from the url params.
  fetch() {
    // const url = new URL(window.location.href);
    // const houseId = url.searchParams.get('house_id');
    const houseId = '26';
    $.get( `/rooms/${houseId}`, (data) => {
      this.setState({'house': data});
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return(
      <div>
        <Head house={this.state.house}/>
        <Body house={this.state.house}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('review'));

export default App;
