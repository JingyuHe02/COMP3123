import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './actions';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const handleLogin = () => {
    const fakeJWT = 'fake.jwt.token.123';
    dispatch(login(fakeJWT));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>React Redux + JWT Demo</h1>

      {token ? (
        <>
          <p>Logged in! Token:</p>
          <p>{token}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
