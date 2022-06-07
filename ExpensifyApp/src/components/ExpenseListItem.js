import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {id}</p>
  </div>
);


export default ExpenseListItem;