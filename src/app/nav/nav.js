import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'

class Nav extends Component {
  createLinkElement (link, index) {
    return (
      <li className='nav-item' key={index}>
        <NavLink to={link.to} className='nav-link' activeClassName='active no-click' exact>
          {link.title}
        </NavLink>
      </li>
    )
  }

  render () {
    return (
      <nav className='navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse'>
        <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <NavLink to='/' className='navbar-brand active' activeClassName='no-click' exact>
          Fluffy Samurai
        </NavLink>

        <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
          <ul className='navbar-nav mr-auto'>
            {this.props.links.map(this.createLinkElement)}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
