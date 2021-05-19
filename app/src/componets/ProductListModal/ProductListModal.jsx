import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Modal, Checkbox, FormControlLabel } from '@material-ui/core';

import api from "../../services/api";
import "./ProductListModal.css"

const ProductListModal = ({ isOpen, setIsOpen, setCorredor, market, type }) => {
	const [isProductList, setIsProductList] = useState([]);
	const [isProductSelected, setProductSelected] = useState("");

	useEffect(() => {
        try {
            if (type === "promo") {
                api.get(`/mercados/produtos/${market}`).then((resp) => {
                    setIsProductList(resp.data.rows)
                });
            } else {
                api.get(`/produtos`).then((resp) => {
                    setIsProductList(resp.data.rows)
                });
            }
        } catch (error) {
            console.log(error);
        }
     
        // eslint-disable-next-line
	}, [isOpen]);

	useEffect(() => {

		// eslint-disable-next-line array-callback-return
		isProductList.map(produto => {
			setProductSelected((prevState) => {
				return {
					...prevState,
					[produto.cod_produto]: false
				}
			})
		})

        // eslint-disable-next-line
	}, [isProductList]);


	const handleChange = (event) => {
		console.log(event.target.name)

		setProductSelected((prevState) => {
			return {
				...prevState,
				[event.target.name]: isProductSelected[event.target.name] ? true : false
			}
		})

		setCorredor(event.target.name)
	}

    const handleClose = () => {
        setIsOpen(false)
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
                        Selecionar Produto
					</Typography>

				</Grid>
				<Paper 
					className="Corredor-list"
				>
					<Grid container spacing={3} className="Corredor-list-name">
						{isProductList && 
							isProductList.map((produto) => (
								<Grid item xs={12}> 
									<FormControlLabel 
										control={<Checkbox name={produto.cod_produto} />}
										label={produto.nome}
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

export default ProductListModal