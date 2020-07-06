import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

// import a piece - entryIndex from a whole file - entries
import { entryIndex } from '../../api/entries'
// import a whole file - messages
import messages from '../AutoDismissAlert/messages'
import chillin from './../../images/chillinBear.jpg'

const EntryIndex = ({ match, user, msgAlert }) => {
  const [entries, setEntries] = useState([])
  // const [deleted, setDeleted] = useState(false)

  const img = {
    backgroundImage: `url(${chillin})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '90vh',
    width: '100%'
  }

  const styles = {
    color: '#FFFF99',
    paddingTop: '15px',
    paddingLeft: '15px',
    paddingRight: '15px'
    // background: '-webkit-linear-gradient(#FFFF99, #333)',
    // webkitBackgroundClip: 'text',
    // webkitTextFillColor: 'transparent'
  }
  const glow = {
    boxShadow: '0 0 5px rgba(81, 203, 238, 1)',
    padding: '3px 0px 3px 3px',
    margin: '5px 1px 3px 0px',
    border: '1px solid rgba(81, 203, 238, 1)',
    background: 'rgba(0, 0, 0, 0.5)'

  }

  useEffect(() => {
    entryIndex(user)
      .then(res => setEntries(res.data.entries))
      .catch(error => {
        msgAlert({
          heading: 'Fetch Entries Failed, error: ' + error.message,
          message: messages.indexFailure,
          variant: 'danger'
        })
      })
  }, [])

  if (!entries) {
    return <h3>Please add more entries...</h3>
  }

  const eachEntry = entries.map(entry => (
    <div key={entry.id} style={glow}>
      <h2>Date: {entry.date}</h2>
      <h4>Activity: {entry.activity}</h4>
      <h5>Duration: {entry.duration}</h5>
      <h5>Note: {entry.note}</h5>
      <Link to={`/entries/${entry.id}`}>
        <Button>View</Button>
      </Link>
    </div>
  ))

  return (
    <div style={img}>
      <div style={styles}>
        {eachEntry}
      </div>
    </div>
  )
}

export default EntryIndex
