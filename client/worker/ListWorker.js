import rows from '../rows.json'

let currentRows = rows
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
const prepRows = function (options) {
  const page = options.page
  const count = options.count

  postMessage(['updated', currentRows.slice((page - 1) * count, page * count), page, count])
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
      postMessage(['init', currentRows.slice(0, 10), currentRows.length])
      break
    case 'update':
      prepRows(event.data[1])
      break
    case 'sort':
      sortRows(event.data[1])
  }
}
