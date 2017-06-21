import React from 'react'

export default function TableRow (row, i) {
  return <tr className={i % 2 ? 'ListItem Odd' : 'ListItem Even'} key={row.phone + i}>
    <td>{row.first}</td>
    <td>{row.last}</td>
    <td>{row.country}</td>
    <td>{row.address}</td>
    <td>{row.city}</td>
    <td>{row.state}</td>
    <td>{row.zip}</td>
    <td>{row.phone}</td>
  </tr>
}
