import Promise from 'bluebird'
import requestPromise from 'request-promise'


const request = uri => requestPromise({
  resolveWithFullResponse: true,
  uri: uri
})

Promise.coroutine(function* () {
  const google = yield request('http://www.google.com'),
        reddit = yield request('http://www.reddit.com')

  console.log(google.headers)
  console.log(reddit.headers)
})()
