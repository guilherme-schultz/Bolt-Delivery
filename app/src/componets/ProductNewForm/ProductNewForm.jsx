import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Paper, Button, TextareaAutosize } from '@material-ui/core';

import CorredorModal from "../../componets/CorredorModal/CorredorModal"

import api from "../../services/api";
import "./ProductNewForm.css"

const ProductNewForm = () => {
	const [isProductData, setIsProductData] = useState({
		name: "",
		desc: "",
		und: "",
		photo: "",
		codCorredor: ""
	});
    const [isOpen, setIsOpen] = useState(false);
	const [isCorredor, setIsCorredor] = useState("");

    const handleModal = () => {
        setIsOpen(true)
    }

	useEffect(() => {

		setIsProductData(prevState => {
			return {
			...prevState,
			codCorredor: isCorredor
			}	
		})

        // eslint-disable-next-line
	}, [setIsOpen]);



	const handleNewProduct = () => {

		if (
			isProductData.name === "" 
			|| isProductData.desc === "" 
			|| isProductData.photo === "" 
			|| isProductData.und === ""
		) {
			console.log("Campos invalidos")
			return
		}

		try {
            api.post(`/produtos/create`, isProductData).then((resp) => {
                console.log(resp.status)
                if (resp.status === 200 ) {
                    console.log(resp.status)
                }
            });
		
		} catch (error) {
			console.log(error);
		}
	}

	const handleProductName = (event) => {
		setIsProductData(prevState => {
				return {
				...prevState,
				name: event.target.value
			}
		})
	}

	const handleProductUnd = (event) => {
		setIsProductData(prevState => {
				return {
				...prevState,
				und: event.target.value
			}
		})
	}

	const handleProductPhoto = (event) => {
		setIsProductData(prevState => {
				return {
				...prevState,
				photo: event.target.value
			}
		})
	}

	const handleProductDesc = (event) => {
		setIsProductData(prevState => {
				return {
				...prevState,
				desc: event.target.value
			}
		})
	}

  return (
      <Paper elevation={2} className="AdressForm">
        <Typography variant="h6" gutterBottom>
          Cadastro de Produto
        </Typography>

        <Grid container spacing={3} className="">

        <Grid item xs={12}>'
            <TextField
              required
              id="nomeProduto"
              name="nomeProduto"
              label="Nome do Produto"
              fullWidth
			  onChange={handleProductName}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="und"
              name="und"
              label="Unidade de Medida"
              fullWidth
			  onChange={handleProductUnd}
            />
          </Grid>

          <Grid item xs={12} sm={9}>
            <TextField
              id="foto"
              name="foto"
              label="Foto"
              fullWidth
			  onChange={handleProductPhoto}
            />
          </Grid>
		  <Grid item xs={12}>
		  	<Typography variant="h6" gutterBottom>
          	Descrição do Produto
        	</Typography>
			<TextareaAutosize
				rowsMax={10}
				rowsMin={5}
				aria-label="maximum height"
				placeholder="Descriação do Produto"
				onChange={handleProductDesc}
				style={{marginRight: "10px"}}
				/>
          </Grid>

		  
        </Grid>

			<Button
				className="buy"
				color="secondary"
				variant="contained"
				onClick={handleNewProduct}
				>
				Continuar
			</Button>

            <Button
				className="buy"
				color="secondary"
				variant="contained"
				onClick={handleModal}
				>
				Corredores
			</Button>

            <CorredorModal isOpen={isOpen} setIsOpen={setIsOpen} setCorredor={setIsCorredor}/>

      </Paper>
	  
  );
}

export default ProductNewForm