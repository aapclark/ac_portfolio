import React from 'react'
import { Card, Container } from 'shards-react'

const Contact = () => {

  const cardStyle = {
    margin: '1rem auto',
    padding: '1.25rem'
  }

  const headerStyle = {
    textAlign: 'center',
    margin: '1rem'
  }

  return (
    <Container>
      <h2 style={headerStyle}>Contact</h2>
      <Card style={cardStyle}>
        <a href='https://github.com/aapclark'>Github</a>
        <a href='https://www.linkedin.com/in/aapclark/'>LinkedIn</a>
        <hr />
        <p>(651) 252-1568‬</p>
        <p>aaronpclark at protonmail.com</p>
      </Card>
    </Container>
  )
}


export default Contact
