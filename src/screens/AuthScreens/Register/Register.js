import React from 'react';
import Container from '../components/Container';

const Register = ({signup}) => {
  const formFields = [
    { icon: 'user', key: 'name', placeholder: 'user_name' },
    { icon: 'mail', key: 'email', placeholder: 'user_email', keyboardType: 'email-address' },
    { icon: 'phone', key: 'mobile', placeholder: 'user_mobile', keyboardType: 'phone-pad' },
    { icon: 'lock', key: 'password', placeholder: 'user_password' },
  ];

  const handleRegister = (values) => signup(values);

  return (
    <Container
      onSubmit={handleRegister}
      title="registration_title"
      formFields={formFields}
      buttons={[
        'login',
        'forget'
      ]}
    />
  )
};

export default Register;
