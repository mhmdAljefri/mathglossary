import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import Main from './Main';

const Index = ({token, profile, logout}) => !!token ? <Profile onLogout={logout} data={profile} /> : <Main />

const mapStateToProps = ({login: { token, profile }}) => ({
  token,
  profile,
})

const mapDisptchToProps = dispatch => ({
  logout: () => dispatch({ type: 'LOGOUT' })
});

export default connect(mapStateToProps, mapDisptchToProps)(Index)
