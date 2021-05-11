import React from 'react'
// import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

import "./StartPage.css"

// const useStyles = makeStyles((theme) => ({
//     root: {
//       background: "fff",
//       padding: theme.spacing(2),
//       fontFamily: [
//         "-apple-system", "BlinkMacSystemFont", "sans-serif"
//       ], 
//     }
// }))

function StartPage() {

    return (
        <div >
            

            <div className="Start-Page">
                <h1>BOLT DELIVERY</h1>

                <div className="moto-app">
                    <img src="/assets/Bolt-Delivery.png" alt="Bolt" className="bolt-img" />
                    <div>
                        <h2>O app de mercado mais rapido do mundo!</h2>
                        <span>Entregas em ate 9,58s</span>
                    </div>
                </div>
            
                <div>
                    
                    <a href={"/mercados"}>
                        <Button variant="contained" color="primary">
                            Comece a Comprar
                        </Button>
                    </a>

                </div>

            </div>
            
        </div>
    )
}

export default StartPage