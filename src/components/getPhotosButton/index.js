import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../modules/photo';
import { loading } from '../../modules/getPhotosButton';
import PlusCircle from '../../iconComponents/plusCircle';
import '../../styles/getPhotosButton.css';

class GetPhotosButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status: "disabled"
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({status: nextProps.status}, () => {
    });
  }

  handleClick(){
    this.props.getPhotos();
    this.props.loading();
  }

  render(){
    if(this.state.status === "disabled")
      return(
          <div className="button-container">
            <a>
              <button className="get-photos-button disabled"><PlusCircle/>Get Photos</button>
            </a>
          </div>
      );
    if(this.state.status === "complete")
      return(
          <div className="button-container">
            <a>
              <button className="get-photos-button" onClick={this.handleClick.bind(this)}><PlusCircle/>
                Get Photos
              </button>
            </a>
          </div>
      );
    if(this.state.status === "loading")
      return(
          <div className="button-container">
            <a>
              <button className="get-photos-button disabled">
                <div className="sk-circle">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
                </div>
              </button>
            </a>
          </div>
      );
  }

}

const mapStateToProps = state => {
  return {
    status: state.getPhotosButton.status,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos()),
    loading: () => dispatch(loading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPhotosButton);
