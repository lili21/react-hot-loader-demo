import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  componentDidMount() {
    console.log('didmount')
  }
  render() {
    return <div>Hello, React Hot Loader</div>
  }
}

export default hot(module)(App)
