import React from 'react'
import TopNav from './TopNav.jsx'

export default class App extends React.Component {
  render () {
    return (
      <TopNav
        navItems={['Nav Item 1', 'Nav Item 2', 'Nav Item 3']}
      />
    )
  }
}
