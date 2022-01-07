import { Typography } from "@mui/material"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Typography variant="h3">Welcome to the Feedback app!</Typography>
            <Typography variant="h5">
                <Link to="/createFeedback">Submit new feedback</Link> | <Link to="/submittedFeedback">View submitted feedback</Link>
            </Typography>
        </div>
    )
}

export default Home
