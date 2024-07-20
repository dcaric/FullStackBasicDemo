import React from 'react';
import Button from '@mui/material/Button';


export const Button1 = ({counter, setCounter}) => {

    function buttonClicked() {
        console.log('Button clicked');
        counter ++;
        setCounter(counter);
    }

    return (
        <Button variant="contained" color="primary" onClick={buttonClicked}>
            +
        </Button>
    );
};

