import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from "../layouts/PageHeader.tsx";

const HomePage = props => {
    let nolla = 0;
    nolla += 0

    return (
        <div className="max-h-screen flex flex-col">
            <PageHeader title="Home"/>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;