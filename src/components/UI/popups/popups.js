import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import * as actionCreator from '../../../store/actions';

  
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
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    footer: {
      textAlign: 'right',
      marginTop: 20
    },
    mr_10 : {
      marginRight: 10
    }
  }));

const ConfirmationPopups = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const handleClose = () => {
        props.closePopup()
    };

    const confirmhandler = () => {
      let id = props.popup.data
      props.confirmationPopup(id)
      props.closePopup()
  };

    const body = (
      <div style={modalStyle} className={classes.paper}>
          {props.popup.context}
          <div className={classes.footer}>
            <Button type="button" variant="contained" className={classes.mr_10}  onClick={confirmhandler}>
                {props.popup.action} 
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
                Cancel
            </Button>  
          </div>   
       </div>
    );
  
    return (
      <div>
        <Modal
          open={props.popup.visible}
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
      popup: state.popup,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closePopup: () => dispatch(actionCreator.closePopup()),
    confirmationPopup: (id) => dispatch(actionCreator.onRemoveUser(id))
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ConfirmationPopups)