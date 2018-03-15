import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../modules/photo';
import GetPhotosButton from '../getPhotosButton';
import { loadingComplete } from '../../modules/getPhotosButton';
import '../../styles/photoFeed.css';

class PhotoFeed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      view: "list"
    };
  }

  componentDidMount(){
    this.props.getPhotos();
  }

  componentWillReceiveProps(nextProps){
    this.setState({photos: nextProps.photos.photos}, () => {
      this.props.loadingComplete();
    });
  }

  toggleView(){
    if(this.state.view === "list"){
      this.setState({view: "grid"});
    }else{
      this.setState({view: "list"});
    }
  }

  displayPhotos(){
    if(this.state.view === "list"){
      return(
        <ul className="photo-list">
          {this.state.photos.map((photo, i) => {
            return(
              <li key={i}>
                <img className="list-thumbnail" src={photo.urls.thumb} alt="thumbnail"/>
                <a className="photo-link" href={photo.links.download}>{photo.links.download}</a>
              </li>
            );
          })}
        </ul>
      );
    }else{
      return(
        <ul className="photo-grid">
          {this.state.photos.map((photo, i) => {
            return(
              <li key={i}>
                <img className="grid-thumbnail" src={photo.urls.thumb} alt="thumbnail"/>
              </li>
            );
          })}
        </ul>
      );
    }

  }

  render(){
      return(
        <div className="photo-feed-container">
        <header className='photo-feed-header'>
          <span className="photo-feed-label">My Photos</span>
          <span className="header-buttons-container">
            <button>Grid</button>
            <button>List</button>
          </span>
        </header>
          {this.displayPhotos()}
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
    getPhotos: () => dispatch(getPhotos()),
    loadingComplete: () => dispatch(loadingComplete())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
