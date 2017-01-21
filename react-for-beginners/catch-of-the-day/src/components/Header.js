import React from 'react';

// Example of a stateless function
// THe overhead of a complete component is not needed as it only renders content
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
      <h3 className='tagline'><span>{props.tagline}</span></h3>
    </header>
  )
}

export default Header;
