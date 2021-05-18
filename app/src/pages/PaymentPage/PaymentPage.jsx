import React, { useState, useEffect } from "react"
import {Grid, Typography, TextField, Select, Button, Paper, MenuItem} from '@material-ui/core';
import api from "../../services/api";
// import "./LoginPage.css"

const PaymentPage = ({data}) => {

    const [isAdressList, setAdressList] = useState([]);
    const [isAdressApelido, setAdressApelido] = useState("");
    const [isCartData, setCartData] = useState([]);
    const [isPayment, setPayment] = useState( {
        Cartao_Nome:"",
        Cartao_Numero:"",
        Cartao_CPF:"",
        CPF_Cliente:"",
        cod_endereco: "",
        OBS: "",
        gorjeta: "",
        market: "",
        produtos: null //data
    });

    useEffect(() => {
        
        const cart = JSON.parse(localStorage.getItem('cart'))
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user)

        setPayment(prevState => {
            return {
            ...prevState,
            CPF_Cliente: user.cpf
        }
    })
        
        api.get(`/adress/${user.cpf}`).then((resp) => {
            console.log(resp.status)
            if (resp.status === 200 ) {
                console.log(resp.data.rows)
                setAdressList(resp.data.rows)
            }
        });

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
        setPayment(prevState => {
                return {
                ...prevState,
                produtos: data
            }
        })

        setPayment(prevState => {
                return {
                ...prevState,
                market: data[0].market
            }
        })

        console.log(data)
        
    }, [isCartData]);

    const handleCartaoNome = (event) => {
		setPayment(prevState => {
				return {
				...prevState,
				Cartao_Nome: event.target.value
			}
		})
	}

	const handleCartaoNumero = (event) => {
		setPayment(prevState => {
				return {
				...prevState,
				Cartao_Numero: event.target.value
			}
		})
	}

	const handleCartaoCPF = (event) => {
		setPayment(prevState => {
				return {
				...prevState,
				Cartao_CPF: event.target.value
			}
		})
	}

    const handleCartaoObs = (event) => {
		setPayment(prevState => {
				return {
				...prevState,
				OBS: event.target.value
			}
		})
	}

    const handleCartaoGojeta = (event) => {
		setPayment(prevState => {
				return {
				...prevState,
				gorjeta: event.target.value
			}
		})
	}

    const handlePagar = () => {

        console.log(isPayment)

		try {
            api.post(`/pay`, isPayment).then((resp) => {

            });
        } catch (error) {
            console.log(error);
        }
	}

    const handleSelectAdress = (event) => {
        setAdressApelido(event.target.value)
        console.log(event.target.value)

        setPayment(prevState => {
            return {
            ...prevState,
            cod_endereco: event.target.value
        }
    })
    }

  return (
      <div>
          
        <Paper elevation={2} className="AdressForm">
            <Typography variant="h6" gutterBottom>
                Pagamento
            </Typography>

            <Grid container spacing={3} className="">

                <Grid item xs={12}>
                    <TextField
                    required
                    id="apelido"
                    name="apelido"
                    label="Nome do Cartão"
                    fullWidth
                    onChange={handleCartaoNome}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                    required
                    id="endereco"
                    name="endereco"
                    label="Numero do Cartão"
                    fullWidth
                    onChange={handleCartaoNumero}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                    required
                    id="endereco"
                    name="endereco"
                    label="CPF Cartão"
                    fullWidth
                    onChange={handleCartaoCPF}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id="endereco"
                    name="endereco"
                    label="Observação"
                    fullWidth
                    onChange={handleCartaoObs}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id="endereco"
                    name="endereco"
                    label="Gorjeta"
                    type="number"
                    fullWidth
                    onChange={handleCartaoGojeta}
                    />
                </Grid>

                <Select
					labelId="demo-customized-select-label"
					id="demo-customized-select"
					value={isAdressApelido}
					onChange={handleSelectAdress}
                >

					{isAdressList && isAdressList.map((row) => (
						<MenuItem value={row.cod_endereco}>{row.apelido}</MenuItem>
					))}

				</Select>
            </Grid>

            <Button
                className="buy"
                color="secondary"
                variant="contained"
                onClick={handlePagar}>
                Finalizar compra
            </Button>
      </Paper>
	
      </div>
  )
}

export default PaymentPage