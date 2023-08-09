import React from 'react'
import '../../assets/css/scss/regitser/register.scss'
import { NavLink } from 'react-router-dom'
import { Formik, Form, Field, useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { DispatchType } from '../../redux/store'
import { registerActionApi } from '../../redux/UserReducer/userReducer'

export type UserRegisterModel = {
  email: string,
  password: string,
  passwordConfirm: string,
  name: string,
  phone: string,
  birthday: string,
  gender: boolean,
}

type Props = {}

const Register = (props: Props) => {

  const dispatch: DispatchType = useDispatch();

  const frmRegister = useFormik<UserRegisterModel>({
    initialValues: {
      name: "",
      email: "",
      password: '',
      passwordConfirm: "",
      phone: '',
      birthday: '',
      gender: true
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().matches(/[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/, " *Name Không đúng định dạng ").required(" *Name không được bỏ trống "),
      email: Yup.string().email('*Email không đúng định dạng').required('*Email không được bỏ trống '),
      password: Yup.string().min(6, " *Password từ 6 - 32 ký tự ").max(32, "*pass từ 6 - 32 ký tự !").required("  *Password không được bỏ trống "),
      passwordConfirm: Yup.string().oneOf([Yup.ref("password")], "  *Password phải trùng nhau ").required("  *PasswordConfirm không được bỏ trống "),
      phone: Yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "  *Phone phải từ 03 05 07 08 09 và có 10 số ").required(" *Phone không được bỏ trống "),
      birthday: Yup.string().required("*Birthday không được bỏ trống"),
    }),

    onSubmit: (values: UserRegisterModel) => {
      const actionAsync = registerActionApi(values);
      dispatch(actionAsync);
    }
  })

  return (
    <section className='signup' id='register'>
      <div className='container_form'>
        <div className='signup-content'>
          <div className='signup-form'>
            <h2 className='form-title-register'>REGISTER</h2>
            <form className='register-form' id='register-form' onSubmit={frmRegister.handleSubmit}>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className='fa-solid fa-user fa-lg me-3 fa-fw'></i>
                <input className="form-control" id="name" name="name" required placeholder="Your Name" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}></input>
                {frmRegister.errors.name && <div className="text-danger position-absolute" style={{ marginTop: "60px", marginLeft: "40px", fontSize: "13px", fontStyle: "italic" }}>{frmRegister.errors.name}</div>}
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-envelope fa-lg me-3 fa-fw"></i>
                <input className="form-control" id="mail" name="mail" required placeholder="Your Email" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}></input>
                {frmRegister.errors.email && <div className="text-danger position-absolute" style={{ marginTop: "60px", marginLeft: "40px", fontSize: "13px", fontStyle: "italic" }}>{frmRegister.errors.email}</div>}
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-lock fa-lg me-3 fa-fw"></i>
                <input type='password' className="form-control" id="password" name="password" required placeholder="Your Password" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}></input>
                {frmRegister.errors.password && <div className="text-danger position-absolute" style={{ marginTop: "60px", marginLeft: "40px", fontSize: "13px", fontStyle: "italic" }}>{frmRegister.errors.password}</div>}
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                <input type='password' className="form-control" id="confirm-Password" name="passwordConfirm" required placeholder="Reapeat Your Password" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}></input>
                {frmRegister.errors.passwordConfirm && <div className="text-danger position-absolute" style={{ marginTop: "60px", marginLeft: "40px", fontSize: "13px", fontStyle: "italic" }}>{frmRegister.errors.passwordConfirm}</div>}
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                <input className="form-control" id="phone" name="phone" required placeholder="Your Phone" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}></input>
                {frmRegister.errors.phone && <div className="text-danger position-absolute" style={{ marginTop: "60px", marginLeft: "40px", fontSize: "13px", fontStyle: "italic" }}>{frmRegister.errors.phone}</div>}
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <i className="fa-solid fa-cake-candles fa-lg me-3 fa-fw"></i>
                <input type='date' className="form-control" id="date" name="date" required placeholder="" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}></input>
                {frmRegister.errors.birthday && <div className="text-danger position-absolute" style={{ marginTop: "60px", marginLeft: "40px", fontSize: "13px", fontStyle: "italic" }}>{frmRegister.errors.birthday}</div>}
              </div>
              <div id='gender' className='gender'>
                <i className="fa-solid fa-venus-mars fa-lg me-3 fa-fw" ></i>
                <div className='radio gender_inp'>
                  <input type="radio" id='male' name='gender' value="true" checked onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur} />
                  <label className='radio-label'>Male</label>
                  <input type="radio" id='female' name='gender' value="false" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur} />
                  <label className='radio-label'>Female</label>
                </div>
              </div>
              <div className='form-group mt-2-frm' style={{ margin: "5px" }}>
                <input type="checkbox" required name="agree-term" id="agree-term" className="agree-term" style={{ margin: "0 15px" }} onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur} />
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