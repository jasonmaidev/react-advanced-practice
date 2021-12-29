import React from 'react';


const EditExpensePage = (props) => {
  console.log(props.match.params.id);
  console.log('100');
  return (
    <div>
      Editing item ID {props.match.params.id}
    </div>
  )
}
export default EditExpensePage;