// let's go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

// Using React Router component
  // Match: Looks for a pattern and if it matches, it shows the specified component
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={ StorePicker } />
        <Match pattern='/store/:storeId' component={ App } />
        <Miss component={ NotFound } />
      </div>
    </BrowserRouter>
  )
}


// Render the component to the specified DOM element
// Another way this could be written:
  // import ReactDOM from 'react-dom';
  // ReactDOM.render(<App/>, document.querySelector('#main'));
render(<Root/>, document.querySelector('#main'));
