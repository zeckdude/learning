import React from 'react';

// Example of a stateless component. Its only purpose it to render html.
const Header = (props) => {
  return (
    <header className='top'>
      <h1>
        Catch
        <span className='ofThe'>
          <span className='of'>of</span>
          <span className='the'>the</span>
        </span>
        Day
      </h1>

      {/*
        Displaying Props within a component html
          this: The Component
          props: The `props` object on the component. Passed in when the Component is used via a custom attribute.
      */}
      <h3 className='tagline'><span>{props.tagline}</span></h3>
    </header>
  )
}


export default Header;
