import React, { Component } from 'react';
import './App.css';
import CardView from './components/card'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callApi() {
    fetch("http://localhost:9000/test")
      .then(res => res.text())
      .then((res) => {
        console.log(res);
        this.setState(
          {
            apiResponse: JSON.parse(res)
          }
        )
      }).catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    let middle = [];
    let outer = [];
    return(
      <div className="App">
        <div className="container">
        <p>"Here is what it is"</p>
       </div>
      </div>

    );
    for (let index = 0; index < this.state.apiResponse.length; index++) {
      if (index === 0 || index % 3 === 0) {
        middle = [];
        outer.push
          (
            <div className="row top-buffer">
            </div>);
      }
      middle.push(
        <div className="col-sm">
          <CardView />
        </div>
      )
      outer[outer.length - 1] = <div className="row top-buffer">
        {middle}
      </div>

    }
    return (
      <div className="App">
        <div className="container">
          {outer}
        </div>

      </div>
    );
  }
}
export default App;
