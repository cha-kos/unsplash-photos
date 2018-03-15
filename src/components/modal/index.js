import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../modules/modal';
import '../../styles/modal.css';

class Modal extends React.Component {

  constructor(props){
    super(props);
    this.state={
      component: null
    };
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.component){
      this.setState({component: nextProps.component});
    }
  }

  render () {
    if(this.state.component) {
      return (
        <div className="modal-frame" onClick={ () => this.props.closeModal()}>
          <div className="modalContent">
            {this.props.component}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return ({
    component: state.modal.component
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
