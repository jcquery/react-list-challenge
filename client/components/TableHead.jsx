import React from 'react'
require('../style/tableHeadStyle.css')

export default class TableHead extends React.Component {
  handleCountChange (e) {
    this.props.updateCount(e.target.value)
  }
  handlePaginate (update) {
    if (
      this.props.page + update > 0 &&
      !(this.props.size - (this.props.page) * this.props.count < 0 && Math.sign(update) === 1)
    ) {
      this.props.updatePage(update)
    }
  }
  handleSort (e) {
    this.props.updateSort(e.target.value)
  }

  render () {
    return <div className='ListHead'>
      <div className='HeaderSection'>
        <h2 className='HeaderTitle'>List of Awesome</h2>
        <span className='Pipe'> | </span>
        <label className='SortBy'>Sort By:
          <select
            name='sort'
            className='Sort'
            onChange={this.handleSort.bind(this)}
            value={this.props.sort}
          >
            <option value='first'>First Name</option>
            <option value='last'>Last Name</option>
            <option value='country'>Country</option>
            <option value='address'>Address</option>
            <option value='city'>City</option>
            <option value='state'>State</option>
            <option value='zip'>Zip</option>
            <option value='phone'>Phone</option>
          </select>
        </label>
      </div>
      <div className='HeaderSection'>
        <label className='SortBy'>items per page:
          <select
            name='count'
            className='Count'
            value={this.props.count}
            onChange={this.handleCountChange.bind(this)}
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </label>
        <span className='PageLoc'>
          <a className='Bold'>{(this.props.page - 1) * this.props.count + 1} - {this.props.size - this.props.page * this.props.count >= 0 ? this.props.page * this.props.count : this.props.size}</a> of <a className='Bold'>{this.props.size}</a>
        </span>
        <a className='PageNav' onClick={this.handlePaginate.bind(this, -1)}>{'<'}</a>
        <a className='PageNav' onClick={this.handlePaginate.bind(this, 1)}>{'>'}</a>
      </div>
    </div>
  }
}
