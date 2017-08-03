import React, { Component } from 'react'

class Projects extends Component {
  render () {
    return (
      <div className='projects'>
        <div className='jumbotron jumbotron--home'>
          <h1 className='display-4'>Projects</h1>
        </div>
        <h3>
          Our Mobile Apps
        </h3>
        <p>
          Our mobile apps represent our idea of a small, but unique experience.
        </p>

        <h4>
          Rooty Tooty Rotate & Shooty
          <small className='text-muted'> Android</small>
        </h4>

        <p>A gyro-powered arcade shooter style game with the feel of classic arcade games.</p>
        <p>Rooty Tooty Rotate & Shooty (RTRS) is a simple game that harkens back to an arcade style. Play the game by rotating your phone to aim and tapping the screen to shoot at the enemies. Your high score can be saved locally so you can show it off to your friends but easily removed. While other games require always online, the flashiest graphics, and in app purchases, RTRS offers simple fun for anyone to enjoy. Enjoy playing a quick game anytime and anywhere.</p>

        <div className='embed-responsive embed-responsive-16by9'>
          <iframe title='rtrs-video' className='embed-responsive-item' src='//www.youtube.com/embed/dv7qCFM2cD0?ecver=2' allowfullscreen />
        </div>

        <a href='https://play.google.com/store/apps/details?id=com.fluffy_samurai.rtrs&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className='img-fluid badge--play-store' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' /></a>

        <div className='footer'>
          Google Play and the Google Play logo are trademarks of Google Inc.
        </div>
      </div>
    )
  }
}

export default Projects
