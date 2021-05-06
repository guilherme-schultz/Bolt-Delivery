import React from "react"
import { AppBar, Toolbar, Typography} from '@material-ui/core';

import "./MenuBar.css"

function MenuBar() {

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Bolt Delivery
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar