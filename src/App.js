import React from 'react';
import { Container, Row, Col } from 'shards-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "shards-ui/dist/css/shards.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./images/profileimg.jpg"

import Image from './components/Image'
import Header from './components/Header';
import Contact from './components/Contact';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', marginBottom: '-10rem' }}>
      <Router>
        <Container>
          <Col sm={{ size: 8, order: 2, offset: 2 }}>
            <Image />
          </Col>
          <Col sm={{ size: 8, order: 2, offset: 2 }}>
            <Header />
          </Col>
          <Container>
            <Row>
              <Col sm={{ size: 8, order: 2, offset: 2 }}>
                <Switch>
                  <Route path='/work'>
                    <Work />
                  </Route>
                  <Route path='/about'>
                    <About />
                  </Route>
                  <Route path='/contact'>
                    <Contact />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
