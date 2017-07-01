import rows1 from '../tinyRows1.json'
import rows2 from '../tinyRows2.json'
import rows3 from '../tinyRows3.json'
import rows4 from '../tinyRows4.json'
import rows5 from '../tinyRows5.json'
let currentRows = rows1.concat(rows2, rows3, rows4, rows5)

const initialize = function (count) {
  const firstSort = new Promise((resolve) => {
    sortArr('first', currentRows, resolve)
  })

  firstSort.then((arr) => {
    currentRows = arr
    postMessage(['init', currentRows.slice(0, count), currentRows.length])
  })
  .catch((err) => {
    sendErr(err)
  })
}

const prepRows = function (options) {
  const page = options.page
  const count = options.count

  postMessage(['updated', currentRows.slice((page - 1) * count, page * count), page, count])
}

const sortArr = function (key, arr, callback) {
  callback(arr.sort((a, b) => {
    const aProp = a[key].toUpperCase()
    const bProp = b[key].toUpperCase()

    if (aProp < bProp) {
      return -1
    }
    if (aProp > bProp) {
      return 1
    }

    return 0
  }))
}

const sortRows = function (options) {
  const sorting = new Promise((resolve) => {
    sortArr(options.sort, currentRows, resolve)
  })

  sorting
    .then((arr) => {
      currentRows = arr
      prepRows(options)
    })
    .catch((err) => {
      sendErr(err)
    })
}

const sendErr = function (err) {
  postMessage(['error', err])
}

onmessage = function (event) {
  switch (event.data[0]) {
    case 'init':
      initialize(event.data[1])
      break
    case 'update':
      prepRows(event.data[1])
      break
    case 'sort':
      sortRows(event.data[1])
      break
  }
}
