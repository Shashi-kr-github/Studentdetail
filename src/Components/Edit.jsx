import { FormControl, FormGroup, InputLabel,Input,Button, makeStyles, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import { addUser,getUsers,editUser} from '../Service/api'
import { useHistory,useParams } from "react-router-dom";
import { Link } from "react-router-dom";



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

const EditUser = () => {
    const classes = useStyle();
    const[user, setUser] = useState(initialvalues);
    const {name, username, email, phone} = user;
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () => {
      const response =  await getUsers(id);
      setUser(response.data)
    }

    
    const onvaluechange = (e) => {
     setUser({...user, [e.target.name] : e.target.value})
     console.log(user)
    }
    const editUserDetail = async() => {
        await editUser(id, user)
      
        history.push('./all')
      
    }


    return (
       <FormGroup className={classes.container}>
           <Typography variant="h4">Edit User</Typography>
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
           <Button variant = 'contained' color= 'primary' onClick={() => editUserDetail() }>Edit User</Button>
       </FormGroup>
    );
}
export default EditUser;