import React from 'react';

class AddOption extends React.Component {
  // transformed class property with babel to remove constructor
  state = {
    error: undefined
  }
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    //prop passed down based on faulty input
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
