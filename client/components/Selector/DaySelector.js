import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

let DaySelector = (props) => {

  const { handleSubmit, pristine, previousPage, submitting, phase } = props
  console.log(phase);
  return (
    <form onSubmit={handleSubmit}>
      <label>Choose Day</label>
      <div>
        <label><Field name="day" component="input" type="radio" value="1"/> Day 1: Back & Rear Deltoids</label>
        <label><Field name="day" component="input" type="radio" value="2"/> Day 2: Chest & Front Deltoids</label>
        <label><Field name="day" component="input" type="radio" value="3"/> Day 3: Legs & Calves</label>
        <label><Field name="day" component="input" type="radio" value="4"/> Day 4: Arms & Traps</label>
        <Field name="day" component={renderError}/>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  ) 
}

DaySelector = reduxForm({
  form: 'selector',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate
})(DaySelector)

const selector = formValueSelector('selector')
export default DaySelector = connect(
  state => {
    const phase = selector(state, 'phase')
    return {
      phase
    }
  }
)(DaySelector);








// const PhaseOne = () => {
//   <div>
//     <label><Field name="day" component="input" type="radio" value="1"/> Day 1: Back & Rear Deltoids</label>
//     <label><Field name="day" component="input" type="radio" value="2"/> Day 2: Chest & Front Deltoids</label>
//     <label><Field name="day" component="input" type="radio" value="3"/> Day 3: Legs & Calves</label>
//     <label><Field name="day" component="input" type="radio" value="4"/> Day 4: Arms & Traps</label>
//   </div>
// }

// const PhaseTwo = () => {
//   <label><Field name="day" component="input" type="radio" value="1"/> Day 1: Legs & Calves</label>
//   <label><Field name="day" component="input" type="radio" value="2"/> Day 2: Back, Traps, & Biceps</label>
//   <label><Field name="day" component="input" type="radio" value="3"/> Day 3: Chest & Triceps</label>
//   <label><Field name="day" component="input" type="radio" value="4"/> Day 4: Deltoids & Forearms</label>
//   <label><Field name="day" component="input" type="radio" value="5"/> Day 5: Legs & Calves</label>
// }

// const PhaseThree = () => {
//   <label><Field name="day" component="input" type="radio" value="1"/> Day 1: Back & Traps</label>
//   <label><Field name="day" component="input" type="radio" value="2"/> Day 2: Chest</label>
//   <label><Field name="day" component="input" type="radio" value="3"/> Day 3: Legs & Calves</label>
//   <label><Field name="day" component="input" type="radio" value="4"/> Day 4: Deltoids</label>
//   <label><Field name="day" component="input" type="radio" value="5"/> Day 5: Arms (Biceps, Triceps, Forearms)</label>
// }

// const PhaseFour = () => {
//   <label><Field name="day" component="input" type="radio" value="1"/> Day 1: Back & Chest</label>
//   <label><Field name="day" component="input" type="radio" value="2"/> Day 2: Legs</label>
//   <label><Field name="day" component="input" type="radio" value="3"/> Day 3: Shoulders & Traps</label>
//   <label><Field name="day" component="input" type="radio" value="4"/> Day 4: Triceps & Biceps</label>
//   <label><Field name="day" component="input" type="radio" value="5"/> Day 5: Legs</label>
//   <label><Field name="day" component="input" type="radio" value="6"/> Day 6: Chest & Back</label>
// }