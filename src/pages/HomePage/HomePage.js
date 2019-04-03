/* global fetch */
import React, { Component } from 'react'
import Page from '../../components/dumps/Page/Page'
import Cover from '../../components/dumps/Cover/Cover'
import ErrorBoundary from '../../components/smarts/ErrorBoundary/ErrorBoundary'
import SectionPrograms from './dumps/SectionPrograms/SectionPrograms'
import ModalProgram from './dumps/ModalProgram/ModalProgam'
import FormSuscription from './dumps/FormSuscription/FormSuscription'
import ProtectComponent from '../../components/dumps/ProtectComponent/ProtectComponent'
import Button from '../../components/dumps/Button/Button'
import { connect } from 'react-redux'
import { addPrograms } from '../../store/actions'
export class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = { form: { email: '' } }
    this.clickProgram = this.clickProgram.bind(this)
    this._closeModal = this._closeModal.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  clickProgram (program) {
    this.setState({
      selected: program
    })
  }

  componentDidMount () {
    fetch('http://localhost:3001/programs')
      .then(response => response.json())
      .then(programs => this.props.dispatch(addPrograms(programs)))
  }

  _closeModal () {
    this.setState({ selected: null })
  }

  changeInput (event) {
    const { name, value } = event.target
    this.setState({ form: { ...this.state.form, [name]: value } })
  }
  render () {
    const { selected } = this.state
    const modal = (selected) ? (
      <ModalProgram
        header={selected.name} open onClose={this._closeModal}>
        <FormSuscription email={this.state.form.email} onChange={this.changeInput} />
        <ProtectComponent>
          <Button>Submit</Button>
        </ProtectComponent>
      </ModalProgram>
    ) : null
    return (
      <Page>
        <ErrorBoundary>
          <Cover src='https://centraal.academy/images/cover-images/homepage__cover.jpg' />
        </ErrorBoundary>
        <SectionPrograms programs={this.props.programs} onClick={this.clickProgram} />
        {modal}
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
