import React from 'react';

function Button( {type, clickHandler, children}) {
    return (
        <div>
            <button
            type={type}
            onClick={clickHandler}
            >{children}</button>
        </div>
    );
}

export default Button;