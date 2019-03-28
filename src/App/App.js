import React, { Component } from 'react'
import { HomePage } from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const HomePageWrapper = () => (<HomePage title='Pagina principa' />)
class App extends Component {
  render () {
    return (
      <Router>
        <Route path='/' exact component={HomePageWrapper} />
        <Route path='/about/' component={AboutPage} />
      </Router>
    )
  }
}

export default App
