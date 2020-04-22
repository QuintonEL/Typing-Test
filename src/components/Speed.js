import React from 'react';

export default (props) => {

  if(props.symbols !== 0 && props.sec !== 0) {
    const wpm = (props.symbols/5)/(props.sec/60);
    return (
      <div className='text-primary'>{Math.round(wpm)} WPM</div>
    )
  }

  return <div className='text-primary'> 0 WPM</div>;
}