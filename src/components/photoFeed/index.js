import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../modules/photo';
import { loadingComplete } from '../../modules/getPhotosButton';
import { openModal } from '../../modules/modal';
import GetPhotosButton from '../getPhotosButton';
import PhotoModal from './photoModal';
import Modal from '../modal';
import List from '../../iconComponents/list';
import Grid from '../../iconComponents/grid';
import '../../styles/photoFeed.css';

class PhotoFeed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      view: "grid",
      gridButtonStatus: "active",
      listButtonStatus: "",
      renderModal: false
    };
  }

  componentDidMount(){
    this.props.getPhotos();
  }

  componentWillReceiveProps(nextProps){
    if(this.state.renderModal !== nextProps.renderModal){
      this.setState({renderModal: nextProps.renderModal});
    }
    this.setState({photos: nextProps.photos.photos}, () => {
      this.props.loadingComplete();
    });
  }

  toggleView(target){
    if(this.state.view === "list" && target === "grid"){
      this.setState(
        { view: "grid",
          gridButtonStatus: "active",
          listButtonStatus: ""
        });
    }else if(this.state.view === "grid" && target === "list"){
      this.setState(
        { view: "list",
          gridButtonStatus: "",
          listButtonStatus: "active"
        });
    }
  }

  displayPhotos(){
    if(this.state.view === "list"){
      return(
        <ul className="photo-list">
          {this.state.photos.map((photo, i) => {
            return(
              <li key={i}>
                <div className="list-thumbnail-frame">
                  <img className={this.state.renderModal ? "list-thumbnail" : "thumbnail list-thumbnail"}
                       src={photo.urls.regular}
                       alt="thumbnail"
                       onClick={() => this.props.openModal(<PhotoModal photoUrl={photo.urls.regular}/>)}/>
                 </div>
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
                <div className="grid-thumbnail-frame">
                  <img className={this.state.renderModal ? "grid-thumbnail" : "thumbnail grid-thumbnail"}
                       src={photo.urls.regular}
                       alt="thumbnail"
                       onClick={() => this.props.openModal(<PhotoModal photoUrl={photo.urls.regular}/>)}/>
                </div>
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
            <button className={`header-button ${this.state.gridButtonStatus}`} onClick={() => this.toggleView("grid")}>
              <Grid/>
                Grid
            </button>
            <button className={`header-button ${this.state.listButtonStatus}`} onClick={() => this.toggleView("list")}>
              <List/>
                List
            </button>
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
    renderModal: state.modal.render
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos()),
    loadingComplete: () => dispatch(loadingComplete()),
    openModal: (component) => dispatch(openModal(component))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
