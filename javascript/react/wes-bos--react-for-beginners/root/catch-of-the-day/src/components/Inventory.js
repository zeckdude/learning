import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super();

    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];

    // Make a copy of the current fish state and assign the new properties
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
      // 1st Alternate way to copy the object and assign the new properties
      // const updatedFish = {...fish};
      // updatedFish[e.target.name] = e.target.value;

      // 2nd Alternate way to copy the object and assign the new properties
      //const updatedFish = Object.assign({}, fish, { [e.target.name]: e.target.value });

    // Update the fishes state with the new fish value
    this.props.updateFish(key, updatedFish);

    console.log(updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];

    return (
      <div className='fish-edit' key={key}>
        <input name='name' type='text' value={fish.name} placeholder='Fish Name' onChange={(e) => {this.handleChange(e, key)}} />
        <input name='price' type='text' value={fish.price} placeholder='Fish Price' onChange={(e) => {this.handleChange(e, key)}}/>
        <select name='status' value={fish.status} onChange={(e) => {this.handleChange(e, key)}}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea name='desc' value={fish.desc} placeholder='Fish Description' onChange={(e) => {this.handleChange(e, key)}}></textarea>
        <input name='image' value={fish.image} type='text' placeholder='Fish Image' onChange={(e) => {this.handleChange(e, key)}}/>
        <button onClick={() => { this.props.removeFish(key) }}>Remove Fish</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {
          Object.keys(this.props.fishes).map(this.renderInventory)
        }
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
