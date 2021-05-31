import { useCounter } from '../../providers/Counter';
import { Typography, Box } from '@material-ui/core';

const Display = () => {
    const { counter } = useCounter();

    return(
        <Box>
            <Typography variant='h2' color={
                counter < 0 ? 'secondary' : 'primary'
            }>{counter}</Typography>
        </Box>
    )
}

export default Display;