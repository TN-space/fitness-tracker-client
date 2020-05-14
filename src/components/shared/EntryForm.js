import React from 'react'
import { Link } from 'react-router-dom'

const EntryForm = ({ entry, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Date</label>
    <input
      type="date"
      placeholder="mm/yy/yyyy"
      value={entry.date}
      name="date"
      onChange={handleChange}
    /><br/>

    <label>Activity *</label>
    <input
      placeholder="run, hiit, etc"
      value={entry.activity}
      name="activity"
      onChange={handleChange}
    /><br/>

    <label>Duration *</label>
    <input
      placeholder="in minutues"
      value={entry.duration}
      name="duration"
      onChange={handleChange}
    /><br/>

    <label>Note</label>
    <input
      placeholder="anything extra?"
      value={entry.note}
      name="note"
      onChange={handleChange}
    /><br/>

    <button type="submit">Save</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link><br/>
  </form>
)

export default EntryForm
