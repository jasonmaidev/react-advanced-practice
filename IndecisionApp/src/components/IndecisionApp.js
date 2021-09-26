import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
  // transformed class property with babel to remove constructor
  state = {
    options: [],
    selectedOption: undefined
  };
  //built in React lifecycle methods
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    }
    catch (e) {

    }
  }
  //set localStorage data
  componentDidUpdate(prevProp, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('will unmount');
  }

  handleDeleteAll = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDelete = (optionToRemove) => {
    //target option via optionToRemove item triggers state change of options array
    this.setState((prevState) => ({
      //return each option value not equal to optionToRemove value
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This entry already exists'
    }
    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }

  handlePick = () => {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    this.setState(() => ({ selectedOption: option }));
  }

  handleModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  render() {

    return (
      <div>
        <Header />
        <Action
          //props passed down to Action component
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} />
        <Options
          //props passed down to Options component
          options={this.state.options}
          handleDeleteAll={this.handleDeleteAll}
          handleDelete={this.handleDelete}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleModal={this.handleModal}
        />
      </div>
    );
  }
}

export default IndecisionApp;