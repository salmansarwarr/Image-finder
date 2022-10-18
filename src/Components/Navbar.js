import React from 'react'
import { Typography, makeStyles, AppBar, Toolbar } from '@material-ui/core'

const useStyles = makeStyles({
    AppBar: {
        color: 'white',
        marginBottom: '12px'
    }
})

function Navbar() {
    const classes = useStyles()
    return (
        <AppBar position="static" color="primary" className={classes.AppBar}>
            <Toolbar>
                <Typography variant="h6">
                    Pixabay Image Finder
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

