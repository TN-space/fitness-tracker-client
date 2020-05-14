import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

// import a piece - entryIndex from a whole file - entries
import { entryIndex } from '../../api/entries'
// import a whole file - messages
import messages from '../AutoDismissAlert/messages'

const EntryIndex = ({ match, user, msgAlert }) => {
  const [entries, setEntries] = useState([])
  // const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    entryIndex(user)
      .then(res => setEntries(res.data.entries))
      .then(() => msgAlert({
        heading: 'Fetch Entries Succesfully',
        message: messages.indexSuccess,
        variant: 'success'
      }))
      // {
      //   // Need FIXING!!!
      //   console.log('entriesss', entries)
      //   if (entries.length === 0) {
      //     msgAlert({
      //       heading: 'Failed to Fetch any entries',
      //       message: messages.indexFailure,
      //       variant: 'danger'
      //     })
      //   } else {
      //     msgAlert({
      //       heading: 'Fetch Entries Succesfully',
      //       message: messages.indexSuccess,
      //       variant: 'success'
      //     })
      //   }
      // }
    // )
      // .then(() => history.push('/'))
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
    <ul key={entry.id}>
      <h3>Date: {entry.date}</h3>
      <h5>Activity: {entry.activity}</h5>
      <h5>Duration: {entry.duration}</h5>
      <h5>Note: {entry.note}</h5>
      <Link to={`/entries/${entry.id}`}>
        <Button>View</Button>
      </Link>
      <hr />
    </ul>
  ))

  return (
    <div>
      <ul>
        {eachEntry}
      </ul>
    </div>
  )
}
//       <Button onClick={() => entryDelete(entry.id, user)}>Delete</Button>
export default EntryIndex
