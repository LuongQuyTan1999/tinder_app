import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import TinderCards from './pages/TinderCards'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={TinderCards} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
