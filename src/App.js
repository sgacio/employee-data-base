import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ViewAllEmployeesPage from './components/ViewAllEmployeesPage'
import EmployeePage from './components/EmployeePage'
import AddEmployeePage from './components/AddEmployeePage'
import UpdateInformation from './components/UpdateInformation'

const App = () => {
  return (
    <>
      <Router>
        <nav className="nav-container">
          <section>
            <h1 className="company-name">Homeless Magicians Association</h1>
          </section>
          <nav className="sub-container">
            <Link className="link-one" to="/">
              <button>Home Page</button>
            </Link>
            <Link className="link-two" to="/add">
              <button>Add Employee</button>
            </Link>
          </nav>
        </nav>
        <Switch>
          <Route exact path="/" component={ViewAllEmployeesPage}></Route>
          <Route exact path="/add" component={AddEmployeePage}></Route>
          <Route
            exact
            path="/:result/success"
            component={UpdateInformation}
          ></Route>
          <Route exact path="/:result" component={EmployeePage}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
