import React, { Component } from 'react'

class About extends Component {
  render () {
    return (
      <div className='about'>
        <div className='jumbotron jumbotron--home'>
          <h1 className='display-4'>About Us</h1>
        </div>
        <h3>About Us</h3>
        <p>We are currently located in Golden, Colorado. Our development on our first games has just started and we look forward to see where we end up.</p>

        <h3>Our Team</h3>

        <p>
          At fluffy samurai entertainment, we want to create the best team we can.
        </p>

        <h4>
          Nia Watts
          <small className='text-muted'> Founder & Software Engineer</small>
        </h4>
        <p>Nia Watts started this studio in 2017. Her mission is to create worlds where stories don't just exist, they are created.</p>
        <p>Nia is currently attending the Colorado School of Mines and is using her education to create the best entertainment she can. She has previously worked in web applications and systems development. She wants to make games to best tell stories and make people smile.</p>
      </div>
    )
  }
}

export default About
