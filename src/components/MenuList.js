import React, { Component } from 'react';
import '../Menu.css';

class FoodItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price:'',
      descripion: '',
      url:'',
    }
  this.handleClick = this.handleClick.bind(this);
  }
  handleClick(food){
    this.props.addToOrder(food)
    console.log(food);
  }
  render(){
    const myMenu = this.props.foodlist.map((foodItemWhatever, index) => <li className="list-group-item col-12 col-md-4 list-style" key={index}>{foodItemWhatever.name}<img className="foodpic"src={foodItemWhatever.url} alt='#'/><p>{foodItemWhatever.descripion}</p><button className="btn btn-success"type="button" onClick={() => this.handleClick(foodItemWhatever)}>${foodItemWhatever.price}</button></li>);
    console.log(this.props.foodlist);
    return(
  <ul className="list-group">
    {myMenu}
  </ul>
    )
  }
}
export default FoodItem;
