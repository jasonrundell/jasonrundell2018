import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import '../scss/base.scss'

const NoMatch = location => (
  <React.Fragment>
    <main id="main">
      <section className="section section-keynote keynote">
        <div className="contain">
          <h1>
            404 - Page not found for
            <code>{location.pathname}</code>
          </h1>
          <p>
            <Link to="/" className="link">
              Return to Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  </React.Fragment>
)

const App = () => (
  <React.Fragment>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </React.Fragment>
)

export default App
