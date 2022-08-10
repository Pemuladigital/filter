import React from 'react'
import './Login.css'
import useLogin from './useLogin'


const Login = () => {
  const {handleChange, values} = useLogin();

  return (
    <div className='login-container'>
      <div className='login-components-right'>
        <div className='login-elements'>
          <img src='./images/components4.png'></img>
          <div className='header-login'>WELCOME BACK!</div>
        </div>
      </div>
      <div className='login-components-left'>
        <div className="login-title">LOGIN</div>
        <div className='login-form'>
          <form>
            <div className='username-form'>
              <label htmlFor='username'>
                <input
                  type='text'
                  name='username'
                  placeholder='Input your user ID or Email'
                  value={values.username}
                  onChange={handleChange}
                >
                </input>
              </label>
            </div>

            <div className='password-form'>
              <label htmlFor='password' className='password-form'>
                <input
                  type='password'
                  name='password'
                  placeholder='Input your password'
                  value={values.password}
                  onChange={handleChange}
                >
                </input>
              </label>
          </div>
          </form>
        </div>
        
        <button className='form--input' type='submit'>
            LOGIN
        </button>

      </div>
  </div>
  )
}

export default Login;