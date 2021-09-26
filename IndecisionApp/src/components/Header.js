import React from 'react';

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
)



Header.defaultProps = {
  title: "Decision Apps",
  subtitle: "Choose Wisely Lad"
}

export default Header;