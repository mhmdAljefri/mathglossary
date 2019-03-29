import { connect } from 'react-redux';
import { getList } from "../../../redux/applications/actionCreators";
import List from './List';

const mapStateToProps = ({
  applications: {
    list,
    details,
    fetching,
    error,
    pagination,
  }
}) => ({
  list,
  details,
  pagination,
  fetching,
  error,
});

const mapDispatchToProps = dispatch => ({
  getList: (params, pushArray) => dispatch(getList(params, pushArray)),
});

export default connect (mapStateToProps, mapDispatchToProps)(List);
