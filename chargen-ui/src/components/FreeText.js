import React from 'react';

function FreeText(props) {
    return (
        <div>
            <div>{props.title}</div>
            <input type="text" name={props.name}/>
        </div>
    );
}

export default FreeText;