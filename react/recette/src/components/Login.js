import React from 'react';

const Login = ({authenticate}) => {
  return (
    <div className="login">
        <h2> Connecte toi pour créer des recettes</h2>
        <button onClick={authenticate} className="facebook-button">Me connecter</button>
    </div>
  )
}

export default Login;
