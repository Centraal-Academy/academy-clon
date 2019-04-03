/* global fetch */
import React, { Component } from 'react'
import Page from '../../components/dumps/Page/Page'
import Cover from '../../components/dumps/Cover/Cover'
import ErrorBoundary from '../../components/smarts/ErrorBoundary/ErrorBoundary'
import SectionPrograms from './dumps/SectionPrograms/SectionPrograms'
import ModalProgramToSuscription from './smarts/ModalProgramToSuscription'
import { connect } from 'react-redux'
import { addPrograms, setSelectedProgram } from '../../store/actions'
export class HomePage extends Component {
  constructor (props) {
    super(props)
    this.clickProgram = this.clickProgram.bind(this)
  }

  clickProgram (program) {
    const action = setSelectedProgram(program)
    this.props.dispatch(action)
  }

  componentDidMount () {
    fetch('http://localhost:3001/programs')
      .then(response => response.json())
      .then(programs => this.props.dispatch(addPrograms(programs)))
  }
  render () {
    return (
      <Page>
        <ErrorBoundary>
          <Cover src='https://centraal.academy/images/cover-images/homepage__cover.jpg' />
        </ErrorBoundary>
        <SectionPrograms programs={this.props.programs} onClick={this.clickProgram} />
        <ModalProgramToSuscription />
      </Page>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    programs: state.home.programs
  }
}

export default connect(mapStateToProps)(HomePage)
