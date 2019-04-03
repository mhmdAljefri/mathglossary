import React from 'react';
import Profile from './Profile';
import Main from './Main';

export default ({token}) => {
  return (
    !!token ? <Profile /> : <Main />
  )
}
