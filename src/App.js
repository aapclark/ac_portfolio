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

function App() {
  return (
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
      </Container>
    </Router>
  );
}

export default App;
