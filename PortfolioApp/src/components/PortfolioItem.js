import React from 'react'

const PortfolioItem = (props) => (
  <div>
    This is item with ID: {props.match.params.id}
  </div>
)

export default PortfolioItem;