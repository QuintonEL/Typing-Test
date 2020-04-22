import React, { Component }from 'react';

import Preview from './components/Preview'
import Speed from './components/Speed';

class App extends Component {
  render() {
    return (
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <Preview />
            <textarea
              className='form-control mb-3'
              placeholder='Start typing...'
            >
            </textarea>
            <Speed />
            <div className='text-right'>
              <button className='btn btn-light'>Restart</button>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default App;
