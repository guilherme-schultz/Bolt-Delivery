import React from 'react'
import { makeStyles } from '@material-ui/core';

import ProductGrid from "../../componets/ProductGrid/ProductGrid"
import "./StartPage.css"

const useStyles = makeStyles((theme) => ({
    root: {
      background: "fff",
      padding: theme.spacing(2),
      fontFamily: [
        "-apple-system", "BlinkMacSystemFont", "sans-serif"
      ], 
    }
}))

function StartPage() { const classes = useStyles()
    return (
        <div className={classes.root}>
            <h1>BOLT DELIVERY</h1>
            <div className="Start-Page">
                <ProductGrid />
            </div>
        </div>
    )
}

export default StartPage