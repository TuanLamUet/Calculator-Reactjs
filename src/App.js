import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      preNumber:'',
      currentNumber:'',
      operator:''
    }
  }

  addValue = (value) => {
    this.setState({
      currentNumber: this.state.input + value,
      input: this.state.input + value
    })
  }

  // addZero = (value) => {
  //   if(this.state.input!=='') {
  //    this.setState({
  //     currentNumber: this.state.input + value,
  //     input: this.state.input + value
  //    })
  //   }
  // }

  addDot =(value) => {

    if((this.state.input).indexOf('.')===-1&& this.state.input!=='') {
      this.setState({
        input: this.state.input +value
      })
    }
  }
  clearValue = () => {
    this.setState({
      input: ''  
    })
  }

  sum = () => {
    this.setState({
      preNumber:this.state.currentNumber ,
      input: '',
      operator:'+'
    })
  }
  subtract = () => {
    this.setState({
      preNumber:this.state.currentNumber ,
      input: '',
      operator:'-'
    })
  }

  multiply = () => {
    this.setState({
      preNumber:this.state.currentNumber ,
      input: '',
      operator:'*'
    })
  }
  divide = () => {
    this.setState({
      preNumber:this.state.currentNumber ,
      input: '',
      operator:'/'
    })
  }
  evaluate = () => {
    if(this.state.operator==='+') {
      
      this.setState({
        input: parseFloat(this.state.preNumber) + parseFloat(this.state.currentNumber),
        operator: '='
      })
    }
    if(this.state.operator==='-') {
      
      this.setState({
        input: parseFloat(this.state.preNumber) - parseFloat(this.state.currentNumber),
        operator: '='
      })
    }
    if(this.state.operator==='*') {
      
      this.setState({
        input: parseFloat(this.state.preNumber) * parseFloat(this.state.currentNumber),
        operator: '=' 
      })
    }
    if(this.state.operator==='/') {
      
      this.setState({
        input: parseFloat(this.state.preNumber) / parseFloat(this.state.currentNumber),
        operator: '=' 
      })
    }
  }

  render() {
    return (

      <div className="App">
        <div>
          <Input>  {this.state.input} </Input> 
        </div>
        <div className="row">
            <Button handleClick={this.addValue}>7</Button>
            <Button handleClick={this.addValue}>8</Button>
            <Button handleClick={this.addValue}>9</Button>
            <Button handleClick={this.sum}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addValue}>4</Button>
            <Button handleClick={this.addValue}>5</Button>
            <Button handleClick={this.addValue}>6</Button>
            <Button handleClick={this.subtract}>-</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addValue}>1</Button>
            <Button handleClick={this.addValue}>2</Button>
            <Button handleClick={this.addValue}>3</Button>
            <Button handleClick={this.multiply}>*</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addDot}>.</Button>
            <Button handleClick={this.addValue}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.divide}>/</Button>
        </div>
        <div>
          <ClearButton handleClear={this.clearValue} > Clear</ClearButton>
        </div>
      </div>
    );
  }
}
export default App;
