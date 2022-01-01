import { Table, TableBody, TableCell, TableHead, TableRow , makeStyles, Button} from "@material-ui/core";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

import { getUsers , deleteUser} from "../Service/api";



const useStyle = makeStyles({
    table : {
        width: '90%',
        margin: '50px 0 0 5%'
    },
    thead : {
        '& > *' : {

        background: '#000000',
        color: '#FFFFFF',
        fontsize: '17px',
        }
    }
})

const AllUsers = () => {
    const [users, setUser] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllUsers()

    },[]);

    const getAllUsers =  async () => {
       const response = await  getUsers();
       console.log(response.data)
       setUser(response.data);
    }
     
    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers()
    }


    return (
       <Table className= { classes.table}>
           <TableHead>
               <TableRow className = {classes.thead}>
                   <TableCell>Id</TableCell>
                    <TableCell>name</TableCell>
                     <TableCell>Username</TableCell>
                      <TableCell>Email</TableCell>
                       <TableCell>Phone</TableCell>
                         <TableCell></TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
              
                 {
                     users.map(user => (
                         <TableRow >
                             <TableCell>{user.id}</TableCell>
                               <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                 <TableCell>{user.email}</TableCell>
                                  <TableCell>{user.phone}</TableCell>
                                   <TableCell>
                                       <Button variant='contained' color='primary' style={{marginRight: 10}} component ={Link} to={`/edit/${user.id}`}>Edit</Button>
                                       <Button variant='contained' color='secondary'onClick={() => deleteUserData(user.id)}>Delete</Button>
                                   </TableCell>
                         </TableRow>

                       

                     ))
                 }
               
           </TableBody>
       </Table>
    );
}

export default AllUsers;