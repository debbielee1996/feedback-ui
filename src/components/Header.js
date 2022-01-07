import { AppBar, Typography, Toolbar } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'

const Header = (props) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <ChatIcon style={{marginRight:'5px'}}/><Typography variant="h6">{props.title}</Typography>
            </Toolbar>
        </AppBar>

        
    )
}

export default Header
