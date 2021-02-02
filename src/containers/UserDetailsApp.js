import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import * as actionCreator from '../store/actions';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';


import UserTable from '../components/UserTable/UserTable';
import Naviagtion from '../components/Navigation/Naviagtion';
import Modal from '../components/UI/Modal/Modal';
import ConfirmationPopups from '../components/UI/popups/popups';


const UserDetailsApp = props => {

    const { onGetAllUser } = props;
    
    useEffect(() => {
        onGetAllUser()
    },[onGetAllUser])

    const addUserHandler = () => {
        props.openModal()
    }
       
    return  (
        <>
            <Naviagtion />
            <Modal />
            <ConfirmationPopups />
            <div>&nbsp;</div>
            <h1 className="text-center">User Details</h1>
            <Container maxWidth="md">
                <Button onClick={addUserHandler} type="button" variant="contained" >Add User</Button> 
                <div>&nbsp;</div>
                <UserTable userList={props.userList}/> 
            </Container>
        </> 
    )     
} 

const mapStateToProps = state => {
    return {
        userList: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllUser: () => dispatch(actionCreator.getAllUsers()),
        openModal: () => dispatch(actionCreator.openAddUserModal())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(UserDetailsApp)