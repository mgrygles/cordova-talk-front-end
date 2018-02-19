import React, { Component } from 'react';
import PhoneItem  from './PhoneItem'

class Store extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
      let URL = 'http://ec2-54-173-199-105.compute-1.amazonaws.com:8080/store/phones/1/10'
      console.log("getting "+URL);
      fetch(URL) 
          .then(result=> {
              result.json().then(items=> {
              console.log(items);
              this.setState({items: items});
            })
          });
  }

  render() {
    console.log(this.state.items);
    const listItems = this.state.items.map(function(item){
      return <PhoneItem name={item.name} price={item.price} image={item.image} />
    });

    console.log (listItems);

    return (
      <div>
        <h2>New Cell Phones!</h2>
        {listItems}
      </div>
    );
  }
}

export default Store;