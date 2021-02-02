import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';

import * as actionCreator from '../../../store/actions';
import AddUserContext from '../../AddUser/AddUser';

  
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const UserModal = (props) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <AddUserContext/>
      </div>
    );
  
    return (
      <div>
        <Modal
          open={props.isOpen}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
} 

const mapStateToProps = state => {
  return {
      isOpen: state.modalState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(actionCreator.openAddUserModal())
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(UserModal)