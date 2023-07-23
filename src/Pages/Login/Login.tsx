import React from 'react'
import "../../assets/images/image_Signin.jpg"
import { NavLink } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
  return (
    <section className='sign-in'>
      <div className='container_form'>
        <div className='signin-content'>
          <div className='signin-image'>
            <figure><img src="https://demo5.cybersoft.edu.vn/static/media/signin.6f1c72291c1ec0817ded.jpg" alt="..." /></figure>
          </div>
          <div className='signin-form'>
            <h2 className='form-title mb-5'>Sign In to Fiverr</h2>
            <form className='login-form' id='login-form'>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-user"></i>
                <div className='form-outline flex-fill mb-0'>
                  <input className='form-control' id='email' name='email' placeholder='Your Email' />
                  <div className='text-danger position-absolute mt-1'></div>
                </div>
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-lock"></i>
                <div className='form-outline flex-fill mb-0'>
                  <input type='password' className='form-control' id='password' name='password' placeholder='Your Password' />
                  <div className='text-danger position-absolute mt-1'></div>
                </div>
              </div>
              <div className='form-group register d-flex justify-content-start align-items-baseline gap-3 ms-5 mt-5'>
                <button className='btn btn-success login' type='submit'>Login</button>
                <NavLink className='text-register' to='/register'>Register Now ?</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login