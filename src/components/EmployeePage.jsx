import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const EmployeePage = props => {
  const [employee, setEmployee] = useState([])

  const getMeEmployeeProfile = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/HomelessMagicians/Employees/${props.match.params.result}`
    )
    console.log(resp.data)
    setEmployee(resp.data)
  }

  useEffect(() => {
    getMeEmployeeProfile()
  }, [])
  return (
    <>
      <p>{employee.firstName}</p>
      <p>{employee.lastName}</p>
      <p>Email: {employee.email}</p>
      <p>Phone Number: {employee.phoneNumber}</p>
      <p>Job Title: {employee.JobTitle}</p>
      <p>Company Name: {employee.companyKey}</p>
      <p>PTO Hours: {employee.ptoHours}</p>
      <p>Salary: {employee.salary}</p>
      <p>{employee.zip}</p>
    </>
  )
}

export default EmployeePage
