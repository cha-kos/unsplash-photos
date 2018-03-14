import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../modules/photo';
import '../../styles/photoFeed.css';

class GetPhotosButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){
    // this.setState({photos: nextProps.photos.photos}, () => {
    // });
  }

  render(){
    return(
        <div className="button-container">
          <button className="get-photos-button" onClick={this.props.getPhotos}>GET PHOTOS</button>
        </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    photos: state.photos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPhotosButton);
