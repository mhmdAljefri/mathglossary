import { connect } from 'react-redux';
import { getList } from "../../../redux/testsites/actionCreators";
import List from './List';

const mapStateToProps = ({
  testsites: {
    list,
    details,
    fetching,
    error,
    pagination,
  },
  locales: { locale },
}) => ({
  list,
  details,
  pagination,
  fetching,
  error,
  locale,
});

const mapDispatchToProps = dispatch => ({
  getList: (params, pushArray) => dispatch(getList(params, pushArray)),
});

export default connect (mapStateToProps, mapDispatchToProps)(List);
