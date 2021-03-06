import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddEmployeePage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [success, setSuccess] = useState(false)
  // const [person, setPerson] = useState({})

  const postCall = async e => {
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/HomelessMagicians/Employees',

      {
        firstName,
        lastName,
        email,
        phoneNumber,
        jobTitle
      }
    )
  }

  const changeSuccess = () => {
    setSuccess(true)
  }

  // const [person, setPerson] = useState({})

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          postCall()
        }}
        className="form-container"
      >
        <section className="first-name">
          <input
            type="text"
            placeholder="John"
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        </section>
        <section className="last-name">
          <input
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        </section>
        <section className="email">
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
        </section>
        {/* {console.log(person)} */}
        <section className="phone-number">
          <input
            type="text"
            placeholder="555-555-5555"
            value={phoneNumber}
            onChange={e => {
              setPhoneNumber(e.target.value)
            }}
          />
        </section>
        <section className="job-title">
          <input
            type="text"
            placeholder="Manager"
            value={jobTitle}
            onChange={e => {
              setJobTitle(e.target.value)
            }}
          />
        </section>
        <section>
          <button onClick={changeSuccess}>Engage With New Hire</button>
          {success === false && <p></p>}
          {success === true && (
            <p>Your Submission Was Successful, Please Return Home</p>
          )}
        </section>
      </form>
    </>
  )
}

export default AddEmployeePage
