import React from 'react';

function Counter({fruitName, type, decrement, increment, fruitValue, isDisabled}) {
    return (
    <div className="counter-box">
        <h2>{fruitName}</h2>
        <button
            type={type}
            onClick= {decrement}
            disabled={isDisabled}
        >-</button>
        {fruitValue}
    <button
        type={type}
        onClick={increment}
        >+</button>
    </div>

    );
}

export default Counter;