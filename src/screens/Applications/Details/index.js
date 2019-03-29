import { connect } from 'react-redux';
import Details from './Details';

const mapStateToProps = ({ locales: { locale } }) => ({
  locale,
});

export default connect(mapStateToProps)(Details);
