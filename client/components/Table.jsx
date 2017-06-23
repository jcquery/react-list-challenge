import React from 'react'
import TableHead from './TableHead.jsx'
import TableBody from './TableBody.jsx'
require('../style/tableStyle.css')
const ListWorker = require('worker-loader!../worker/ListWorker.js')

export default class Table extends React.Component {
  constructor () {
    super()

    this.state = {
      rows: [],
      sort: 'first',
      count: 10,
      page: 1,
      size: 10
    }
  }

  componentWillMount () {
    this.worker = new ListWorker()
    this.worker.postMessage(['init'])
  }
  handleMessage (data) {
    switch (data[0]) {
      case 'init':
        this.setState({ rows: data[1], size: data[2] })
        break
      case 'updated':
        this.setState({ rows: data[1] })
        break
      case 'error': {
        console.log(data[1])
        break
      }
    }
  }
  updateCount (val) {
    this.setState({ count: val }, () => {
      this.worker.postMessage(['update', {
        count: this.state.count,
        page: this.state.page
      }])
    })
  }
  updatePage (val) {
    const newPage = this.state.page + val

    this.setState({ page: newPage }, () => {
      this.worker.postMessage(['update', {
        count: this.state.count,
        page: this.state.page
      }])
    })
  }
  updateSort (val) {
    this.setState({ sort: val }, () => {
      this.worker.postMessage(['sort', {
        sort: this.state.sort,
        count: this.state.count,
        page: this.state.page
      }])
    })
  }

  render () {
    this.worker.onmessage = (m) => { this.handleMessage(m.data) }
    return <div className='TableContainer'>
      <TableHead
        sort={this.state.sort}
        count={this.state.count}
        page={this.state.page}
        size={this.state.size}
        updateCount={this.updateCount.bind(this)}
        updatePage={this.updatePage.bind(this)}
        updateSort={this.updateSort.bind(this)}
      />
      <TableBody
        rows={this.state.rows}
        sort={this.state.sort}
        count={this.state.count}
        page={this.state.page}
        updateSort={this.updateSort.bind(this)}
      />
    </div>
  }
}
