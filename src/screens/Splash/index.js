import { connect } from "react-redux";
import { getCities } from "../../redux/cities/actionCreators";
import Splash from './Splash';

const mapState = ({
  citiesReducer: { fetching, cities, error },
}) => ({
  fetching,
  cities,
  error,
})

const mapDispatch = (dispatch) => ({
  fetchList: (params) => dispatch(getCities(params)),
})

export default connect(mapState, mapDispatch)(Splash);
