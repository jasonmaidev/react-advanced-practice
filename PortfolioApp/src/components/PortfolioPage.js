import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    Check out some of my work below:
    <p><Link to="/portfolio/1">Item 1</Link></p>
    <p><Link to="/portfolio/2">Item 2</Link></p>
  </div>
)

export default PortfolioPage