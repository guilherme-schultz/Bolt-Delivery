import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Paper, Button, Modal, Checkbox, FormControlLabel } from '@material-ui/core';

import api from "../../services/api";
import "./CorredorModal.css"

const CorredorModal = ({ isOpen, setIsOpen, setCorredor }) => {
	const [isCorredorList, setIsCorredorList] = useState([]);
	const [newRequest, setNewRequest] = useState(true);
	const [isNovoCorredor, setIsNovoCorredor] = useState("");

	const [isCorredorSelected, setCorredorSelected] = useState({});

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
	}, [isOpen, newRequest]);

	useEffect(() => {

		// eslint-disable-next-line array-callback-return
		isCorredorList.map(corredor => {
			setCorredorSelected((prevState) => {
				return {
					...prevState,
					[corredor.cod_corredor]: false
				}
			})
		})

		console.log(isCorredorSelected)
     
        // eslint-disable-next-line
	}, [isCorredorList]);


	const handleChange = (event) => {

		setCorredorSelected((prevState) => {
			return {
				...prevState,
				[event.target.name]: isCorredorSelected[event.target.name] ? true : false
			}
		})

		console.log(event.target.name)
		setCorredor(event.target.name)
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
					setNewRequest((newRequest) ? false : true)
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
			<Paper elevation={2} className="CorredorForm">
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
				<Paper 
					className="Corredor-list"
				>
					<Grid container spacing={3} className="Corredor-list-name">
						{isCorredorList && 
							isCorredorList.map((corredors) => (
								<Grid item xs={12}> 
									<FormControlLabel 
										control={<Checkbox name={corredors.cod_corredor} />}
										label={corredors.nome_corredor}
										onChange={handleChange}
										
									/>
								</Grid>
						))}
					</Grid>
				</Paper>

			</Paper>

		</Modal>
		
	);
}

export default CorredorModal