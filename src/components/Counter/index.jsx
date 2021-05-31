import { useCounter } from '../../providers/Counter';
import { Button, Box } from '@material-ui/core';

const Counter = () => {
    const { addCount, subCount, add10, sub10 } = useCounter();
    
    return (
        <Box>
            <Button 
                style={{margin:'1rem'}}
                variant='outlined'
                color='primary'
                onClick={addCount}>Add +1</Button>
            <Button 
                style={{margin:'1rem'}}
                variant='outlined'
                color='secondary'
                onClick={subCount}>Sub -1</Button>
            <Button 
                style={{margin:'1rem'}}
                variant='outlined'
                color='primary'
                onClick={add10}>Add +10</Button>
            <Button 
                style={{margin:'1rem'}}
                variant='outlined'
                color='secondary'
                onClick={sub10}>Sub -10</Button>
        </Box>
    )
}

export default Counter;