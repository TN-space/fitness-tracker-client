import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'
import axios from 'axios'

// import a piece - entryIndex from a whole file - entries
import { entryShow } from '../../api/entries'

const EntryShow = ({ id, user, msgAlert }) => {
  const [entry, setEntry] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    entryShow(id, user)
      .then(res => setEntry(res.data.entry))
      .catch(console.error)
  }, [])

  const deleteEntry = () => {
    axios({
      url: `${apiUrl}/entries/${id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => msgAlert({
        heading: 'Delete Entry Succesfully',
        message: messages.deleteSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Delete Failed, error: ' + error.message,
          message: messages.deleteFailure,
          variant: 'danger'
        })
      })
  }

  const glow = {
    boxShadow: '0 0 5px rgba(81, 203, 238, 1)',
    padding: '3px 0px 3px 3px',
    margin: '5px 1px 3px 0px',
    border: '1px solid rgba(81, 203, 238, 1)',
    background: 'rgba(0, 0, 0, 0.5)'

  }

  if (!entry) {
    return 'loading...'
  }

  if (deleted) {
    return <Redirect to={'/entries'} />
  }

  const oneEntry = (
    <div style={glow}>
      <h3>Date: {entry.date}</h3>
      <h5>Activity: {entry.activity}</h5>
      <h5>Duration: {entry.duration}</h5>
      <h5>Note: {entry.note}</h5>
      <Link to={'/entries'}>
        <Button>View all</Button>
      </Link>
      <Link to={`/entries/${entry.id}/update-entry`}>
        <Button>Update</Button>
      </Link>
      <Button onClick={deleteEntry}>Delete</Button>
    </div>
  )
  return (
    <div>
      <ul>
        {oneEntry}
      </ul>
    </div>
  )
}

export default EntryShow
