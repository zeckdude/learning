import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();

    // Get the values entered on the form via the form field refs
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    };

    // Add the new fish to the fishes state via the addFish() method that is passed through from App.js via props
    this.props.addFish(fish);

    // Clear the form
    this.fishForm.reset();
  }

  render() {
    return (
      <form ref={(form) => {this.fishForm = form}} className='fish-edit' onSubmit={this.createFish.bind(this)}>
        <input ref={(input) => this.name = input} type='text' placeholder='Fish Name'/>
        <input ref={(input) => this.price = input} type='text' placeholder='Fish Price'/>
        <select ref={(input) => this.status = input}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder='Fish Description'></textarea>
        <input ref={(input) => this.image = input} type='text' placeholder='Fish Image'/>
        <button type='submit'>+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
