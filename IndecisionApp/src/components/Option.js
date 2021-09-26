import React from 'react';

//props passed down: optionText , handleDelete
const Option = (props) => (
  <div>
    {props.optionText}
    <button
      onClick={(e) => {
        props.handleDelete(props.optionText)
      }}
    >
      Remove
    </button>
  </div>
)



export default Option;