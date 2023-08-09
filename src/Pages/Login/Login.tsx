import React from 'react'
import "../../assets/css/scss/login/login.scss"
import { useFormik } from 'formik'
import * as yup from 'yup'
import { NavLink } from 'react-router-dom'
import { loginActionApi } from '../../redux/UserReducer/userReducer'
import { useDispatch } from 'react-redux'
import { DispatchType } from '../../redux/store'

export type UserLoginModel = {
  email: string | null,
  password: string | null
}

type Props = {}

const Login = (props: Props) => {

  const dispatch: DispatchType = useDispatch();

  const frmLogin = useFormik<UserLoginModel>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('*Email không được bỏ trống ').email('*Email không đúng định dạng'),
      password: yup.string().required('*Password không được bỏ trống').min(3, 'password must be at least 6 to 30 character').max(30, 'password must be at least 6 to 30 character')
    }),
    onSubmit: (values: UserLoginModel) => {
      const actionAsync = loginActionApi(values);
      dispatch(actionAsync);
    }
  })

  return (
    <section className='sign-in'>
      <div className='container_form'>
        <div className='signin-content'>
          <div className='signin-image'>
            <figure><img src="https://demo5.cybersoft.edu.vn/static/media/signin.6f1c72291c1ec0817ded.jpg" alt="..." /></figure>
          </div>
          <div className='signin-form'>
            <h2 className='form-title mb-5'>Sign In to Fiverr</h2>
            <form className='login-form' id='login-form' onSubmit={frmLogin.handleSubmit}>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-user" style={{ marginRight: "20px" }}></i>
                <div className='form-outline flex-fill mb-0'>
                  <input className='form-control' id='email' name='email' placeholder='Your Email' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} style={{ width: "351px" }} />
                  {frmLogin.errors.email && <div className='text-danger position-absolute m-1 '>{frmLogin.errors.email}</div>}
                </div>
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-lock" style={{ marginRight: "20px" }}></i>
                <div className='form-outline flex-fill mb-0'>
                  <input type='password' className='form-control mt-2' id='password' name='password' placeholder='Your Password' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} style={{ width: "351px" }} />
                  {frmLogin.errors.password && <div className='text-danger position-absolute m-1'>{frmLogin.errors.password}</div>}
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