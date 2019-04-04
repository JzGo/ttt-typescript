import React from 'react';

function Square(props) {
    console.log(props)
    return (
        <div className="square" onClick={props.attack}>{props.pos}</div>
    )
}

export default Square;