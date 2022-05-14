//yarn add moment@2.18.1 react-dates@12.7.0 react-addons-shallow-compare@15.6.0

import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: ''
  };
  changeDescription = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  changeAmount = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  changeNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.changeDescription}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.changeAmount}
          />
          <textarea
            placeholder="Memo"
            value={this.state.note}
            onChange={this.changeNote}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
