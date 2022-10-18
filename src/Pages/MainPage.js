import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { Send } from '@mui/icons-material'

const useStyles = makeStyles({
    main: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    typography: {
        fontFamily: 'Grape Nuts, cursive',
        fontWeight: 'bold',
        marginBottom: '1rem'
    }
})

function MainPage() {
    const navigate = useNavigate()
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Typography 
                className={classes.typography} 
                variant='h3' 
                color='primary'
            > 
                Image Finder
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate('/search')} endIcon={<Send/>}
            >
                GET STARTED
            </Button>
        </div>
    )
}

export default MainPage
