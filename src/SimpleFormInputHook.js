import React from 'react';
import useFormState from './hooks/useFormState';

const SimpleFormInputHook = () => {
  const [email, updateEmail, resetEmail] = useFormState('');
  const [password, updatePassword, resetPassword] = useFormState('');

  return (
    <div>
      <h1>New Email Form</h1>
      <p>{email}</p>
      <p>{password}</p>
      <input type='text' value={email} onChange={updateEmail} />
      <input type='text' value={password} onChange={updatePassword} />
      <button onClick={resetEmail}>Reset Email</button>
    </div>
  )
}

export default SimpleFormInputHook;