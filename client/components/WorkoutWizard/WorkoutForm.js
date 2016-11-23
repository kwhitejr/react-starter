import React, { Component, PropTypes } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const WorkoutForm = ({ currentExercise, setIndex, handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <Field 
        name={currentExercise.name} 
        type="number" 
        placeholder={`enter ${currentExercise.track}`} 
        component={renderField} 
        label="exercise" />
      <div>
        <button type="submit" className="next">Submit</button>
      </div>
    </form>
  ) 
}

WorkoutForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  currentExercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    reps: PropTypes.array.isRequired, 
    track: PropTypes.string.isRequired,
  }).isRequired,
};

export default reduxForm({
  form: 'workout',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  initialValues: {}
  validate
})(WorkoutForm)