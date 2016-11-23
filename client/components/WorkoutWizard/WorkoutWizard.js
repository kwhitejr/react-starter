import React, { Component, PropTypes } from 'react'
import WorkoutForm from './WorkoutForm'

class WorkoutWizard extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1,
      exerciseIndex: 0,
      setIndex: 0,
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  nextExercise() {
    this.setState({ 
      exerciseIndex: this.state.exerciseIndex + 1, // number represents array index
      page: 1
    }) 
  }

  previousExercise() {
    this.setState({ 
      exerciseIndex: this.state.exerciseIndex - 1,
      page: 1 
    }) 
  }

  render() {
    const { selectedWorkout, storeExerciseData } = this.props
    const { page, exerciseIndex, setIndex } = this.state
    
    // An array of numbers; vals = reps, length = # of sets
    const sets = selectedWorkout.exercises[exerciseIndex].reps 

    return (
      <div>
        { page === 1 && 
          <WorkoutForm 
            currentExercise={selectedWorkout.exercises[exerciseIndex]} // an object
            sets={sets} // an array
            setIndex={setIndex} // a number
            onSubmit={this.nextPage} /> }
        { page > 1 && 
          page < sets.length && 
          <WorkoutForm 
            currentExercise={selectedWorkout.exercises[exerciseIndex]} 
            previousPage={this.previousPage} 
            onSubmit={this.nextPage} /> }
        { page === sets.length &&
          <WorkoutForm 
            currentExercise={selectedWorkout.exercises[exerciseIndex]} 
            previousPage={this.previousPage} 
            onSubmit={storeExerciseData} /> }
      </div>
    );
  }
}

WorkoutWizard.propTypes = {
  selectedWorkout: PropTypes.shape({
    id: PropTypes.arrayOf(PropTypes.number).isRequired,
    title: PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        reps: PropTypes.array.isRequired,
        track: PropTypes.string.isRequired,
      }).isRequired
    )
  }).isRequired,
};

export default WorkoutWizard;
