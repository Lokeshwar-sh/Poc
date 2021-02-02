import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classes from './UserTable.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actions';





const  UserTable = (props) => {

const deleteHandler = (id) => {
  props.removeUser(id)
}

const editHandler = (id) => {
  props.editUser(id)
}

  return (
    <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userList.map((usr) => (
            <TableRow key={usr.name}>
              <TableCell component="th" scope="row">
                {usr.id}
              </TableCell>
              <TableCell align="right">{usr.userName}</TableCell>
              <TableCell align="right">{usr.firstName}</TableCell>
              <TableCell align="right">{usr.lastName}</TableCell>
              <TableCell align="right">{usr.age}</TableCell>
              <TableCell align="right">{usr.salary}</TableCell>
              <TableCell align="right" onClick={() => editHandler(usr.id)}><EditIcon /></TableCell>
              <TableCell align="right" onClick={() => deleteHandler(usr.id)}><DeleteIcon /></TableCell>
            </TableRow>
          ))}
          {props.userList.length === 0 &&
          <TableRow>
                <TableCell colSpan={8}>
                    <div className={classes.textCenter}>
                       Sorry, No data here
                    </div>
                </TableCell>
          </TableRow> }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const mapStateToProps = state => {
  return {
      userList: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
      removeUser: (id) => dispatch(actionCreator.onRemoveUserInitiate(id)),
      editUser: (id) => dispatch(actionCreator.editUserProfileInitiate(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserTable)

