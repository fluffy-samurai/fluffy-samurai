import React from 'react'
import {
  AppContainer,
  GlobalIcon,
  GlobalLink,
  GlobalLinkContainer,
} from './global-view-styles'
import Icon from '/static/icon.png'

export const GlobalView = () => (
  <AppContainer>
    <GlobalIcon src={Icon} />

    <h1>Nia Watts</h1>

    <GlobalLinkContainer>
      <GlobalLink href='mailto:nia@nia.dev'>nia@nia.dev</GlobalLink>

      <GlobalLink href='https://github.com/fluffy-samurai' target='_blank'>
        GitHub
      </GlobalLink>
    </GlobalLinkContainer>
  </AppContainer>
)
