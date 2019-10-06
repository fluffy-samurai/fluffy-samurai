import React, { memo } from 'react'
import { Home } from '../home'
import { ThemeProvider } from 'styled-components'
import { baseTheme } from '../utils/themes'

export const RootApp = memo(() => (
  <ThemeProvider theme={baseTheme}>
    <Home />
  </ThemeProvider>
))
