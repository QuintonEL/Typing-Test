import React, { Component }from 'react';
import Preview from './components/Preview'
import Speed from './components/Speed';


const initialState = {
  text: 'test',
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false, 
  finished: false,
}

class App extends Component {

  state = initialState;

  onRestart = () => {
    this.setState(initialState);
  }

  onUserInputChange = (e) => {
    const value = e.target.value;
    this.setTimer();
    this.onFinish(value);
    this.setState({
      userInput: value,
      symbols: this.countCorrectSymbols(value)
    });
  }

  onFinish(userInput) {
    if(userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      })
    }
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length;
  }

  setTimer() {
    if(!this.state.started) {
      this.setState({started: true});
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      }, 1000)
    }
  }

  render() {
    return (
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <Preview text={this.state.text} userInput={this.state.userInput}/>
            <textarea
              className='form-control mb-3'
              placeholder='Start typing...'
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              readOnly={this.state.finished}
            >
            </textarea>
            <Speed symbols={this.state.symbols} sec={this.state.sec}/>
            <div className='text-right'>
              <button className='btn btn-light' onClick={this.onRestart}>Restart</button>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default App;
