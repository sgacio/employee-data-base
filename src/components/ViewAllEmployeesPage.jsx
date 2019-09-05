import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewAllEmployeesPage = () => {
  const [companyList, setCompanyList] = useState([])

  const getTheCompanyList = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/HomelessMagicians'
    )
    console.log(resp.data)
    setCompanyList(resp.data)
  }

  useEffect(() => {
    getTheCompanyList()
  }, [])
  return (
    <>
      <ul>
        {companyList.map((result, i) => {
          return (
            <li key={i}>
              <Link to={`/${result.id}`}>
                <p>{result.firstName}</p>
              </Link>
              <p>{result.lastName}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ViewAllEmployeesPage
