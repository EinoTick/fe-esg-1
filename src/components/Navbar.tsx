import React from 'react';

const Navbar = () => {

    const numbers = [1, 2, 3, 4, 5];
    for (let number of numbers) {
        console.log(number)
    }
    numbers.forEach(number => { console.log(number) })


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="header-1"></div>
            <div className="header-2"></div>
            <div className="header-3"></div>

            <a className="navbar-brand" href="/"></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;