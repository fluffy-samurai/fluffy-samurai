import React from 'react'
import {
  AppContainer,
  HomeHeader,
  HomeIcon,
  HomeLink,
  HomeLinkContainer,
  HomeSubheader,
  HomeTextContainer,
} from './home-styles'
import Icon from '/static/icon.png'

export const Home = () => (
  <AppContainer>
    <HomeIcon src={Icon} alt='cat wearing samurai wear and wielding a sword' />

    <HomeHeader>Nia Watts</HomeHeader>
    <HomeSubheader>Fluffy Samurai</HomeSubheader>
    <HomeTextContainer>
      <span>Software Engineer</span>
      <br />
      <span>she/her</span>
    </HomeTextContainer>

    <HomeLinkContainer>
      <HomeLink href='mailto:nia@nia.dev' rel='noreferrer'>
        nia@nia.dev
      </HomeLink>

      <HomeLink
        href='https://github.com/fluffy-samurai'
        target='_blank'
        rel='noreferrer'
      >
        GitHub
      </HomeLink>

      <HomeLink
        href='https://keybase.io/fluffy_samurai'
        target='_blank'
        rel='noreferrer'
      >
        Keybase
      </HomeLink>
    </HomeLinkContainer>
  </AppContainer>
)
