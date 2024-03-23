import React from 'react';
import Self from './Self.jpg';
import SkillSet from './Skills';
import Tools from './Tools';
import './About.css';
import Type from './Type';

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="image-container">
                <img src={Self} alt="Myself" className="self-image" />
            </div>
            <div style={{fontSize: '30px', fontWeight: 'bold', color: '#efd604', textAlign:'center'}}>
                <Type />
            </div>

            <p>I've been always interested in the tech world since i was little and took apart my playstation just to put it back together (even though I had extra screws after that... ) 
                <br />
                At the beginning of 2020 i started working on computers and building custom pcs, ive built around 3 and my personal computer has changed many times since my skills grew.
                
            </p>
            <p>But i had a realization, Since i knew hardware, why not learn software?</p>
            <p>I've lived in Florida my whole life and went to school here. I graduated high school in 2020 and started learning to code in September 2023 through the University of Miami and EdX. Since then, I've picked up several language libraries, such as:
                <br />
                react, node, express, and many more. i also aspire to learn more about IT and cybersecurity as well.
            </p>
            <div className="likes">
                <h2 style={{color:'#efd604'}}>Things I Like:</h2>
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
                    <h2><span style={{color:'#efd604'}}> Languages </span> I Use</h2>
                    <SkillSet />
                </div>
                <div className="toolSet">
                    <h2><span style={{color:'#efd604'}}>Tools</span> I Use</h2>
                    <Tools />
                </div>
        </div>
    );
};

export default AboutMe;