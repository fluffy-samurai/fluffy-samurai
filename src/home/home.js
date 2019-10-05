import React from 'react'
import {
  AppContainer,
  HomeHeader,
  HomeIcon,
  HomeLink,
  HomeLinkContainer,
} from './home-styles'
import Icon from '/static/icon.png'

export const Home = () => (
  <AppContainer>
    <HomeIcon src={Icon} />

    <HomeHeader>Nia Watts</HomeHeader>
    <span>Software Engineer</span>
    <span>she/her</span>

    <HomeLinkContainer>
      <HomeLink href='mailto:nia@nia.dev'>nia@nia.dev</HomeLink>

      <HomeLink href='https://github.com/fluffy-samurai' target='_blank'>
        GitHub
      </HomeLink>
    </HomeLinkContainer>
  </AppContainer>
)
