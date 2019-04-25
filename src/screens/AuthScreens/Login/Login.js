import React from 'react';
import Continer from '../components/Container';

const Login = ({ signin }) => {
  const handleLogin = (values) => signin(values)

  const formFields = [
    { key: 'email', icon: 'user', placeholder: 'user_email', autoFocuse: true, keyboardType: 'email-address' },
    { key: 'password', icon: 'lock', placeholder: 'user_password', secureTextEntry: true },
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
  );
};

export default Login;
