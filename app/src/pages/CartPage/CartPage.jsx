import React, { useState, useEffect } from "react"
import {Grid, Typography, TextField, FormControlLabel, Button, Paper} from '@material-ui/core';

// import "./LoginPage.css"

import PaymentPage from "../PaymentPage/PaymentPage"


const CartPage = () => {

    const [isCartData, setCartData] = useState([]);
    const [isPay, setPay] = useState(false);
    const [isPayData, setPayData] = useState(false);

    useEffect(() => {
        
        const cart = JSON.parse(localStorage.getItem('cart'))
        
        if (cart) {
            const parser = []
            parser.push(JSON.parse(localStorage.getItem('cart')))
            setCartData(parser)

        } else {
            localStorage.setItem('cart', JSON.stringify(isCartData));
        }

        console.log(cart)
    }, []);

    useEffect(() => {
        console.log(isCartData[0])
        console.log(isCartData.length)

        if(isCartData.length > 0){

        Object.keys(isCartData[0]).map((market, idx) => (
            // console.log(isCartData[0][market])
            console.log(typeof isCartData[0][market])

        ))}
    }, [isCartData]);

    const handleFinalizar = (data)=> {
        console.log("aq ")
        console.log(data)

        setPayData(data)

        setPay(true)
    }


  return (
      <div>
    { !isPay &&  
            <Paper elevation={2} className="AdressForm">
                <Typography variant="h6" gutterBottom>
                    Finalizar Compra
                </Typography>

                <Grid container spacing={3} className="">
                    {isCartData.length > 0 && 
                        Object.keys(isCartData[0]).map((market, idx) => (
                            <Grid item xs={12}>
                                <Paper>
                                    <Typography variant="h6" gutterBottom key={market}>
                                    {isCartData[0][market][0].marketName}
                                    </Typography>

                                    {(isCartData[0][market].length > 0) && 
                                        isCartData[0][market].map((item) => (
                                            <Grid item xs={12} key={item.productId}>
                                                <Paper>
                                                    <h4>{item.name}</h4>
                                                    <h4>{item.value}</h4>
                                                    <h4>x {item.qtd}</h4>
                                                </Paper>
                                            </Grid>
                                        ))
                                    }

                                    <Button
                                        className="buy"
                                        color="secondary"
                                        variant="contained"
                                        onClick={() => handleFinalizar(isCartData[0][market])}>
                                        Finalizar compra
                                    </Button>
                                </Paper>
                            </Grid>
                        ))
                    }

                </Grid>
        </Paper>
      }

      {isPay && <PaymentPage data={isPayData}/> }
	
      </div>
  )
}

export default CartPage