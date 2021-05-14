import React, { useState } from 'react';
import { Grid, Typography, TextField, Paper, Button } from '@material-ui/core';

import api from "../../services/api";
import "./AdressForm.css"

const AdressForm = ({title}) => {
	const [isAdressData, setIsAdressData] = useState({
		apelido: "",
		endereco: "",
		bairro: "",
		estado: "",
		complemento: "",
		numero: "",
		cidade: "",
		cep: "",
		pais: "Brasil",
		geocode: "-",
		cpf: ""
	});

	const getMarketName = () => {
        var url = window.location.href
        var urlS = (url.split("/")).slice(-1)[0]
        return urlS
    }

	const handleAdress = () => {

		isAdressData.cpf = sessionStorage.getItem('userCPF');
		console.log(isAdressData)

		if (
			isAdressData.apelido === "" 
			|| isAdressData.estado === "" 
			|| isAdressData.numero === "" 
			|| isAdressData.cep === ""
			|| isAdressData.cpf === ""
			|| isAdressData.endereco === "" 
			|| isAdressData.bairro === ""
		) {
			console.log("Campos invalidos")
			return
		}

		const userType = sessionStorage.getItem("userType")

		try {
			if (getMarketName() != "cadastroEnderecoMercado") {
				api.post(`/adress`, isAdressData).then((resp) => {
					console.log(resp.status)
					if (resp.status === 200 ) {
						if (userType === "Supermercado") {
							window.location = "/cadastroEnderecoMercado"
						} else {
							window.location = "/"
						}
					}
				});
			} else {
				api.post(`/adress/market`, isAdressData).then((resp) => {
					console.log(resp.status)
					if (resp.status === 200 ) {
						window.location = "/"
					}

				});
			}
		} catch (error) {
			console.log(error);
		}
	}


	const handleAdressApelido = (event) => {
		setIsAdressData(prevState => {
				return {
				...prevState,
				apelido: event.target.value
			}
		})
	}

	const handleAdressEndereco = (event) => {
		setIsAdressData(prevState => {
				return {
				...prevState,
				endereco: event.target.value
			}
		})
	}


	const handleAdressBairro = (event) => {
		setIsAdressData(prevState => {
				return {
				...prevState,
				bairro: event.target.value
			}
		})
	}


	const handleAdressComplemento = (event) => {
		setIsAdressData(prevState => {
				return {
				...prevState,
				complemento: event.target.value
			}
		})
	}

	const handleAdressNumero = (event) => {
		setIsAdressData(prevState => {
				return {
				...prevState,
				numero: event.target.value
			}
		})
	}

	const handleAdressCidade = (event) => {
		setIsAdressData(prevState => {
				return {
				...prevState,
				cidade: event.target.value
			}
		})
	}

	const handleAdressCep = (event) => {
		setIsAdressData(prevState => {
				return {
				...prevState,
				cep: event.target.value
			}
		})
	}

	const handleAdressEstado = (event) => {
		setIsAdressData(prevState => {
				return {
				...prevState,
				estado: event.target.value
			}
		})
	}


  return (
      <Paper elevation={2} className="LoginForm">
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <Grid container spacing={3} xs={12}>

        <Grid item xs={12}>
            <TextField
              required
              id="apelido"
              name="apelido"
              label="Apelido do Endereço"
              fullWidth
			  onChange={handleAdressApelido}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="endereco"
              name="endereco"
              label="Endereço"
              fullWidth
			  onChange={handleAdressEndereco}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="bairro"
              name="bairro"
              label="Bairro"
              fullWidth
			  onChange={handleAdressBairro}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="Complemento"
              name="Complemento"
              label="Complemento"
              fullWidth
			  onChange={handleAdressComplemento}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="numero"
              name="numero"
              label="Número"
              fullWidth
			  onChange={handleAdressNumero}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Cidade"
              fullWidth
			  onChange={handleAdressCidade}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            	<TextField 
					id="state"
					name="state"
					label="Estado"
					type="text"
					fullWidth
					onChange={handleAdressEstado}
				/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Cep"
              fullWidth
			  onChange={handleAdressCep}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="País"
			  value="Brasil"
			  disabled
              fullWidth
            />
          </Grid>

        </Grid>

			<Button
				className="buy"
				color="secondary"
				variant="contained"
				onClick={handleAdress}
				>
				Continuar
			</Button>


      </Paper>
	  
  );
}

export default AdressForm