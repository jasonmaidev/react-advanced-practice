//yarn add moment@2.18.1 react-dates@12.7.0 react-addons-shallow-compare@15.6.0

import React from 'react';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? props.expense.amount.toString() : '',
      error: ''
    };
  };
  changeDescription = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  changeAmount = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  changeNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        note: this.state.note
      })
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
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
