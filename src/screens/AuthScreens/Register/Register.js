import React from 'react';
import Container from '../components/Container';

const Register = () => {
  const formFields = [
    { icon: 'user', key: 'name', placeholder: 'user_name' },
    { icon: 'mail', key: 'email', placeholder: 'user_email', keyboardType: 'email' },
    { icon: 'phone', key: 'mobile', placeholder: 'user_mobile' },
    { icon: 'lock', key: 'password', placeholder: 'user_password' },
  ];
  return (
    <Container
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
