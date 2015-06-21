import Promise from 'bluebird'
import requestPromise from 'request-promise'


const request = uri => requestPromise({
  resolveWithFullResponse: true,
  uri: uri
})

Promise.coroutine(function* () {
  try {
    const google = yield request('http://www.google.com'),
          reddit = yield request('http://www.reddit.comx')

    console.log(google.headers)
    console.log(reddit.headers)

  } catch (error) {
    console.log(error.toString())
  }
})()
