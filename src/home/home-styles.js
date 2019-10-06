import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: safe center;
  justify-content: safe center;
  flex-flow: column nowrap;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  overflow: auto;
`

export const HomeIcon = styled.img`
  width: ${props => props.theme.spacing * 15}px;
  height: auto;
  margin: ${props => props.theme.spacing}px;
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
  margin-top: ${props => props.theme.spacing * 2}px;
  display: flex;
  flex-flow: row wrap;
  align-items: safe center;
  justify-content: safe center;
`

export const HomeLink = styled.a`
  margin: ${props => props.theme.spacing}px;
  text-decoration: none;
  color: ${props => props.theme.colors.link};
`
