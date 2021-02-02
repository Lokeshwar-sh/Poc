import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actions';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  mr_10: {
      marginRight: 10
  }
}));

const AddUserContext = (props) => {
    const [data, setData ] = useState({
        id: props.editableProfile[0] ? props.editableProfile[0].id : '',
        userName: props.editableProfile[0] ? props.editableProfile[0].userName : '',
        firstName: props.editableProfile[0] ? props.editableProfile[0].firstName  : '',
        lastName: props.editableProfile[0] ? props.editableProfile[0].lastName  : '',
        age: props.editableProfile[0] ? props.editableProfile[0].age  : '',
        salary: props.editableProfile[0] ? props.editableProfile[0].salary  : '',
    }) 
    const classes = useStyles();
    const handleClose = () => {
        props.closeModal()
    };
    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = event => {
        event.preventDefault();
        if(data.id !== '') {
            props.edit(data)
        }else {
            props.submit(data)
        }
       
        props.closeModal()
    }

    return  (
            <>
                <form  className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                <div >
                    <TextField
                    id="userName"
                    label="User Name"
                    defaultValue={data.userName}
                    fullWidth
                    required={true}
                    name="userName"
                    onChange={handleChange}
                    />
                    <TextField
                    id="firstName-helper-text"
                    label="First Name"
                    defaultValue={data.firstName}
                    name="firstName"
                    fullWidth
                    onChange={handleChange}
                    required={true}
                    />
                    <TextField
                    id="lastName-helper-text"
                    label="Last Name"
                    defaultValue={data.lastName}
                    name="lastName"
                    fullWidth
                    onChange={handleChange}
                    required={true}
                    />
                    <TextField
                    id="Age-helper-text"
                    label="Age"
                    defaultValue={data.age}
                    name="age"
                    type="number"
                    fullWidth
                    onChange={handleChange}
                    required={true}
                    />
                    <TextField
                    id="salary-helper-text"
                    label="Salary"
                    defaultValue={data.salary}
                    name="salary"
                    fullWidth
                    onChange={handleChange}
                    required={true}
                    />
                </div>
                <Button type="submit" variant="contained" className={classes.mr_10}>
                    {props.editableProfile[0] ? 'Save': 'Submit'}
                </Button>
                <Button variant="contained" color="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                </form>
            </> 
         )
    }

const mapStateToProps = state => {
    return {
        modalState: state.modalState,
        editableProfile: state.editableProfile
    }
}
const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(actionCreator.closeAddUserModal()),
        submit: (data) => dispatch(actionCreator.submitAddUser(data)),
        edit: (data) => dispatch(actionCreator.editUserProfile(data)),
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(AddUserContext)