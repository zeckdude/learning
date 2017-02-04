import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // Example of a constructor function that can be used to bind `this` as the component to a function, since `this` is only accessible as the component to the render() and constructor() methods by default
  constructor() {
    // Initialize method that needs to be placed within the constructor method that allows react to run the render method and other default functionality. This would normally be run automatically if the constructor() method is not manually defined
    super();

    // Bind `this` as the component to a function. This implementation should be used if the method is going to be called several times throughout the class.
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
    // Stop the from from submitting
    event.preventDefault();

    // Grab the text from the box
    const storeId = this.storeInput.value;

    // Transition the URL from `/` to `/store/:storeId`
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      // Alternative ways to bind `this` as the component to the goToStore() method
      // <form className='store-selector' onSubmit={this.goToStore.bind(this)}>
      //<form className='store-selector' onSubmit={(event) => { this.goToStore(event) }}>

      <form className='store-selector' onSubmit={this.goToStore}>
        { /* Example of a JSX comment */ }
        <h2>Please Enter A Store</h2>

        {/* defaultValue - Property that fills in an initial value on load but isn't bound to state */}
        {/* ref - Property that assigns the reference to the field to a variable that can be accessed throughout the component. This is also available through string references, as in `ref='storeInput'`, but this is being deprecated. Using the function in its place allows for more funcionality. In the example provided, the arrow function is getting the element passed to it as its argument and subsequently the `storeInput` property is being created on the component, so it can be accessed elsewhere in the class. */}
        <input type='text' placeholder='Store Name' required='required' defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

// Give the StorePicker component access to the router methods
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
