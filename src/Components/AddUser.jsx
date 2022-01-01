import { FormControl, FormGroup, InputLabel,Input,Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { addUser} from '../Service/api'
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *' : {
            marginTop: '20px',
        },
        btn : {
            background: 'blue'
        }
    }
})
const initialvalues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {
    const classes = useStyle();
    const[user, setUser] = useState(initialvalues);
    const history = useHistory();

    const {name, username, email, phone} = user;
    const onvaluechange = (e) => {
     setUser({...user, [e.target.name] : e.target.value})
     console.log(user)
    }
    const addUserDetail = async() => {
        await addUser(user)
        alert('user added')
        history.push('./all')
      
    }


    return (
       <FormGroup className={classes.container}>
           <Typography variant="h4">Add User</Typography>
           <FormControl>
               <InputLabel>Name</InputLabel>
               <Input onChange={(e) => onvaluechange(e)} name='name' value={name}/>
           </FormControl>
           <FormControl>
               <InputLabel>Username</InputLabel>
               <Input onChange={(e) => onvaluechange(e)} name='username' value={username}/>
           </FormControl>
           <FormControl>
               <InputLabel >Email</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name='email' value={email}/>
           </FormControl>
           <FormControl>
               <InputLabel >phone</InputLabel>
               <Input onChange={(e) => onvaluechange(e)} name='phone' value={phone}/>
           </FormControl>
           <Button variant = 'contained' color= 'primary' onClick={() => addUserDetail()}>Add User</Button>
       </FormGroup>
    );
}
export default AddUser;