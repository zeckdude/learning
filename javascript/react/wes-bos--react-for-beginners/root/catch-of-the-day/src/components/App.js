import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base.js';

class App extends React.Component {
  constructor() {
    super();

    console.log('constructor');

    // Bind the `this` context in the following methods so when they are used
    // in other components, the context is actually the <App> component
    this.addFish = this.addFish.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);

    // Setting initial state with ES6
    // Use getInitialState() without ES6
    this.state = {
      fishes: {},
      order: {},
      loadingDB: true
    };
  }

  // Runs near the beginning of a component's lifecycle (right before it is rendered)
  componentDidMount() {
    console.log('componentDidMount');

    // Sync the fishes state with Firebase database
      // Save the database connection into a variable so it can be destroyed when the component is unmounted (in componentWillUnmount() method)
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
      {
        context: this,
        state: 'fishes', // Specify which state to sync with DB
        then: () => {
          this.setState({
            loadingDB: false
          });
        }
      }
    );

    // Check if there is any order in localStorage
    // localStorage.getItem(key, value) - Get a key/value pair from localStorage (in Application tab in Debugger Tools)
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if (localStorageRef) {
      // Update the component's state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  // Run before the state gets updated. The return value determines if the component gets re-rendered.
  shouldComponentUpdate(nextProps, nextState) {
    // Don't render any component until the database is finished rendering
    return !nextState.loadingDB;
  }

  // Runs when a component's lifecycle ends
  componentWillUnmount() {
    console.log('componentWillUnmount');

    // Destroy the DB connection when the component unmounts
    base.removeBinding(this.ref);
  }

  // Run whenever the component's props or state is updated
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');

    // nextProps and nextState are the props and state that has been changed
    // localStorage.setItem(key, value) - Save a key/value pair to localStorage (in Application tab in Debugger Tools)
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  }

  addFish(fish) {
    // Copy the current fishes state
    const fishes = {...this.state.fishes};

    // Add in new fish
    const timestamp = Date.now();
    fishes[`fish=${timestamp}`] = fish;

    // Update fishes state
    this.setState({ fishes }); // same as this.setState({ fishes: fishes });
  }

  updateFish(key, updatedFish) {
    // Copy the current fishes state
    const fishes = {...this.state.fishes};

    // Update the current fish
    fishes[key] = updatedFish;

    // Update the Fishes state
    this.setState({ fishes });
  }

  removeFish(key) {
    // Copy the current fishes state
    const fishes = {...this.state.fishes};

    // Update the current fish
    fishes[key] = null; // Since we're using Firebase, the current fish state needs to be set to null in order to remove it

    // Update the Fishes state
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key) {
    // Copy the current order state
    const order = {...this.state.order};
    //console.log('Order State before', order);

    // Update or add in new order
    order[key] = order[key] + 1 || 1;

    // Update orders state
    this.setState({ order });

    //console.log('Order State after', order);
  }

  removeFromOrder(key) {
    // Copy the current order state
    const order = {...this.state.order};

    // Remove item from order
    delete order[key]; // In this case, the item in the order state can be completely removed, since the order data is being persisted via localStorage and not using Firebase such as when we are removing a fish

    // Update orders state
    this.setState({ order });
  }


  render() {
    console.log('render');

    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline="Fresh Seafood Market" />
          <ul className='list-of-fishes'>
            {
              Object
                .keys(this.state.fishes) // Object.keys gets all the keys of an object an puts them in an array
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />) // Loop through each item in the array (the fish key) and display a component using the key from the fishes state as the unique key for each Fish component
            }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
        />
      </div>
    )
  }
}

// Define what class to return when this file gets loaded externally
export default App;
