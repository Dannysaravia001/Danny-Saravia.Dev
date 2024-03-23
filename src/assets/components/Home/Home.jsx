import React from 'react';
import ParticleEffect from "../Particle/ParticleEffect";
import Type from './Type';

const Home = () => {
    return (
        <div>
            
            <div>
            
            <ParticleEffect />
                <h1>Hey there!</h1>
                <h2>
                    I'm Danny, I study Web Development at The University Of Miami.
                    <br />
                    And I am:
                </h2>

                <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#7393B3', textAlign: 'center' }}>
                    <Type />
                </div>
                <p>
                    And this webpage is a glimpse of what I can do.
                    <br />
                    I hope you enjoy it!
                </p>
            </div>
        </div>
    );
};

export default Home;