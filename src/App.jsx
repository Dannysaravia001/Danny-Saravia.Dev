import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/components/Home/Home';
import About from './assets/components/About/About';
import Projects from './assets/components/Projects/Projects';
import Contact from './assets/components/Contact/Contact';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Danny Saravia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPage('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setPage('about')}>About Me</Nav.Link>
            <Nav.Link onClick={() => setPage('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => setPage('contact')}>Contact Me!</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {renderPage()}
      <footer>
      <p>© 2024 Danny Saravia</p>
        <div className="social-media">
          <a href="https://www.instagram.com/saraviadanny1223" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-media-icon" />
          </a>
          <a href="https://github.com/Dannysaravia001" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-media-icon" />
          </a>
          <a href="https://www.linkedin.com/in/danny-saravia-0a4298300/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-media-icon" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
