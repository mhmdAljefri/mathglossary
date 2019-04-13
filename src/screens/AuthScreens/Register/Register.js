import React from 'react';
import { Alert } from 'react-native';
import { I18n } from 'react-redux-i18n';
import Container from '../components/Container';

const Register = ({signup}) => {
  const formFields = [
    { icon: 'user', key: 'name', placeholder: 'user_name' },
    { icon: 'mail', key: 'email', placeholder: 'user_email', keyboardType: 'email-address' },
    { icon: 'phone', key: 'mobile', placeholder: 'user_mobile', keyboardType: 'phone-pad' },
    { icon: 'lock', key: 'password', placeholder: 'user_password' },
  ];

  const handleRegister = (values) => signup(values).catch(handleError);
  const handleError = () => Alert.alert(I18n.t('somthing_goes_wrong'))

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
