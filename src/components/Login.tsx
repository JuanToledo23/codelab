import React, { useEffect, useState } from 'react';
import './Login.css';

function Login() {

  const [email, setEmail] = useState({value: '', state: true});
  const [passw, setPassw] = useState({value: '', state: true});
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if(email.value && passw.value) {
      setValidated(true)
    } else {
      setValidated(false)
    }
  }, [email, passw])
  


  return (
    <div className="login-container">
      <h1>Login</h1>
      <form action="" className='form-login'>
        <label htmlFor='name'>Email:</label>
        <input id="name" type="text" name="name" value={email.value} onChange={e => setEmail({value: e.target.value, state: false})} />
        {!email.value && !email.state ? <label className='validation-label'>Escribe tu email.</label> : null}
        <label htmlFor='password'>Contraseña:</label>
        <input id="password" type="password" name="password" value={passw.value} onChange={e => setPassw({value: e.target.value, state: false})}/>
        {!passw.value && !passw.state ? <label className='validation-label'>Escribe tu contraseña.</label> : null}
        {/* <input type="submit" value="Login" className={!email.value || !passw.value ? 'button-disabled' : ''}/> */}
        <input type="submit" value="Login" className={!validated ? 'button-disabled' : ''}/>
      </form>
    </div>
  );
}

export default Login;
