import React, { Component } from 'react'
import { HomePage } from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const HomePageWrapper = () => (<HomePage title='Pagina principa' />)
class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePageWrapper} />
          <Route path='/about' component={AboutPage} />
          <Route path='/:anything' component={AboutPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
