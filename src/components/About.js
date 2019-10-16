import React from 'react'
import { Card } from 'shards-react';

const About = () => {


  const cardStyle = {
    margin: '.8rem auto',
    padding: '.6rem'

  }

  return (
    <>
      <Card style={cardStyle}>I am a Lambda School WEB23 student. I've spent most of the last six years working in coffee. For the last few years I oversaw launching and operating Botany Coffee in Minneapolis. I have enjoyed computer programming here and there for fun and am excited to challenge myself to learn more.</Card>
    </>
  )
}

export default About;