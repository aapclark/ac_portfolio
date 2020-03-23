import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Row, Col } from 'shards-react';

const Header = () => {
  const navLinkStyle = {
    fontSize: '1.33rem'
  }

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
        <NavLink style={navLinkStyle} to='/work'>Work</NavLink>
        <NavLink style={navLinkStyle} to='/about'>About</NavLink>
        <NavLink style={navLinkStyle} to='/contact'>Contact</NavLink>
      </Navbar>
    </>
  )
}

export default Header;
