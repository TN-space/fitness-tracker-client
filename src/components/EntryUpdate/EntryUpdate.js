import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { entryShow } from '../../api/entries'
import UpdateEntryForm from './UpdateEntryForm'
import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'
import axios from 'axios'

const EntryUpdate = ({ id, user, msgAlert }) => {
  const [entry, setEntry] = useState({
    date: '',
    activity: '',
    duration: '',
    note: ''
  })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    entryShow(id, user)
      .then(res => setEntry(res.data.entry))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setEntry(entry => ({ ...entry, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/entries/${id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { entry }
    })
      .then(() => setUpdated(true))
      .then(() => msgAlert({
        heading: 'Update Entry Succesfully',
        message: messages.updateSuccess,
        variant: 'success'
      }))
      .catch(error => {
        setEntry({
          date: '',
          activity: '',
          duration: '',
          note: ''
        })
        msgAlert({
          heading: 'Update Failed, error: ' + error.message,
          message: messages.updateFailure,
          variant: 'danger'
        })
      })
  }

  if (updated) {
    return <Redirect to={`/entries/${id}`} />
  }

  return (
    <div>
      <UpdateEntryForm
        entry={entry}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/entries/${id}`}
      />
    </div>
  )
}

export default EntryUpdate
