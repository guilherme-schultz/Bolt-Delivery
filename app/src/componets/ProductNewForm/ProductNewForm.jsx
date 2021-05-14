import React, { useState } from 'react';
import { Grid, Typography, TextField, Paper, Button } from '@material-ui/core';

import CorredorModal from "../../componets/CorredorModal/CorredorModal"


import api from "../../services/api";
import "./ProductNewForm.css"

const ProductNewForm = () => {
	const [isProductData, setIsProductData] = useState({});
    const [isOpen, setIsOpen] = useState(false);

	const userType = sessionStorage.getItem("userType")
	const marketIDAdress = sessionStorage.getItem("marketID")

	const getMarketName = () => {
        var url = window.location.href
        var urlS = (url.split("/")).slice(-1)[0]
        return urlS
    }

    const handleModal = () => {
        setIsOpen(true)
    }

	const handleNewProduct = () => {

		// if (
		// 	isAdressData.apelido === "" 
		// 	|| isAdressData.estado === "" 
		// 	|| isAdressData.numero === "" 
		// 	|| isAdressData.cep === ""
		// 	|| isAdressData.cpf === ""
		// 	|| isAdressData.endereco === "" 
		// 	|| isAdressData.bairro === ""
		// ) {
		// 	console.log("Campos invalidos")
		// 	return
		// }

		// try {
        //     api.post(`/adress`, isAdressData).then((resp) => {
        //         console.log(resp.status)
        //         if (resp.status === 200 ) {
        //             if (userType === "Supermercado") {
        //                 window.location = "/cadastro/endereco/mercado"
        //             } else {
        //                 window.location = "/"
        //             }
        //         }
        //     });
		
		// } catch (error) {
		// 	console.log(error);
		// }
	}


	// const handleAdressApelido = (event) => {
	// 	setIsAdressData(prevState => {
	// 			return {
	// 			...prevState,
	// 			apelido: event.target.value
	// 		}
	// 	})
	// }




  return (
      <Paper elevation={2} className="AdressForm">
        <Typography variant="h6" gutterBottom>
          Cadastro de Produto
        </Typography>

        <Grid container spacing={3} className="">

        <Grid item xs={12}>'
            <TextField
              required
              id="apelido"
              name="apelido"
              label="Apelido do Endereço"
              fullWidth
			//   onChange={handleAdressApelido}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="endereco"
              name="endereco"
              label="Endereço"
              fullWidth
			//   onChange={handleAdressEndereco}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="bairro"
              name="bairro"
              label="Bairro"
              fullWidth
			//   onChange={handleAdressBairro}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="Complemento"
              name="Complemento"
              label="Complemento"
              fullWidth
			//   onChange={handleAdressComplemento}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="numero"
              name="numero"
              label="Número"
              fullWidth
			//   onChange={handleAdressNumero}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Cidade"
              fullWidth
			//   onChange={handleAdressCidade}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            	<TextField 
					id="state"
					name="state"
					label="Estado"
					type="text"
					fullWidth
					// onChange={handleAdressEstado}
				/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Cep"
              fullWidth
			//   onChange={handleAdressCep}
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
				// onClick={handleAdress}
				>
				Continuar
			</Button>

            <Button
				className="buy"
				color="secondary"
				variant="contained"
				onClick={handleModal}
				>
				Continuar
			</Button>

            <CorredorModal isOpen={isOpen} setIsOpen={setIsOpen} />


      </Paper>
	  
  );
}

export default ProductNewForm