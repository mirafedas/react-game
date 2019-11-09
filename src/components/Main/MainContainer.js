import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import changeScore from '../../actions/index';

import Main from './Main';

const mapStateToProps = (state) => ({
  score: state.mainReducer.score
});

const mapDispatchToProps = (dispatch) => ({
  changeScore: bindActionCreators(changeScore, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
