import React, { Component } from 'react';


class PhoneItem extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} /><br />
        Only for {this.props.price}!
      </div>
    );
  }
}

export default PhoneItem;