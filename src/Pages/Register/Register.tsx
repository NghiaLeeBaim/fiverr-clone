import React from 'react'
import '../../assets/css/scss/regitser/register.scss'
import { NavLink } from 'react-router-dom'

type Props = {}

const Register = (props: Props) => {
  return (
    <section className='signup' id='register'>
      <div className='container_form'>
        <div className='signup-content'>
          <div className='signup-form'></div>
          <div className='signup-image'>
            <figure></figure>
            <NavLink to="/login">I am already member</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register