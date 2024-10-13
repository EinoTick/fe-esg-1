import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {};


function Button(props: { buttonText: string; }) {
    const buttonText = props.buttonText ?? 'button'

    function onClick() {
        console.log('clicked');
    }

    return (
        <button onClick={onClick}>{buttonText}</button>
    );
}

export default Button;