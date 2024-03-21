import React from 'react';
import './Home.css';
import instagramLogo from './insta.png';
import githubLogo from './git.png';
import { FaInstagram, FaGithub } from 'react-icons/fa';

import Type from './Type';
const Home = () => {
    return (
        <div>
            <div></div>
            <h1>Hey there!</h1>
            <h2>
                I'm Danny, a web developer at The University Of Miami. 
            </h2>

            <div style={{fontSize: '30px', fontWeight: 'bold', color: '#7393B3', textAlign:'center'}}>
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
        <FaInstagram className="social-media-icon" />
    </a>
    <a href="https://github.com/Dannysaravia001" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-media-icon" />
    </a>
</div>
            </footer>
        </div>
    );
};

export default Home;