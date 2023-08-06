import React from 'react'
import '../../assets/css/scss/regitser/register.scss'
import { NavLink } from 'react-router-dom'
import { Formik, Form, Field, useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { DispatchType } from '../../redux/store'
import { RegisterActionApi } from '../../redux/UserReducer/userReducer'

export type UserRegisterModel = {
  email: string | null,
  password: string | null
}

type Props = {}

const Register = (props: Props) => {

  const dispatch: DispatchType = useDispatch();

  const frmRegister = useFormik<UserRegisterModel>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      
    }),
    onSubmit: (values: UserRegisterModel) => {
      const actionAsync = RegisterActionApi(values);
      dispatch(actionAsync);
    }
  })
  return (
    <section className='signup' id='register'>
      <div className='container_form'>
        <div className='signup-content'>
          <div className='signup-form'>
            <h2 className='form-title-register'>REGISTER</h2>
            <form className='register-form' id='register-form'>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className='fa-solid fa-user fa-lg me-3 fa-fw'></i>
                <input className="form-control" id="name" name="name" required placeholder="Your Name"></input>
                <div className="text-danger position-absolute mt-1"></div>
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-envelope fa-lg me-3 fa-fw"></i>
                <input className="form-control" id="name" name="name" required placeholder="Your Email"></input>
                <div className="text-danger position-absolute mt-1"></div>
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-lock fa-lg me-3 fa-fw"></i>
                <input type='password' className="form-control" id="name" name="name" required placeholder="Your Password"></input>
                <div className="text-danger position-absolute mt-1"></div>
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                <input type='password' className="form-control" id="name" name="name" required placeholder="Reapeat Your Password"></input>
                <div className="text-danger position-absolute mt-1"></div>
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                <input className="form-control" id="name" name="name" required placeholder="Your Phone"></input>
                <div className="text-danger position-absolute mt-1"></div>
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-cake-candles fa-lg me-3 fa-fw"></i>
                <input type='date' className="form-control" id="name" name="name" required placeholder="Your Name"></input>
                <div className="text-danger position-absolute mt-1"></div>
              </div>
              <div id='gender' className='gender'>
                <i className="fa-solid fa-venus-mars fa-lg me-3 fa-fw" ></i>
                <div className='radio gender_inp'>
                  <input type="radio" id='male' name='gender' value="true" checked />
                  <label className='radio-label'>Male</label>
                  <input type="radio" id='female' name='gender' value="false" />
                  <label className='radio-label'>Female</label>
                </div>
              </div>
              <div className='form-group mt-2-frm' style={{ margin: "5px" }}>
                <input type="checkbox" required name="agree-term" id="agree-term" className="agree-term" style={{ margin: "0 15px" }} />
                <label className='label-agree-term'>
                  <span>
                    <span>I agree all statements in </span>
                  </span>
                  <a href="#" className="term-service">Terms of service</a>
                </label>
              </div>
              <div className='form-group form-button button-submit' style={{ margin: "5px" }}>
                <button className="btn btn-success btn_register" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className='signup-image'>
            <figure><img src="https://demo5.cybersoft.edu.vn/static/media/signup.bd994738c4eb8deb2801.jpg" alt="..." /></figure>
            <NavLink className="translate-login" to="/login" >I am already member</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register