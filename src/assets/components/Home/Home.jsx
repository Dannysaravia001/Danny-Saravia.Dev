import React from 'react';
import './Home.css';
import Type from './Type';
const Home = () => {
    return (
        <div>
            <h1>Welcome to my Portfolio!</h1>
            <p>
                Hi, I'm Danny, a web developer at UM. </p>

                <div style={{fontSize: '30px', fontWeight: 'bold', color: '#7393B3'}}>
                            <Type />
                        </div>
                <p>This is my portfolio where I showcase my projects and skills in web development. 
                I have a passion for creating user-friendly and visually appealing websites. 
                Feel free to explore my work and get in touch if you have any questions or opportunities 
                for collaboration. Thank you for visiting!
            </p>
        </div>
    );
};

export default Home;