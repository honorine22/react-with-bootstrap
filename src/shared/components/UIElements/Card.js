import React from 'react';

function Card(props) {
    return (
        <div className="card border-0 shadow p-3 mb-5 bg-white rounded">
            {props.children}
        </div>
    );
}

export default Card;