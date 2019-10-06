import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: safe center;
  justify-content: safe center;
  flex-flow: column nowrap;
  background-color: darkslategray;
  color: white;
  overflow: auto;
`

export const HomeIcon = styled.img`
  width: 120px;
  height: auto;
  margin: 8px;
`

export const HomeHeader = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
`

export const HomeText = styled.span`
  margin: 0;
  padding: 0;
  text-align: center;
`

export const HomeLinkContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-flow: row wrap;
  align-items: safe center;
  justify-content: safe center;
`

export const HomeLink = styled.a`
  margin: 8px;
  text-decoration: none;
  color: aqua;
`
