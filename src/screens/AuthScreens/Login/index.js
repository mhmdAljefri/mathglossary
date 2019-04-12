import { connect } from 'react-redux';
import { signin } from '../../../redux/login/actionCreators'
import Login from './Login';

const mapDisptachToProps = (dispatch) => ({
  signin: (data) => dispatch(signin(data)) ,
})

const mapStateToProps = ({
  login: {fetching, error}
}) => ({
  fetching,
  error,
});

export default connect(mapStateToProps, mapDisptachToProps)(Login);
