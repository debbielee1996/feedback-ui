import { Typography, Grid, TextField, Rating, Button } from "@mui/material"
import { useState } from 'react'
import FeedbackService from '../api/FeedbackService'
import FeedbackFormSubmittedModal from './FeedbackFormSubmittedModal'

const FeedbackForm = () => {
    const [rating, setRating] = useState(1)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        FeedbackService.createFeedback(title, description, rating, 1)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <FeedbackFormSubmittedModal />
            <Typography variant="h4" gutterBottom>
                Your feedback helps us to improve.
            </Typography>

            <form onSubmit={onSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography component="legend">Please rate your experience with us.</Typography>
                        <Rating 
                            name="rating"
                            label="rating"
                            defaultValue={0}
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
                            onChange={(e) => setTitle(e.target.value)}
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
                    >Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default FeedbackForm
