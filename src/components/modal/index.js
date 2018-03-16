import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../modules/modal';
import Xicon from '../../iconComponents/xIcon';
import '../../styles/modal.css';

class Modal extends React.Component {

  constructor(props){
    super(props);
    this.state={
      render: false,
      component: null
    };
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.render !== this.state.render){
      this.setState({
        component: nextProps.component,
        render: nextProps.render
      });
    }
  }

  render () {
    if(this.state.component) {
      return (
        <div className="modal-frame">
          <div className="modal-content-wrapper">
            {this.props.component}
            <div onClick={ () => this.props.closeModal()}>
              <Xicon/>
            </div>
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
    render: state.modal.render,
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
