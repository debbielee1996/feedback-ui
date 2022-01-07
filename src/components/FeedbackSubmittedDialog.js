import { Modal, Box, Typography, Button } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const FeedbackSubmittedDialog = (props) => {
    const style = {
        boxStyle: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            height: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            textAlign: 'center'
        },

        largeIcon: {
            fontSize: 200,
            margin: 'auto',
            display: 'block',
            color: 'green'
        },
    }


    return (
        <div>
            <Modal
                open={props.isDialogOpen}
                onClose={props.closeFeedbackSubmittedDialog}
            >
                <Box sx={style.boxStyle}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Your feedback has been submitted! 
                    </Typography>
                    {props.isSuccessfulSubmission ? <CheckCircleOutlineIcon style={style.largeIcon}/> : <CancelOutlinedIcon style={style.largeIcon}/>}
                    
                    <Button 
                        onClick={props.closeFeedbackSubmittedDialog}
                        variant="contained"
                        fullWidth    
                    >
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default FeedbackSubmittedDialog
