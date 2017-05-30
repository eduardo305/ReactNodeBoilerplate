import React from 'react';
import { Link } from 'react-router-dom';

import HeaderCSS from './HeaderCSS.scss';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/candidates">Candidates</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
