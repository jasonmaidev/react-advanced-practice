import React from 'react';
import Option from './Option';


//props passed down: handleDelete
const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteAll}>Remove All</button>
    {props.options.length === 0 && <p>Please enter something.</p>}
    {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDelete={props.handleDelete}
        />
      ))
    }
  </div>
)




export default Options;