import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Posts from './Posts';
import {
  fetchPosts,
  createPost,
  deletePost,
  editPost,
} from '../../actions';

const mapStateToProps = (state) => ({
  postsData: state.postsData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchPosts,
    createPost,
    deletePost,
    editPost,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
