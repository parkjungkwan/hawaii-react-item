import React from 'react';

export const Counter = React.memo(({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>카운트 : {number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
});

