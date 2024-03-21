import React from 'react';
import './Home.css';
import instagramLogo from './insta.png';
import githubLogo from './git.png';

import Type from './Type';
const Home = () => {
    return (
        <div>
            <div></div>
            <h1>Welcome to my Portfolio!</h1>
            <h2>
                Hi, I'm Danny, a web developer at UM. 
            </h2>

            <div style={{fontSize: '30px', fontWeight: 'bold', color: '#7393B3'}}>
                <Type />
            </div>
            <p>
                This is my portfolio where I showcase my projects and skills in web development. 
                <br />
                I have a passion for creating user-friendly and visually appealing websites. 
                Feel free to explore my work and get in touch if you have any questions or opportunities 
                for collaboration.
                <br />
                Thank you for visiting!
            </p>
            <footer>
    <h3>See more about me</h3>
    <div className="social-media">
        <a href="https://www.instagram.com/saraviadanny1223" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="social-media-icon" />
        </a>
        <a href="https://github.com/Dannysaravia001" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="social-media-icon" />
        </a>
    </div>
</footer>
        </div>
    );
};

export default Home;