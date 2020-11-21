import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    // e.preventDefault();
  };

  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            autoComplete='email'
            required
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            autoComplete='current-password'
            id='password'
            required
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button type='submit' className='primary'>
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New Customer? <Link to='/register'>Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SigninScreen;
