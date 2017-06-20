import React from 'react'
require('../style/tableHeaderStyle.css')

export default class TableHeader extends React.Component {
  render () {
    return <div className='ListHeader'>
      <div className='HeaderSection'>
        <h2 className='HeaderTitle'>List of Awesome</h2>
        <span className='Pipe'> | </span>
        <label className='SortBy'>Sort By:
          <select name='sort' className='Sort'>
            <option>First Name</option>
            <option>Last Name</option>
            <option>Country</option>
            <option>Address</option>
            <option>City</option>
            <option>State</option>
            <option>Zip</option>
            <option>Phone</option>
          </select>
        </label>
      </div>
      <div className='HeaderSection'>
        <label className='SortBy'>items per page:
          <select name='count' className='Count'>
            <option>5</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </label>
        <span className='PageLoc'><a className='Bold'>1 - 10</a> of <a className='Bold'>30</a></span>
        <a className='PageNav'>{'<'}</a>
        <a className='PageNav'>{'>'}</a>
      </div>
    </div>
  }
}
