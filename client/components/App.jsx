import React from 'react'
import TopNav from './TopNav.jsx'
import Table from './Table.jsx'
require('../style/style.css')

export default class App extends React.Component {
  render () {
    return (<div>
      <TopNav
        navItems={['Nav Item 1', 'Nav Item 2', 'Nav Item 3']}
      />
      <Table />
    </div>
    )
  }
}
