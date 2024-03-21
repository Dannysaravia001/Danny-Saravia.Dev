import React, { useState } from 'react';
import Home from './assets/components/Home/Home';
import About from './assets/components/About/About';
import Projects from './assets/components/Projects/Projects';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          </Nav>
        </Container>
      </Navbar>
      {renderPage()}
    </>
  );
}

export default App;