import React from 'react'
// import { Link } from 'react-router-dom'
import workout from './../../images/workoutBear.jpg'
// import Button from 'react-bootstrap/Button'

const Home = () => {
  const img = {
    backgroundImage: `url(${workout})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '80vh',
    width: '100%'
  }

  const h3style = {
    paddingTop: '10px',
    fontSize: '2rem',
    // display: 'flex',
    // justifyContent: 'center',
    color: '#dce6e4'
  }

  return (
    <div>
      <h3 style={h3style}>Create new entries to start Tracking you Progress NOW!!</h3>
      <div style={img}>
      </div>
    </div>
  )
}

export default Home
