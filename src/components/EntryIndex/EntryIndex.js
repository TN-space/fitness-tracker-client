import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

import { entryIndex } from '../../api/entries'

// import axios from 'axios'
// import apiUrl from '../../apiConfig'

const EntryIndex = ({ user }) => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    entryIndex(user)
      .then(res => setEntries(res.data.entries))
      .catch(console.error)
  }, [])

  const eachEntry = entries.map(entry => (
    <ul key={entry.id}>
      <h3>Date: {entry.date}</h3>
      <h5>Activity: {entry.activity}</h5>
      <h5>Duration: {entry.duration}</h5>
      <h5>Note: {entry.note}</h5>
    </ul>
    // <li key={entry.id}>
    //   <Link to={`/entries/${entry.id}`}>{entry}</Link>
    // </li>
  ))
  return (
    <div>
      <ul>
        {eachEntry}
      </ul>
    </div>
  )
}

export default EntryIndex
