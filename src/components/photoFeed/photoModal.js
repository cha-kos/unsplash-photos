import React from 'react';

export default class PhotoModal extends React.Component{

  render(){
    return(
        <img src={this.props.photoUrl} />
    );
  }
}
