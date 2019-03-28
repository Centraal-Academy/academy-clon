/* global fetch */
import React, { Component } from 'react'
import Page from '../../components/dumps/Page/Page'
import Cover from '../../components/dumps/Cover/Cover'
import ErrorBoundary from '../../components/smarts/ErrorBoundary/ErrorBoundary'
import SectionPrograms from './dumps/SectionPrograms/SectionPrograms'
import ModalProgram from './dumps/ModalProgram/ModalProgam'
export class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.clickProgram = this.clickProgram.bind(this)
    this._closeModal = this._closeModal.bind(this)
  }

  clickProgram (program) {
    this.setState({
      selected: program
    })
  }

  componentDidMount () {
    fetch('http://localhost:3001/programs')
      .then(response => response.json())
      .then(programs => this.setState({ programs }))
  }

  _closeModal () {
    this.setState({ selected: null })
  }
  render () {
    const { selected } = this.state
    const modal = (selected) ? (
      <ModalProgram
        header={selected.name} open onClose={this._closeModal}>
        <span>{selected.name}</span>
      </ModalProgram>
    ) : null
    return (
      <Page>
        <ErrorBoundary>
          <Cover src='https://centraal.academy/images/cover-images/homepage__cover.jpg' />
        </ErrorBoundary>
        <SectionPrograms programs={this.state.programs} onClick={this.clickProgram} />
        {modal}
      </Page>
    )
  }
}
