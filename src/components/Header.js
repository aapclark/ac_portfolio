import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavLink, Container, Row, Col } from 'shards-react';

const Header = () => {

  return (
    <>
      <Container>
        <Row>
          <Col sm={{ size: 8, order: 2, offset: 2 }}>
            <h1 style={{ textAlign: 'center' }}>Aaron Clark</h1>
            <h4 style={{ textAlign: 'center' }}>Full Stack Web Developer</h4>
          </Col>
        </Row>
      </Container>
      <Navbar>
        <Link to='/work'>Work</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </Navbar>
    </>
  )
}

export default Header;