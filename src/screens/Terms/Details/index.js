import { connect } from 'react-redux';
import Details from './Details';

const mapStateToProps = ({ terms: { details }, locales: { locale } }) => ({
  details,
  locale,
});

export default connect(mapStateToProps)(Details);
