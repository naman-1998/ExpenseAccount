import React from 'react'
import { Box,Typography } from '@mui/material'
import { LoremIpsum } from 'react-lorem-ipsum';
const About = () => {
    return (
        
        <Box m={3} p={3}>
            <Typography variant="overline" fontSize="40px" fontWeight="220">
                About us
            </Typography>
            <hr style={{opacity:"0.4"}}/>
            <Typography variant="subtitle1">
                <LoremIpsum p={3} />
            </Typography>
        </Box>
    )
}

export default About
