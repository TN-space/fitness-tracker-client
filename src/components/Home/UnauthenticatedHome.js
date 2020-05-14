import React from 'react'
// import { Link } from 'react-router-dom'
import background from './../../images/background.jpg'
// import Button from 'react-bootstrap/Button'

const Home = () => {
  // const imagePath = '../../../images/background.jpg'
  const styles = {
    color: '#dce6e4'
  }

  const img = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '80vh',
    width: '100%'
  }
  return (
    <div style={styles}>
      <h3>Sign-up and Sign-in to start Tracking your Progess!</h3>
      <h3>Don&apos;t be lazy like this polar bear!!!</h3>
      <div style={img}>
      </div>
    </div>
  )
}

export default Home
