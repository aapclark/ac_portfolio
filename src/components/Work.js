import React from 'react'
import { Container, Col, Row, Card, CardBody, CardTitle, Button } from 'shards-react';

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
              <CardTitle style={cardTitleStyle}>Adio</CardTitle>
              <CardBody >
                <p>The collaborative songwriting platform for bands and musicians.</p>
                <h5>Summary</h5>
                <ul>
                  <li><p>Planned, designed, and implemented commenting bar feature to enable in-app communication between band members.</p></li>
                  <li><p>Conversations threads are organized by timestamp and render in position relative to their timestamp.</p></li>
                  <li><p>GraphQL subscriptions provide live updates of commenting.</p></li>
                </ul>
                <h5>Libraries and Frameworks Used</h5>
                <p>React, Apollo Client, React Virtualized, PostCSS</p>
                <div style={buttonContainer}>
                  <Button theme='info' href="https://www.adio.app/" style={cardButtonStyle}>App Site</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12}></Col>
          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>Apollo+Prisma in Docker</CardTitle>
              <CardBody >
                <p>Fully-featured boilerplate for quickly developing a backend with Apollo, Prisma, Jest, Postgres inside a single Docker container.</p>
                <h5>Summary</h5>
                <ul>
                  <li><p>Apollo, Prisma, and Postgres services exist in single Docker container with separate testing environment.</p></li>
                  <li><p>Python script for quickly loads ENV files.</p></li>
                  <li><p>Jest executes unit tests.</p></li>
                  <li><p>Various NPM scripts enable flexibility with running Apollo service inside or outside of container.</p></li>
                  <li><p>Babel configuration for ES6 syntax.</p></li>
                  <li><p>Documentation written with consideration of new users of tech stack.</p></li>
                  <li><p>Implementations on separate branches for Prisma 1 and Prisma 2.</p></li>
                </ul>
                <h5>Libraries and Frameworks Used</h5>
                <p>Apollo Server, Prisma, Jest, Babel, Docker, Python3</p>
                <div style={buttonContainer}>
                  <Button theme='info' href="https://github.com/aapclark/apollo_prisma_docker" style={cardButtonStyle}>GitHub</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12}>
            <Card style={cardStyle}>
              <CardTitle style={cardTitleStyle}>QualityHub - ResumeQ</CardTitle>
              <CardBody >
                <p>QualityHub is a suite of many services for having professional quality evaluated. </p>
                <h5>Summary</h5>
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
                <h5>Summary</h5>
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
                <h5>Summary</h5>
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
                <h5>Summary</h5>
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

        </Row>
      </Container >
    </>
  )
}

export default Work;
