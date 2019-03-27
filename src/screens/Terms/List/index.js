import { connect } from 'react-redux';
import { getList } from "../../../redux/terms/actionCreators";
import List from './List';

const mapStateToProps = ({
  terms: {
    list,
    details,
    fetching,
    error,
    pagination,
  },
  citiesReducer: {
    cityID,
  }
}) => ({
  list,
  details,
  pagination,
  fetching,
  error,
  cityID,
});

const mapDispatchToProps = dispatch => ({
  getList: (params, pushArray) => dispatch(getList(params, pushArray)),
});

export default connect (mapStateToProps, mapDispatchToProps)(List);
