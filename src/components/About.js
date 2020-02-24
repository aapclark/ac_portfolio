import React from 'react'
import { Card, Container } from 'shards-react';

const About = () => {


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
      <h2 style={headerStyle}>About Me</h2>
      <Card style={cardStyle}>Hi, I am Aaron! Prior to pursuing web development, I spent six years working in the specialty coffee industry. From 2016-2019 I laucnhed and operated Botany Coffee in Minneapolis, MN. My work in coffee and development have both involved the rewarding process of listening, understanding, learning, and creative problem solving. I find a lot of joy in working collaboratively to build projects that excite others.</Card>
    </Container>
  )
}

export default About;
