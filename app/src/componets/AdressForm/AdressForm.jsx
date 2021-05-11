import React, { useState } from 'react';
import { Grid, Typography, TextField, Paper, Button } from '@material-ui/core';

import "./AdressForm.css"

function AdressForm() {
	const [isAdressData, setIsAdressData] = useState({
		apelido: "",
		endereco: "",
		bairro: "",
		estado: "",
		complemento: "",
		numero: "",
		cidade: "",
		cep: "",
		pais: "Brasil"
	});


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
				cidade: event.target.value
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
          Cadastro de Endereço
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
              id="city"
              name="city"
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
              fullWidth
            />
          </Grid>

        </Grid>

			<a href="/cadastroEndereco">
				<Button
					className="buy"
					color="secondary"
					variant="contained">
					Continuar
				</Button>
			</a>	

      </Paper>
	  
  );
}

export default AdressForm