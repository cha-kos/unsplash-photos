import React from 'react';

export default class PhotoModal extends React.Component{

  constructor(props){
    debugger
    super(props);
    this.state = {
      photoUrl: props.photo.urls.regular,
      avatarUrl: props.photo.user.profile_image.medium,
      instagram: props.photo.user.instagram_username,
      name: props.photo.user.first_name + props.photo.user.last_name,
      location: props.photo.user.location,
    };
  }

  render(){
    return(
      <div className="photo-modal-container">
        <img src={this.state.photoUrl} />
        <img className="photo-modal-avatar" src={this.state.avatarUrl} />
        <span className="photo-modal-username">{this.state.name}</span>
        <span className='photo-modal-instagram'>@{this.state.instagram}</span>
        <span className='photo-modal-location'>{this.state.location}</span>
      </div>
    );
  }
}
