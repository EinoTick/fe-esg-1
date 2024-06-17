import React from 'react';
import PropTypes from 'prop-types';

PageHeader.propTypes = {
    
};

function PageHeader(props) {
    return (
        <h1>{props.title}</h1>
    );
}

export default PageHeader;