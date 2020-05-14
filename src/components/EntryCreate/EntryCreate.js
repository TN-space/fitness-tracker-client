import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { entryCreate } from '../../api/entries'
import EntryForm from '../shared/EntryForm'
import messages from '../AutoDismissAlert/messages'

const EntryCreate = ({ user, msgAlert }) => {
  const [entry, setEntry] = useState({
    date: '',
    activity: '',
    duration: '',
    note: ''
  })
  const [createdEntryId, setCreatedEntryId] = useState(null)

  const handleChange = event => {
    event.persist()
    setEntry(entry => ({ ...entry, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    entryCreate(user, entry)
      .then(res => setCreatedEntryId(res.data.entry.id))
      .then(() => msgAlert({
        heading: 'Create Entry Succesfully',
        message: messages.createSuccess,
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
          heading: 'Create Failed, error: ' + error.message,
          message: messages.createFailure,
          variant: 'danger'
        })
      })
  }

  if (createdEntryId) {
    return <Redirect to={`/entries/${createdEntryId}`} />
  }

  return (
    <div>
      <EntryForm
        entry={entry}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/'
      />
    </div>
  )
}

export default EntryCreate
