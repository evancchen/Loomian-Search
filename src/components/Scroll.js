import React from 'react';

const Scroll = (props) => {
    return ( 
        <div style = {{overflowY: 'scroll', border: '3px dashed dodgerblue',  height: '519px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;