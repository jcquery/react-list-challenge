import React from 'react'
import TableRow from './TableRow.jsx'
require('../style/tableBodyStyle.css')

export default class TableBody extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <table>
      <thead>
        <tr className='ListHeader'>
          <th className='First'>First Name</th>
          <th className='Last'>Last Name</th>
          <th className='Country'>Country</th>
          <th className='Address'>Address</th>
          <th className='City'>City</th>
          <th className='State'>State</th>
          <th className='Zip'>Zip</th>
          <th className='Phone'>Phone</th>
        </tr>
      </thead>
      <tbody>
        {this.props.rows.map((row, i) => {
          return TableRow(row, i)
        })}
      </tbody>
    </table>
  }
}
