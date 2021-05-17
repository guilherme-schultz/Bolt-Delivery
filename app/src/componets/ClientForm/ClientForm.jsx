import 'date-fns';
import React, { useState } from 'react';
import { Grid, Typography, TextField, Paper, FormControlLabel, RadioGroup, Radio, Button  } from '@material-ui/core';


import api from "../../services/api";

import "./ClientForm.css"
function ClientForm() {
	
	const [isUserData, setIsUserData] = useState({
		nome: "",
		cpf: 0,
		celular: 0,
		email: "",
		senha: "",
		idade: 0,
		sexo: "",
		foto: "",
		tipo: "Cliente",
		nomeMercado: ""
	});

	const handleUserData = () => {

		if (
			isUserData.cpf === 0 
			|| isUserData.email === "" 
			|| isUserData.senha === "" 
			|| isUserData.nome === ""
			|| isUserData.celular === 0
			|| isUserData.idade === 0
			|| isUserData.sexo === "" 
			|| isUserData.tipo === ""
		) {
			console.log("Campos invalidos")
			return
		}

		try {
			api.post(`/user`, isUserData).then((resp) => {
				console.log(resp.status)
				if (resp.status === 200 ) {
					sessionStorage.setItem('userCPF', isUserData.cpf);
					sessionStorage.setItem('userType', isUserData.tipo);

					if (isUserData.tipo === "Supermercado") {
						sessionStorage.setItem('marketID', resp.data);
					}
					
					window.location = "/cadastro/endereco"
				}

			});
		} catch (error) {
			console.log(error);
		}
	}

	const handleUserName = (event) => {
		setIsUserData(prevState => {
				return {
				...prevState,
				nome: event.target.value
			}
		})
	}

	const handleUserEmail = (event) => {
		setIsUserData(prevState => {
				return {
				...prevState,
				email: event.target.value
			}
		})
	}

	const handleUserCPF = (event) => {
		setIsUserData(prevState => {
				return {
				...prevState,
				cpf: event.target.value
			}
		})
	}

	const handleUserCelular = (event) => {
		setIsUserData(prevState => {
				return {
				...prevState,
				celular: event.target.value
			}
		})
	}

	const handleUserSenha = (event) => {
		setIsUserData(prevState => {
				return {
				...prevState,
				senha: event.target.value
			}
		})
	}

	const handleUserIdade = (event) => {
		setIsUserData(prevState => {
				return {
				...prevState,
				idade: event.target.value
			}
		})
	}

	const handleUserSexo = (event) => {
		setIsUserData(prevState => {
				return {
				...prevState,
				sexo: event.target.value
			}
		})
	}

	const handleUserFoto = (event) => {
		setIsUserData(prevState => {
				return {
				...prevState,
				foto: event.target.value
			}
		})
	}

	const handleUserSupermercado = (event) => {
		setIsUserData(prevState => {
				return {
				...prevState,
				nomeMercado: event.target.value
			}
		})
	}

	const [isType, setIsType] = useState("Cliente");
	// const [isHidden, setIsHidden] = useState(true);

	const handleSelectType = (event) => {
		setIsType(event.target.value)

		setIsUserData(prevState => {
			return {
			...prevState,
			tipo: event.target.value
		}
	})
		
		// if (event.target.value === "Entregador") {
		// 	setIsHidden(false)
		// } else {
		// 	setIsHidden(true)
		// }
	}

	
	return (
		<>
			<Paper elevation={2} className="ClientForm">
				<Typography variant="h6" gutterBottom>
					Cadastro de Usuario
				</Typography>

				<RadioGroup 
					aria-label="tipo"
					name="tipo"
					value={isType}
					onChange={handleSelectType}
					>

					<FormControlLabel value="Cliente" control={<Radio />} label="Cliente" />
					<FormControlLabel value="Entregador" control={<Radio />} label="Entregador" />
					<FormControlLabel value="Supermercado" control={<Radio />} label="Supermercado" />

				</RadioGroup>
				
				<Grid container spacing={3} xs={12}>
					
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id="fullname"
							name="fullname"
							label="Nome Completo"
							type="text"
							fullWidth
							onChange={handleUserName}
						/>
					</Grid>
					
					<Grid item xs={6}>
						<TextField
							id="cpf"
							name="cpf"
							label="CPF"
							type="number"
							fullWidth
							onChange={handleUserCPF}
						/>
					</Grid>
					
					<Grid item xs={6}>
						<TextField
							required
							id="celular"
							name="celular"
							label="Celular"
							type="number"
							fullWidth
							onChange={handleUserCelular}
						/>
					</Grid>
					
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="email"
							name="email"
							label="Email"
							type="email"
							fullWidth
							onChange={handleUserEmail}
						/>
					</Grid>
					
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="senha"
							name="senha"
							label="Senha"
							type="password"
							fullWidth
							onChange={handleUserSenha}
						/>
					</Grid>
					
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="idade"
							name="idade"
							label="Idade"
							type="number"
							fullWidth
							onChange={handleUserIdade}
						/>
					</Grid>
					
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="sexo"
							name="sexo"
							label="Sexo"
							type="text"
							fullWidth
							onChange={handleUserSexo}
						/>
					</Grid>

					{
						(isType === "Supermercado" || isType === "Entregador" ) &&
						<Grid item xs={12}>
							<TextField
								required
								id="foto"
								name="foto"
								label="Foto"
								type="text"
								fullWidth
								onChange={handleUserFoto}
							/>
						</Grid>
					}

					{		
						(isType === "Supermercado") &&
						<Grid item xs={12}>
							<TextField
								required
								id="supermercado"
								name="supermercado"
								label="Nome Supermercado"
								type="text"
								fullWidth
								onChange={handleUserSupermercado}
							/>
						</Grid>
					}
					
				</Grid>
			
			</Paper>


			<Button
				className="buy"
				color="secondary"
				variant="contained"
				onClick={handleUserData}
				>
				Continuar
			</Button>
			
		
		</>
	);
}
	
export default ClientForm