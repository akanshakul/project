import React, { useState } from 'react';
import "./Login.css";
const App = () => {
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [loginUsername, ] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [isSignup, setIsSignup] = useState(true);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!signupUsername || !signupPassword || !signupEmail || !signupConfirmPassword) {
      alert('Please fill in all fields for signup.');
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      alert('Password and Confirm Password must match.');
      return;
    }

    setIsSignup(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginUsername || !loginPassword || !loginEmail) {
      alert('Please fill in all fields for login.');
      return;
    }

    
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };
//mylogin
  return (

      <div className="login-container">
        <div className="login-form">
      {isSignup ? (
          <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            
            <div className="form-group">
            <label htmlFor="username">Username</label>
            
              <input
                type="text"
                placeholder="Username"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
                required
              />
            </div>
             <div className="form-group">
            <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?
              <button>
                <span onClick={toggleForm}>Login</span>
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
         
            <div>
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            <p>
              Don't have an account?
              <button>
                <span onClick={toggleForm}>Sign Up</span>
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
