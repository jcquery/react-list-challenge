import React from 'react'
require('../style/topNavStyle.css')

export default class TopNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0
    }
  }
  handleSelect (item) {
    this.setState({ selected: item })
  }

  render () {
    return <nav className='TopNav'>
      <div className='NavHighlight' style={{ left: `${this.state.selected * 100 + 50}px` }} />
      {this.props.navItems.map((item, i) => <div
        key={i}
        className='NavItem'
        onClick={this.handleSelect.bind(this, i)}
        style={{ color: this.state.selected === i ? 'white' : null }}
      >
        {item}
      </div>)}
    </nav>
  }
}
