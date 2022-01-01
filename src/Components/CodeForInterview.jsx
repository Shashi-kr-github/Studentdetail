import landing from '../Assets/Images/landing.png'
import { Box,makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        heigt:'70%', 
        width: "70%"
    }

})
const CodeForInterview = () => {
    const classes = useStyle();
    return (
        <Box>
            <Box>
                <img className={classes.image} src = {landing}/>
            </Box>
        </Box>
    );
}
export default CodeForInterview;
