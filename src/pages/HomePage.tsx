import React from 'react';
import Button from "../components/Button.tsx";
import forrest1 from '../assets/forrest1.png'

const HomePage = props => {
    let nolla = 0;
    nolla += 0

    return (
        <div className="home-page-container max-h-screen flex flex-col">
            <div className="blurred-light"></div>
            <section className="hero">
                <div className="hero__left">
                    <h1 className="mb-2">Kestävän kehityksen puolella</h1>
                    <div className="base-text mb-16">
                        Ole kestävän kehityksen edelläkävijä ja hanki huomisen kilpailuvaltti
                    </div>
                    <Button buttonText="Tilaa Konsultointi"/>
                </div>
                <div className="hero__right">
                    <img className="hero__img" src={forrest1} alt="asdf"/>

                </div>

            </section>
        </div>
    );
};

HomePage.propTypes = {
    //buttonText: string,
};

export default HomePage;