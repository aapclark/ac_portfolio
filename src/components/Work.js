import React from 'react'
import { Container, Col, Row, Card, CardBody, CardTitle, ListGroup, ListGroupItem, Button } from 'shards-react';

const Work = () => {
  const cardStyle = {
    margin: '.8rem auto',

  }
  const cardTitleStyle = {
    marginTop: '.65rem',
    marginLeft: '.65rem'
  }
  const cardButtonStyle = {
    textAlign: 'center',
    margin: '1rem auto'
  }



  return (
    <>
      <Container >
        <Row>
          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle} >Reducer To-Do</CardTitle>
              <CardBody >
                <ListGroup>
                  <ListGroupItem >Simple to-do list using React Reducer</ListGroupItem>
                  <ListGroupItem >Implemented Moment for date formatting. </ListGroupItem>
                  <ListGroupItem >Deployed on Zeit.</ListGroupItem>
                </ListGroup>
                <Button theme='info' href="https://reducer-todo-git-master.aapclark.now.sh/" style={cardButtonStyle}>Project Page</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>SafeRoutes</CardTitle>
              <CardBody >
                <ListGroup>
                  <ListGroupItem >Developed marketing page for SafeRoutes project using HTML and LESS.</ListGroupItem>
                  <ListGroupItem >Implemented Adobe Typekit Fonts.</ListGroupItem>
                </ListGroup>
                <Button theme='info' href="https://github.com/Build-Week-Safe-Routes/Marketing-Page-II" style={cardButtonStyle}>GitHub</Button>
              </CardBody>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>PinterEach</CardTitle>
              <CardBody >
                <ListGroup>
                  <ListGroupItem >PinterEach is a platform for saving articles. Users can save, assign tags to, and manage articles.</ListGroupItem>
                  <ListGroupItem >ReactJS was used along with Ant Design</ListGroupItem>
                </ListGroup>
                <Button theme='info' href="https://github.com/orgs/Pintereach-BuildWeek/" style={cardButtonStyle}>GitHub</Button>
              </CardBody>

            </Card>
          </Col>

          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>NASA Photo of the Day</CardTitle>
              <CardBody>
                <ListGroup>
                  <ListGroupItem >Site build using React and TailwindCSS</ListGroupItem>
                  <ListGroupItem >Used Axios to retrieve images from NASA APOD.</ListGroupItem>
                </ListGroup>
                <Button theme='info' href="https://github.com/aapclark/nasa-photo-of-the-day" style={cardButtonStyle} >GitHub</Button>
              </CardBody>
            </Card >
          </Col>

        </Row>
      </Container >
    </>
  )
}

export default Work;