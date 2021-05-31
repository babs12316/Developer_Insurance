import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ProductIds } from './shared/Constants'
import Buyflow from './views/buyFlow/Buyflow'
import ErrorBoundary from './errorBoundary/ErrorBoundary'
import NoMatch from './views/noMatch/NoMatch'

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Switch>
            <Route exact path="/buy/insurance_dev">
              <Buyflow productId={ProductIds.devIns} />
            </Route>
            <Route exact path="/">
              <p>Welcome to Getsafe's Developer Insurance</p>
              <Link to="/buy/insurance_dev">Get started!</Link>
            </Route>
            <Route exact path="/purchased=dev_ins">
              <p>Welcome to Getsafe's Developer Insurance</p>
              <Link to="/buy/insurance_dev">Get started!</Link>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
