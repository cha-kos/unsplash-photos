import React from 'react';
import MapPin from '../../iconComponents/mapPin';

export default class PhotoModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      photoUrl: props.photo.urls.regular,
      avatarUrl: props.photo.user.profile_image.medium,
      instagram: props.photo.user.instagram_username,
      name: props.photo.user.name,
      location: props.photo.user.location,
    };
  }

  render(){
    if(this.state.instagram){
      var instagramLink = `https://www.instagram.com/${this.state.instagram}`;
    }
    return(
      <div className="photo-modal-container">
        <img className="photo-modal-image" src={this.state.photoUrl} alt="modal" />
        <img className="photo-modal-avatar" src={this.state.avatarUrl} alt="modal"/>
        <span className="photo-modal-username">{this.state.name}</span>
        {this.state.instagram ? <a className='photo-modal-instagram' href={instagramLink}>@{this.state.instagram}</a> : null}
        {this.state.location? <div className='photo-modal-location'><MapPin/><span >{this.state.location}</span></div> : null}
      </div>
    );
  }
}
