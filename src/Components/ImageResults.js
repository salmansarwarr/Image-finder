import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, ImageList, ImageListItem, ImageListItemBar, Typography, IconButton, Dialog, DialogContent, DialogActions, Button, useTheme, useMediaQuery } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { ZoomIn, Cancel } from '@mui/icons-material'
import { setDialog, closeDialog } from '../Redux/actions'

const useStyles = makeStyles({
    typography: {
        height: '50vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Grape Nuts, cursive',
        fontWeight: 'bold'
    }
})

function ImageResults() {
    const classes = useStyles()
    const state = useSelector(state => state)
    const { images, searchValue, open, currentImg } = state
    const dispatch = useDispatch()
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down('sm'))
    const xs = useMediaQuery(theme.breakpoints.down('xs'))
    const column = xs ? 1 : sm ? 2 : 3
    let imageContent

    if (images.length > 0) {
        imageContent = (
            <>
                <ImageList cols={column}>    
                    {
                        images.map((img) => {
                            return (
                                <ImageListItem key={img.id}>
                                    <img src={img.largeImageURL} alt={searchValue} />
                                    <ImageListItemBar
                                        title={img.tags}
                                        subtitle={
                                            <span>by <strong>{img.user}</strong></span>
                                        }
                                        actionIcon={
                                            <IconButton onClick={() => dispatch(setDialog(img.largeImageURL))}>
                                                <ZoomIn style={{ color: "white" }} />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            )
                        })
                    }
                </ImageList>
                <Dialog
                    fullWidth
                    maxWidth='xs'
                    open={open}
                    onClose={() => dispatch(closeDialog())}
                >
                    <DialogContent>
                        <img src={currentImg} alt={searchValue} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => dispatch(closeDialog())} color="default">
                            <Cancel />
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
    else {
        imageContent = (
            <Typography variant='h3' color='primary' className={classes.typography}>
                Find Images
            </Typography>
        )
    }

    return (imageContent)
}

export default ImageResults
