import React from 'react';

function DefaultButton({title, click}) {
    return (
        <div>
            <button onClick={click}>{title}</button>
        </div>
    )
}

export default DefaultButton;