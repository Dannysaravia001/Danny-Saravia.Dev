import React from 'react';
import './Home.css';
import { FaInstagram, FaGithub } from 'react-icons/fa';

import Type from './Type';
const Home = () => {
    return (
        <div>
            <div></div>
            <h1>Hey there!</h1>
            <h2>
                I'm Danny, a web developer at The University Of Miami. 
                <br />
                I am:
            </h2>

            <div style={{fontSize: '30px', fontWeight: 'bold', color: '#7393B3', textAlign:'center'}}>
                <Type />
            </div>
            <p>
                
            </p>
            
        </div>
    );
};

export default Home;