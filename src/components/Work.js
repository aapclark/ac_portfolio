import React from 'react'
import { Container, Col, Row, Card, CardBody, CardTitle, ListGroup, ListGroupItem, Button } from 'shards-react';

const Work = () => {
  const cardStyle = {
    margin: '.8rem auto',

  }
  const cardTitleStyle = {
    fontSize: '1.75rem',
    marginTop: '1rem',
    marginLeft: '1rem'
  }
  const buttonContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    // flexBasis: '40%',
    justifyContent: 'space-around',

  }
  const cardButtonStyle = {
    textAlign: 'center',
    margin: '1rem auto'
  }

  const headerStyle = {
    textAlign: 'center',
    margin: '1rem'
  }



  return (
    <>
      <Container >
        <h2 style={headerStyle}>Assorted Projects</h2>
        <Row>
          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>QualityHub - ResumeQ</CardTitle>
              <CardBody >
                <p>QualityHub is a suite of many services for having professional quality evaluated. </p>
                <h5>App Features</h5>
                <p>Our team worked together to build ResumeQ, a microservice where users can list their resume-reviewing services on a marketplace to assist job-seekers in obtaining quality feedback on their resumes.</p>
                <h5>Libraries and Frameworks Used</h5>
                <p>The frontend was built using React and Apollo Client. Apollo Federation and Node were used to unite individual backends and databases for the Core (user management), InterviewQ, and ResumeQ services in a single endopint. Each federation member was built using Apollo Server, Prisma, and Postgres. Docker was invaluable in developing the project locally.</p>
                <div style={buttonContainer}>
                  <Button theme='info' href="https://github.com/aapclark/quality-hub-core-fe" style={cardButtonStyle}>GitHub Page - Frontend</Button>
                  <Button theme='info' href="https://github.com/aapclark/quality-hub-resume-be" style={cardButtonStyle}>GitHub Page - ResumeQ</Button>
                  <Button theme='info' href="https://github.com/aapclark/quality-hub-core-be" style={cardButtonStyle}>GitHub Page - Core</Button>
                  <Button theme='info' href="https://github.com/aapclark/interview-q-be" style={cardButtonStyle}>GitHub Page - InterviewQ</Button>
                  <Button theme='info' href="https://github.com/aapclark/quality-hub-gateway-be" style={cardButtonStyle}>GitHub Page - Federation</Button>
                  <Button theme='info' href="https://qualityhub19.netlify.com/" style={cardButtonStyle}>Project Site</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>Testify - Backend</CardTitle>
              <CardBody >
                <p>Testify is a test managing app for instructors and students of all class sizes.</p>
                <h5>App Features</h5>
                <p>This app's backend contains enables users of the app to store user onboarding information, create and save tests, administer tests, and take and submit tests.</p>
                <h5>Libraries and Frameworks Used</h5>
                <p>This server was written using NodeJS and express. User authentication was handled using custom middleware, bcryptjs, and jsonwebtoken. In production, sqlite3 was used to manage the database. Once deployed on Heroku, the database was switched to Postgres. Knex was used for easy interaction with the database. Jest and supertest were used for testing during development. </p>
                <div style={buttonContainer}>
                  <Button theme='info' href="https://github.com/Testify-bw/Backend" style={cardButtonStyle}>GitHub Page</Button>
                  <Button theme='info' href="https://wunderlist-two.herokuapp.com/" style={cardButtonStyle}>Project Site</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>WunderList 2.0 - Frontend</CardTitle>
              <CardBody >
                <p>WunderList 2.0 is a task-list app which allows users to create, edit, delete tasks while assigning due dates and importance.</p>
                <h5>App Features</h5>
                <p>After registering or loggin in, users are able to view their current list of tasks. The view of tasks can be controlled to show tasks within a certain date range along with a toggle of completed tasks.</p>
                <h5>Libraries and Frameworks Used</h5>
                <p>WunderList 2.0 was built using React. State is managed within local components and across the app using Redux. Interaction with the backend is handled using Axios with jwt-decode handling authorization tokens. Ant Design provided a wonderful set of consistently-styled components.</p>
                <div style={buttonContainer}>
                  <Button theme='info' href="https://github.com/BW-Wunderlist-2-0/Front-end" style={cardButtonStyle}>GitHub Page</Button>
                  <Button theme='info' href='https://front-end.aapclark.now.sh/' style={cardButtonStyle}>
                    Project Page
                  </Button>
                </div>
              </CardBody>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>PinterEach - Frontend</CardTitle>
              <CardBody >
                <h5>App Features</h5>
                <p>PinterEach is a platform for saving articles. Users can save, assign tags to, and manage articles.
                <h5>Libraries and Frameworks Used</h5>
                  ReactJS was used along with Ant Design Library</p>
                <div style={buttonContainer}>
                  <Button theme='info' href="https://github.com/orgs/Pintereach-BuildWeek/" style={cardButtonStyle}>GitHub
                </Button>
                </div>
              </CardBody>

            </Card>
          </Col>

          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>NASA Photo of the Day</CardTitle>
              <CardBody>
                <h5>App Features</h5>
                <p>Site build using React and TailwindCSS
    Used Axios to retrieve images from NASA APOD.</p>
                <div style={buttonContainer}>
                  <Button theme='info' href="https://github.com/aapclark/nasa-photo-of-the-day" style={cardButtonStyle} >GitHub</Button>
                </div>
              </CardBody>
            </Card >
          </Col>

        </Row>
      </Container >
    </>
  )
}

export default Work;
