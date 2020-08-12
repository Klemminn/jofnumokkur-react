import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import { Header } from 'components'

import { Home } from 'pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'

const App = () => (
  <>
    <Header />
    <div className='container route-container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  </>
)

export default App