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

  //Code is currently set to call a specific house for ease of display on portfolio. To enable querying for a specific house from the url params: comment out the houseId variable and uncomment the commented code. Then type `npm run build` in the command line to update the app. After that is complete, access the house you want using `/?house_id=96` after the url (replacing 96 with your desired id number from 1 to 100).

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
