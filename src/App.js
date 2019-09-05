import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ViewAllEmployeesPage from './components/ViewAllEmployeesPage'
import EmployeePage from './components/EmployeePage'
import AddEmployeePage from './components/AddEmployeePage'

const App = () => {
  return (
    <>
      <Router>
        <Link to="/">Home Page</Link>
        <Link to="/add">Add Employee</Link>
        <Switch>
          <Route exact path="/" component={ViewAllEmployeesPage}></Route>
          <Route exact path="/add" component={AddEmployeePage}></Route>
          <Route exact path="/:result" component={EmployeePage}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
