import { connect } from 'react-redux';
import { getTerms } from "../../../redux/terms/actionCreators";
import List from './List';

const mapStateToProps = ({
  terms: {
    list,
    details,
    fetching,
    message,
    error,
    pagination,
  }
}) => ({
  message,
  list,
  details,
  pagination,
  fetching,
  error,
});

const mapDispatchToProps = dispatch => ({
  getList: (params, pushArray) => dispatch(getTerms(params, pushArray)),
});

export default connect (mapStateToProps, mapDispatchToProps)(List);
