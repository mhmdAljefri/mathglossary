import { connect } from 'react-redux';
import { getRecord } from "../../../redux/terms/actionCreators";
import Details from './Details';

const mapStateToProps = ({ terms: { details } }) => ({
  details
});

const mapDispatchToProps = dispatch => ({
  getRecord: (id, params) => dispatch(getRecord(id, params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);
