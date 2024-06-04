import React from 'react';
import { LOGO } from '../utils/constants';

const Header = () => {
  return (
    <div>
       <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
    </div>
  )
}

export default Header;