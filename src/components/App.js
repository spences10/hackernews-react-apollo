import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'

class App extends Component {
  render() {
    return <CreateLink />
  }
}

export default App
