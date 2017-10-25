import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {


  // 3 ways to give methods within a component the correct context of `this` set as the component itself, since ES6 classes don't set `this` to the class
  //
  // 1 - Use a constructor method
    // constructor() {
    //   // Runs code from the parent React Component's Constructor method that is necessary to create a component
    //   super();
    //
    //   // Inside the constructor method, `this` is the Storepicker component, so in order to make `this` available in the `goToStore()` method, we need to bind it and save it back into the same variable
    //   // The method can also be bound when the event Handler is declared on the element as shown below
    //   this.goToStore = this.goToStore.bind(this);
    // }
  //
  // 2 - Bind the method when declaring the event handler on the element
    //  <form className='store-selector' onSubmit={ this.goToStore.bind(this) }>
  //
  // 3 - Creating a new method for
  //  <form className='store-selector' onSubmit={ (e) => this.goToStore(e) }>

  goToStore(e) {
    e.preventDefault();

    // Grab the text from the box
    let storeId = this.storeInput.value;

    // Transition from `/`` to `/store:storeId`
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={ this.goToStore.bind(this) }>
        { /* JSX Comment Example. Needs to go within the outermost element. */ }
        <h2>Please Enter A Store</h2>
        <input type='text' required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

// In order to use router methods in the JS, the router needs to be "surfaced"
// Ask Mario for clarification
// Also ask how to debug with breakpoints in source files while using Webpack and React
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
