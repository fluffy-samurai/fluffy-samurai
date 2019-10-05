import React from 'react'
import {
  AppContainer,
  HomeIcon,
  HomeLink,
  HomeLinkContainer,
} from './home-styles'
import Icon from '/static/icon.png'

export const Home = () => (
  <AppContainer>
    <HomeIcon src={Icon} />

    <h1>Nia Watts</h1>

    <HomeLinkContainer>
      <HomeLink href='mailto:nia@nia.dev'>nia@nia.dev</HomeLink>

      <HomeLink href='https://github.com/fluffy-samurai' target='_blank'>
        GitHub
      </HomeLink>
    </HomeLinkContainer>
  </AppContainer>
)
