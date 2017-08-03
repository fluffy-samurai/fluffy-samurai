import React, { Component } from 'react'

import icon from './../../assets/icon.png'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <div className='jumbotron jumbotron--home'>
          <div className='row'>
            <div className='col-md-9'>
              <h1 className='display-4'>Fluffy Samurai Entertainment</h1>
              <h2>Gameplay. Quality. Freedom.</h2>
            </div>
            <div className='col-md-3'>
              <img src={icon} className='img-fluid main-icon' alt='Fluffy Samurai' />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <h3>Our Mission</h3>
            <p>To create worlds where your stories can exist.</p>
            <p>At Fluffy Samurai Entertainment, we strive to create worlds in which stories are written. We may give some attributes or even a simple motive, but at the end of the day, it is YOUR story to write.</p>
            <p>We believe that there are three things that make a great game. Gameplay, Quality, and Freedom. We will let these guide us.</p>
          </div>
          <div className='col-md-4'>
            <h3>Our Future</h3>
            <p>We are in the process of creating worlds and stories for you to experience. We have many ideas, but we always appreciate input.</p>
          </div>
          <div className='col-md-4'>
            <h3>Our Games</h3>
            <p>Currently, we are working on creating a number of small games with open interpretation. We look forward to expanding and creating more in depth games and sharing our stories with you!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
