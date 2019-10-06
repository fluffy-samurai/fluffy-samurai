import React from 'react'
import {
  AppContainer,
  HomeHeader,
  HomeIcon,
  HomeLink,
  HomeLinkContainer,
  HomeText,
} from './home-styles'
import Icon from '/static/icon.png'

export const Home = () => (
  <AppContainer>
    <HomeIcon src={Icon} />

    <HomeHeader>Nia Watts</HomeHeader>
    <HomeText>Software Engineer</HomeText>
    <HomeText>she/her</HomeText>

    <HomeLinkContainer>
      <HomeLink href='mailto:nia@nia.dev'>nia@nia.dev</HomeLink>

      <HomeLink href='https://github.com/fluffy-samurai' target='_blank'>
        GitHub
      </HomeLink>

      <HomeLink href='https://keybase.io/fluffy_samurai' target='_blank'>
        Keybase
      </HomeLink>
    </HomeLinkContainer>
  </AppContainer>
)
