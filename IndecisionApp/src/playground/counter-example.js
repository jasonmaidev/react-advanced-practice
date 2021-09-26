console.log('counter');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAdd() {
    this.setState((old) => {
      return {
        count: old.count + 1
      };
    });
  }
  handleMinus() {
    this.setState((old) => {
      return {
        count: old.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
