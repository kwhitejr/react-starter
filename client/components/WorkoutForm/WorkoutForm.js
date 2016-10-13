import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const WorkoutForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="exercise" type="number" placeholder="enter..." component={renderField} label="exercise"/>
      <div>
        <button type="submit" className="next">Submit</button>
      </div>
    </form>
  ) 
}

WorkoutForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  selectedWorkout: PropTypes.shape({
    id: PropTypes.arrayOf(PropTypes.number).isRequired,
    title: PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        reps: PropTypes.array.isRequired,
      }).isRequired
    )
  }).isRequired,
};

export default reduxForm({
  form: 'workout',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate
})(WorkoutForm)