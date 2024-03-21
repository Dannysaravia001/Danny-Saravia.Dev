import React from 'react';
import Self from './Self.jpg';
import SkillSet from './Skills';
import Tools from './Tools';
import './About.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="image-container">
                <img src={Self} alt="Myself" className="self-image" />
            </div>
            <h1>About Me</h1>
            <p>I've lived in Miami my whole life and went to school here. I graduated high school in 2020 and started learning to code in September 2023 through the University of Miami and EdX. Since then, I've picked up several language libraries, such as:
                <br />
                react, node, express, and many more. i also aspire to learn more about IT and cybersecurity as well.
            </p>
            <div className="likes">
                <h2>Things I Like:</h2>
                <p>
                    Learning new things
                    <br/>
                    Working on Computers
                    <br/>
                    Playing video Games
                    <br/>
                    Making Music
                 </p>
            </div>
            <div className="skillSet">
                    <h1><span style={{color:'#2e74b7'}}> Languages </span> I Use</h1>
                    <SkillSet />
                </div>
                <div className="toolSet">
                    <h1><span style={{color:'#2e74b7'}}>Tools</span> I Use</h1>
                    <Tools />
                </div>
        </div>
    );
};

export default AboutMe;