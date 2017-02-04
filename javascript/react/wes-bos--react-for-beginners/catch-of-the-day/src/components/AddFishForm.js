import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log('making fish');

    // const fish = {
    //   name
    //   price
    //   status
    //   desc
    //   image
    // }
  }

  render() {
    return (
      <form action='' className='fish-edit' onSubmit={(event) => this.createFish(event)}>
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
