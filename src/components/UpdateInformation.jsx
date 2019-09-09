import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const UpdateInformation = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [id, setId] = useState(props.match.params.result)
  // const [success, setSuccess] = useState(false)
  // const [person, setPerson] = useState({})

  const putCall = async e => {
    const resp = await axios.put(
      `https://sdg-staff-directory-app.herokuapp.com/api/HomelessMagicians/Employees/${props.match.params.result}`,

      {
        id,
        firstName,
        lastName,
        email,
        phoneNumber,
        jobTitle
      }
    )
  }

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          putCall()
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
          <button>Update Employee Information</button>
        </section>
      </form>
    </>
  )
}

export default UpdateInformation
