import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTER } from '../../utils/mutations';
import auth from '../../utils/auth';
// import { FaUserCircle, FaEnvelope, FaLock, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const Register = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:""
  });
  const [addProfile, { error, data }] = useMutation(REGISTER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { email:formState.email,name:formState.name,password:formState.password },
      });
      console.log(data)

      auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (

    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="signupCard">
            {data ? (
              <p id="success-Login">
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form  className="signupForm" onSubmit={handleFormSubmit} autoComplete="off" method="post" action="">
              <img src='../../images/icons/iplus.png' alt="Inventory+ Logo" className='login-signup-logo' />
              <h4 className="card-header" id="signupHeader">Register</h4>
              <div className="input-container">
              {/* <FaUserCircle id="usernameIcon-Signup" style={{color: 'gray', fontSize: '25px'}} /> */}
                <input 
                  className="formInput-Signup"
                  placeholder="Username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-container">
              {/* <FaEnvelope id="emailIcon-Signup" style={{color: 'gray', fontSize: '25px'}} /> */}
                <input
                  className="formInput-Signup"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-container">
              {/* <FaLock id="passwordIcon-Signup" style={{color: 'gray', fontSize: '25px'}} /> */}
                <input 
                  className="formInput-Signup"
                  placeholder="Choose Password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
              {/* <FaLock id="passwordIcon-Signup" style={{color: 'gray', fontSize: '25px'}} /> */}
                <input 
                  className="formInput-Signup"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="off"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              
                <button id="submitBtn-Signup"
                  className="btn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>

                <p className="redirectSignup">
                <Link className='link-text-ls' to="/login">
                  Back to Login
                </Link>
                </p>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white" id= "errorMsg-Signup">
                {error.message}
              </div>
            )}
          </div>
        </div>
    </main>
  );
};

export default Register;
