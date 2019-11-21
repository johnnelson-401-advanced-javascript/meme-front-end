import { connect } from 'react-redux';
import { createMeme } from '../actions/memeActions';
import MemeForm from '../components/meme/MemeForm';

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, topText, bottomText, imageUrl) {
    event.preventDefault();
    dispatch(createMeme({ topText, bottomText, imageUrl }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MemeForm);
