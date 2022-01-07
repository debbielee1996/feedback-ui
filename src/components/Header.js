import { AppBar, Typography, Toolbar } from '@mui/material'


const Header = (props) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6">{props.title}</Typography>
            </Toolbar>
        </AppBar>

        
    )
}

export default Header
