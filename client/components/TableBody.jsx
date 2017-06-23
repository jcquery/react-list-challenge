import React from 'react'
import TableRow from './TableRow.jsx'
require('../style/tableBodyStyle.css')

export default class TableBody extends React.Component {
  handleSort (header) {
    this.props.updateSort(header)
  }
  render () {
    return <table>
      <thead>
        <tr>
          <th
            className={this.props.sort === 'first' ? 'ListHeader First Selected' : 'ListHeader First'}
            onClick={this.handleSort.bind(this, 'first')}
          >
            First Name
          </th>
          <th
            className={this.props.sort === 'last' ? 'ListHeader Last Selected' : 'ListHeader Last'}
            onClick={this.handleSort.bind(this, 'last')}
          >
            Last Name
          </th>
          <th
            className={this.props.sort === 'country' ? 'ListHeader Country Selected' : 'ListHeader Country'}
            onClick={this.handleSort.bind(this, 'country')}
          >
            Country
          </th>
          <th
            className={this.props.sort === 'address' ? 'ListHeader Address Selected' : 'ListHeader Address'}
            onClick={this.handleSort.bind(this, 'address')}
          >
            Address
          </th>
          <th
            className={this.props.sort === 'city' ? 'ListHeader City Selected' : 'ListHeader City'}
            onClick={this.handleSort.bind(this, 'city')}
          >
            City
          </th>
          <th
            className={this.props.sort === 'state' ? 'ListHeader State Selected' : 'ListHeader State'}
            onClick={this.handleSort.bind(this, 'state')}
          >
            State
          </th>
          <th
            className={this.props.sort === 'zip' ? 'ListHeader Zip Selected' : 'ListHeader Zip'}
            onClick={this.handleSort.bind(this, 'zip')}
          >
            Zip
          </th>
          <th
            className={this.props.sort === 'phone' ? 'ListHeader Phone Selected' : 'ListHeader Phone'}
            onClick={this.handleSort.bind(this, 'phone')}
          >
            Phone
          </th>
        </tr>
      </thead>
      <tbody>
        { this.props.rows.map((row, i) => TableRow(row, i)) }
      </tbody>
    </table>
  }
}
