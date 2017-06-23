import React from 'react'
import TableHead from './TableHead.jsx'
import TableBody from './TableBody.jsx'
require('../style/tableStyle.css')
const ListWorker = require('../worker/ListWorker.js')

export default class Table extends React.Component {
  constructor () {
    super()

    this.state = {
      rows: [],
      sort: 'first',
      count: 10,
      page: 1,
      size: 0,
      loading: true
    }
  }

  componentWillMount () {
    this.worker = new ListWorker()
    this.worker.postMessage(['init', this.state.count])
  }
  handleMessage (data) {
    switch (data[0]) {
      case 'init':
        this.setState({ rows: data[1], size: data[2], loading: false })
        break
      case 'updated':
        this.setState({ rows: data[1], loading: false })
        break
      case 'error': {
        console.log(data[1])
        break
      }
    }
  }
  updateCount (val) {
    if (!this.state.loading) {
      this.setState({ count: val, page: 1 }, () => {
        this.worker.postMessage(['update', {
          count: this.state.count,
          page: this.state.page
        }])
      })
    }
  }
  updatePage (val) {
    if (!this.state.loading) {
      const newPage = this.state.page + val

      this.setState({ page: newPage }, () => {
        this.worker.postMessage(['update', {
          count: this.state.count,
          page: this.state.page
        }])
      })
    }
  }
  updateSort (val) {
    if (val !== this.state.sort && !this.state.loading) {
      this.setState({ sort: val, loading: true, page: 1 }, () => {
        this.worker.postMessage(['sort', {
          sort: this.state.sort,
          count: this.state.count,
          page: this.state.page
        }])
      })
    }
  }

  render () {
    this.worker.onmessage = (m) => { this.handleMessage(m.data) }
    return <div className={this.state.loading ? 'TableContainer Wait' : 'TableContainer'}>
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
      <div className='Loader' style={this.state.loading ? { visibility: 'visible' } : { visibility: 'hidden', animation: 'none' }} />
    </div>
  }
}
