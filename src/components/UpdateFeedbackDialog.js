import { Modal, Box, Typography, Button, Rating, TextField, Grid } from '@mui/material'
import {useState, useEffect} from 'react'

const UpdateFeedbackDialog = (props) => {
    const [rating, setRating] = useState(0)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [feedbackId, setFeedbackId] = useState(0)

    useEffect(() => {
        if(props.currentFeedback && rating===0) {
            setRating(props.currentFeedback.rating)
            setTitle(props.currentFeedback.title)
            setDescription(props.currentFeedback.description)
            setFeedbackId(props.currentFeedback.id)
        }
    }, [rating, title, description, props.currentFeedback])

    const style = {
        boxStyle: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 600,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            textAlign: 'center'
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.updateFeedback(feedbackId, title, description, rating)
    }

    return (
        <div>
            <Modal
                open={props.isUpdateFeedbackDialogOpen}
                onClose={props.closeUpdateFeedbackDialog}
            >
                <Box sx={style.boxStyle}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Update feedback 
                    </Typography>

                <form onSubmit={onSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography component="legend">Please rate your experience with us.</Typography>
                        <Rating 
                            name="rating"
                            label="rating"
                            defaultValue={props.currentFeedback ? props.currentFeedback.rating : 0}
                            precision={1}
                            size="large"
                            value={rating.number}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="title"
                            name="title"
                            label="title"
                            fullWidth
                            value={title}
                            onChange={(e) => {setTitle(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="description"
                            fullWidth
                            multiline
                            rows={10}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                    >Save</Button>
                    </Grid>
                </Grid>
            </form>
                </Box>
            </Modal>
        </div>
    )
}

export default UpdateFeedbackDialog
