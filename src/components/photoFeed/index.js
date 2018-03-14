import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../modules/photo';
import GetPhotosButton from '../getPhotosButton';
import '../../styles/photoFeed.css';

class PhotoFeed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount(){
    this.props.getPhotos();
  }

  componentWillReceiveProps(nextProps){
    this.setState({photos: nextProps.photos.photos}, () => {
    });
  }

  render(){
    return(
      <div className="photo-feed-container">
      <header className='photo-feed-header'>
        <span className="photo-feed-label">My Photos</span>
        <span className="list-grid-buttons-container">
          <button>Grid</button>
          <button>List</button>
        </span>
      </header>
        <ul className="photo-list">
          {this.state.photos.map((photo, i) => {
            return(
              <li key={i}>
                <img className="photo-thumbnail" src={photo.urls.thumb}/>
                <a className="photo-link" href={photo.links.download}>{photo.links.download}</a>
              </li>
            );
          })}
        </ul>
        <GetPhotosButton/>
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
)(PhotoFeed);
