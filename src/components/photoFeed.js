import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getPhotos from '../modules/photo.js';

class PhotoFeed extends React.Component{
  constructor(props){
    super(props);
    this.state.photos = [];
  }

  render(){
    return(
      <button onClick={this.props.getPhotos}>GET PHOTOS</button>
    );
  }

}

const mapStateToProps = state => {
  return {
    photos: state.photos,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getPhotos: () => dispatch(getPhotos())
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
