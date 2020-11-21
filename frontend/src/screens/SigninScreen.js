import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function SigninScreen(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
console.log(error)
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant='danger'> {error}</MessageBox>}
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
