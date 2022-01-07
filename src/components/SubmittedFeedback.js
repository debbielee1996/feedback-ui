import { useState, useEffect } from 'react'
import FeedbackService from '../api/FeedbackService'
import { Table, TableHead, Typography, TableRow, TableCell, TableBody } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateFeedbackDialog from './UpdateFeedbackDialog'


const SubmittedFeedback = () => {
    const [feedbackList, setFeedbackList] = useState([])
    const [isUpdateFeedbackDialogOpen, setIsUpdateFeedbackDialogOpen] = useState(false)
    const [currentFeedback, setCurrentFeedback] = useState()

    useEffect(() => {
        const getAllFeedbackFromServer = async() => {
            const feedbackFromServer = await FeedbackService.getAllFeedback(1)
            setFeedbackList(feedbackFromServer)
        }
        getAllFeedbackFromServer()
    }, [isUpdateFeedbackDialogOpen])

    const deleteFeedback = (feedbackId) => {
        FeedbackService.deleteFeedback(feedbackId)
            .then(res => {
                if (res) {
                    let filteredFeedbackList = feedbackList.filter((feedback) => {
                        return feedback.id!==feedbackId
                    })
                    setFeedbackList(filteredFeedbackList)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const closeUpdateFeedbackDialog = () => {
        setIsUpdateFeedbackDialogOpen(false)
    }

    const openUpdateFeedbackDialog = (feedback) => {
        setCurrentFeedback(feedback)
        setIsUpdateFeedbackDialogOpen(true)
    }

    const updateFeedback = (feedbackId, title, description, rating) => {
        FeedbackService.updateFeedback(feedbackId, title, description, rating)
            .then(res => {
                setIsUpdateFeedbackDialogOpen(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <UpdateFeedbackDialog 
                isUpdateFeedbackDialogOpen={isUpdateFeedbackDialogOpen}
                closeUpdateFeedbackDialog={closeUpdateFeedbackDialog}
                currentFeedback={currentFeedback}
                updateFeedback={updateFeedback}
            />
            <Typography variant="h5" gutterbottom='true'>Past submissions</Typography>
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
                                <TableCell>
                                    <EditIcon onClick={() => {openUpdateFeedbackDialog(singleFeedback)}} />
                                    <DeleteIcon onClick={() => deleteFeedback(singleFeedback.id)} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default SubmittedFeedback
