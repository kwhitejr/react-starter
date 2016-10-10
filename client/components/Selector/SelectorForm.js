import React, { Component, PropTypes } from 'react'
import PhaseSelector from './PhaseSelector'
import WeekSelector from './WeekSelector'
import DaySelector from './DaySelector'

class SelectorForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <PhaseSelector onSubmit={this.nextPage}/>}
        {page === 2 && <WeekSelector previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <DaySelector previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}

SelectorForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SelectorForm
