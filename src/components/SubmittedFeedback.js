import { useState, useEffect } from 'react'
import FeedbackService from '../api/FeedbackService'
import { Table, TableHead, Typography, TableRow, TableCell, TableBody } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SubmittedFeedback = () => {
    const [feedbackList, setFeedbackList] = useState([])
    // const [feedback, setFeedback] = useState()

    useEffect(() => {
        const getAllFeedbackFromServer = async() => {
            const feedbackFromServer = await FeedbackService.getAllFeedback(1)
            setFeedbackList(feedbackFromServer)

            console.log(feedbackFromServer)
        }
        getAllFeedbackFromServer()
    }, [])

    return (
        <div className="container">
            <Typography variant="h4" gutterbottom>Submitted feedback</Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        feedbackList.map((singleFeedback) => (
                            <TableRow key={singleFeedback.id}>
                                <TableCell>{singleFeedback.title}</TableCell>
                                <TableCell>{singleFeedback.description}</TableCell>
                                <TableCell>{singleFeedback.rating}</TableCell>
                                <TableCell><EditIcon /><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default SubmittedFeedback
