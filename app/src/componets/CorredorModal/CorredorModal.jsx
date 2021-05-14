import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Paper, Button, Modal, Radio, Checkbox, FormControlLabel } from '@material-ui/core';

import api from "../../services/api";
import "./CorredorModal.css"

const CorredorModal = ({ isOpen, setIsOpen }) => {
	const [isCorredorList, setIsCorredorList] = useState([]);
	const [isCorredorSelect, setIsCorredorSelect] = useState("");
	const [isNovoCorredor, setIsNovoCorredor] = useState("");

	useEffect(() => {
        try {
            api.get(`/corredor`).then((resp) => {
                setIsCorredorList(resp.data.rows)
                console.log(resp.data.rows)
            });

        } catch (error) {
            console.log(error);
        }
     
        // eslint-disable-next-line
	}, [isOpen]);

	const handleChange = (selected) => {
		setIsCorredorSelect(selected)
	}

	// const handleNewCorredor = () => {

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
	// }


	// const handleAdressApelido = (event) => {
	// 	setIsAdressData(prevState => {
	// 			return {
	// 			...prevState,
	// 			apelido: event.target.value
	// 		}
	// 	})
	// }

    const handleClose = () => {
        setIsOpen(false)
    }

	const handleNovoCorredor = (event) => {
		setIsNovoCorredor(event.target.value)
	}

	const handleCriarNovoCorredor = () => {
		try {
			api.post(`/corredor/${isNovoCorredor}`).then((resp) => {
				console.log(resp.status)
				if (resp.status === 200 ) {
					console.log("Corredor Criado")
				}
			});
		
		} catch (error) {
			console.log(error);
		}
	}

	return (

		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<Paper elevation={2} className="AdressForm">
				<Typography variant="h6" gutterBottom>
				Coredores
				</Typography>

				<Grid container spacing={3} className="">
					<Typography variant="h6" gutterBottom>
						Novo Corredor
					</Typography>

					<Grid item xs={12}>
						<TextField
							required
							id="nomeCorredor"
							name="nomeCorredor"
							label="Nome do Corredor"
							fullWidth
							onChange={handleNovoCorredor}
						/>
					</Grid>

					<Button
						className="criar"
						color="secondary"
						variant="contained"
						onClick={handleCriarNovoCorredor}
						>
						Criar
					</Button>

				</Grid>

				{isCorredorList && 
					isCorredorList.map((corredors) => (
						<Paper 
							className="Corredor-list"
						>
							 <FormControlLabel
								control={
								<Checkbox
									checked={isCorredorSelect}
									onChange={handleChange}
									name="checkedB"
									color="primary"
								/>
								}
								label={corredors.nome_corredor}
							/>
						</Paper>
				
				))}

			</Paper>

		</Modal>
		
	);
}

export default CorredorModal