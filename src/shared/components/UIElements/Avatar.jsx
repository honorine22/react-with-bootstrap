import React from 'react';

function Avatar(props) {
    return (
        <img
            src={props.src}
            className={`${props.className}`}
            alt={props.alt}
            style={{ width: props.width, height: props.height }}
        />
    );
}

export default Avatar;