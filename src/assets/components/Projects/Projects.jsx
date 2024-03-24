import React from 'react';
import './Project.css';
import Portfolio from './img/Portfolio.png';
import Schedule from './img/Schedule.png';
import Project1 from './img/project.png';

const Projects = () => {
    return (
      <div className="projects">
        <h1>Project Page</h1>
        <p>Here are a some of the few projects that I've worked on either in collaboration or solo.</p>
        <div className="project-container colored-container">
          <div className="projectCard">
            <h2>My First Portfolio</h2>
            <div className="project-content">
              <img className="projectImg" src={Portfolio} alt="Project 1 Image" />
              <p>This was my very first portfolio, and it shows how far I've come since September. It only uses HTML and CSS, without any JavaScript.</p>
            </div>
          </div>
          <div className="projectCard">
            <h2>Workday Scheduler</h2>
            <div className="project-content">
              <img className="projectImg" src={Schedule} alt="Project 2 Image" />
              <p>This is my first experience working with JavaScript, where I've been learning about time clock functionality and how to use APIs.</p>
            </div>
          </div>
          <div className="projectCard">
            <h2>My First Project</h2>
            <div className="project-content">
              <img className="projectImg" src={Project1} alt="Project 3 Image" />
              <p>This was the first time I worked with my classmates and made a cryptocurrency tracker that gives you a little joke every time you reload the page. This project demonstrated my ability to work with a group towards one goal.</p>
              <div className="projectLinks">
                <a href="https://dannysaravia001.github.io/Cryptos-and-Comics/">View Project</a>
              </div>
            </div>
          </div>
          <div>
            <p>Overall, the skills that I learned from these projects have shaped me into who I am today.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;