import React, { Component } from 'react';


class Balance extends Component {
  constructor (props) {
    super(props);
    this.state = {
      balance: "unknown"
    }
  }

  componentDidMount() {
      fetch(`http://ec2-54-173-199-105.compute-1.amazonaws.com:8080/user/1/balance`) 
          .then(result=> {
              result.text().then(balance=> {
              console.log(balance);
              this.setState({balance: balance});
            })
          });
  }

  render() {
    return (
      <div>
        <h2>Current Balance: {this.state.balance}</h2>
      </div>
    );
  }
}

export default Balance;