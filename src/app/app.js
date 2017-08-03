import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import './../styles/app.css'

import Nav from './nav/nav.js'

import Home from './home/home.js'
import About from './about/about.js'
import Projects from './projects/projects.js'

const links = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/about',
    title: 'About'
  },
  {
    to: '/projects',
    title: 'Projects'
  }
]

class ScrollToTop extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }
}

class App extends Component {
  render () {
    return (
      <Router>
        <ScrollToTop>
          <div className='app'>
            <div>
              <Nav links={links} />
            </div>
            <div className='container contents'>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
            </div>
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
