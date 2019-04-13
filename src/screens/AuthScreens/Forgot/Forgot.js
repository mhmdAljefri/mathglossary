import React from 'react';
import { Alert } from 'react-native';
import Continer from '../components/Container';
import { I18n } from 'react-redux-i18n';
import Api from '../../../helpers/api';

const Forgot = () => {
  const handleForgot = (values) => Api.post('sessions/forgot', values).then(handleSuccess).catch(handleError)

  const handleSuccess = () => Alert.alert(I18n.t('you_will_receive_email'))
  const handleError = () => Alert.alert(I18n.t('somthing_goes_wrong'))

  const formFields = [
    { key: 'email', icon: 'mail', placeholder: 'user_email', autoFocuse: true, keyboardType: 'email-address' },
  ];
  return (
    <Continer
      title="forget_title"
      onSubmit={handleForgot}
      formFields={formFields}
      buttons={[
        'login',
        'registration',
      ]}
    />
  )
};

export default Forgot;
