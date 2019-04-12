import { connect } from 'react-redux';
import { signup } from '../../../redux/register/actionCreators'
import Register from './Register';

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch(signup(data)),
});

export default connect(null, mapDispatchToProps)(Register);
