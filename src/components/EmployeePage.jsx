import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const EmployeePage = props => {
  const [employee, setEmployee] = useState([])
  const [success, setSuccess] = useState(false)

  const getMeEmployeeProfile = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/HomelessMagicians/Employees/${props.match.params.result}`
    )
    console.log(resp.data)
    setEmployee(resp.data)
  }

  const deleteEmployee = async () => {
    const resp = await axios.delete(
      `https://sdg-staff-directory-app.herokuapp.com/api/HomelessMagicians/Employees/${props.match.params.result}`
    )
    setSuccess(true)
  }

  useEffect(() => {
    getMeEmployeeProfile()
  }, [])
  return (
    <main className="employee-container">
      <p>{employee.firstName}</p>
      <p>{employee.lastName}</p>
      <p>Email: {employee.email}</p>
      <p>Phone Number: {employee.phoneNumber}</p>
      <p>Job Title: {employee.jobTitle}</p>
      <p>Company Name: {employee.companyKey}</p>
      <p>PTO Hours: {employee.ptoHours}</p>
      <p>Salary: {employee.salary}</p>
      <p>{employee.zip}</p>
      <section>
        <button onClick={deleteEmployee}>Remove This Profile</button>
        {success === false && <p></p>}
        {success === true && (
          <p>Your Deletion Was Successful, Please Return Home</p>
        )}
      </section>
      <section>
        <Link to={`/${employee.id}/success`}>
          <button>Update Employee Profile</button>
        </Link>
      </section>
    </main>
  )
}

export default EmployeePage
