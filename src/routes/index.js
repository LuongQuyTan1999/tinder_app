import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/UI/Header'
import Home from '../pages/Home'
import Chats from '../pages/Chats'
import ChatScreen from '../pages/ChatScreen'

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/chat" component={Chats} exact />
        <Route path="/chat/:person" component={ChatScreen} exact />
      </Switch>
    </>
  )
}

export default Routes
