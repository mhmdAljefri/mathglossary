import { connect } from "react-redux";
import BuildingFilters from './BuildingFilters';

const mapStateToProps = ({ hotelsReducer }) => ({
  filters: hotelsReducer.filters,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: (filter) => dispatch({ type: 'HOTELS_CHANGE_FILTER', payload: filter }),
  resetFilter: () => dispatch({ type: 'HOTELS_RESET_FILTER' }),
  changePrice: (priceObject) => dispatch({ type: 'HOTELS_CHANGE_PRICE', payload: priceObject  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuildingFilters)
