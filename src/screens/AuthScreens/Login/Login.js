import React from 'react';
import Continer from '../components/Container';

const Login = () => {
  const handleLogin = (values) => console.log({values});
  const formFields = [
    { key: 'email', icon: 'user', pleaceholder: 'user_email', autoFocuse: true, keyboardType: 'email' },
    { key: 'password', icon: 'lock', pleaceholder: 'user_password', secureTextEntry: true },
  ];
  return (
    <Continer
      title="login_title"
      onSubmit={handleLogin}
      formFields={formFields}
      buttons={[
        'forget',
        'registration',
      ]}
    />
  )
};

export default Login;
