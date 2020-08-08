import React, { Component } from 'react';
import './App.css';
import CardView from './components/card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callApi() {
    fetch("http://localhost:3000/test")
      .then(res => res.text())
      .then((res) => {
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
          <CardView values={this.state.apiResponse[index]} />
        </div>
      )
      outer[outer.length - 1] = <div className="row top-buffer">
        {middle}
      </div>

    }
    return (
      <Pagination >
        <div className="App">
          <div className="container">
            {outer}
          </div>

        </div>
      </Pagination>
    );
  }
}
export default App;
