class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: props.options
    };
  }
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

  handleDeleteAll() {
    this.setState(() => ({ options: [] }));
  }
  handleDelete(optionToRemove) {
    //target option via optionToRemove item triggers state change of options array
    this.setState((prevState) => ({
      //return each option value not equal to optionToRemove value
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This entry already exists'
    }
    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }

  handlePick() {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    alert(option);
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
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ['one', 'twos', 'three', 'four']
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: "Decision Applications",
  subtitle: "Choose Wisely Lady"
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
}

//props passed down: handleDelete
const Options = (props) => {
  return (
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
  );
}


//props passed down: optionText , handleDelete
const Option = (props) => {
  return (
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
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
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
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
