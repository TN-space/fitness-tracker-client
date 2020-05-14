import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EntryForm = ({ entry, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h2>Create Entry</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            name="date"
            value={entry.date}
            type="date"
            placeholder="mm/dd/yyyy"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="activity">
          <Form.Label>Activity</Form.Label>
          <Form.Control
            required
            name="activity"
            value={entry.activity}
            type="text"
            placeholder="run, walk, swim, etc."
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="duration">
          <Form.Label>Duration</Form.Label>
          <Form.Control
            required
            name="duration"
            value={entry.duration}
            type="number"
            placeholder="in minutes"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="note">
          <Form.Label>Note</Form.Label>
          <Form.Control
            name="note"
            value={entry.note}
            type="text"
            placeholder="anything you want to add?"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Create
        </Button>
        <Link to={cancelPath}>
          <Button>Cancel</Button>
        </Link>
      </Form>
    </div>
  </div>
)

export default EntryForm
