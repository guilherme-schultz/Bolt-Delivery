import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Paper, Button, MenuItem, Select, FormControlLabel, Checkbox } from '@material-ui/core';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import ProductListModal from "../../componets/ProductListModal/ProductListModal"

import api from "../../services/api";
import "./ProductMarket.css"

const ProductMarket = () => {
	const [isProductData, setIsProductData] = useState({
		cod_supermercado: "",
		cod_produto: "",
		valor: ""
	});
    const [isMarketList, setMarketList] = useState([]);
	const [isMarket, setMarket] = useState("");

	useEffect(() => {
		try {
            api.get(`/mercados`).then((resp) => {
                console.log(resp.status)
                if (resp.status === 200 ) {
					setMarketList(resp.data.rows)
                }
            });
		
		} catch (error) {
			console.log(error);
		}

        // eslint-disable-next-line
	}, []);

	const handleProductPrice = () => {

		if (
			isProductData.cod_supermercado === "" 
			|| isProductData.cod_produto === "" 
			|| isProductData.valor === "" 
		) {
			console.log("Campos invalidos")
			return
		}

		try {
            api.post(`/produtos/market`, isProductData).then((resp) => {
                if (resp.status === 200 ) {
                    console.log(resp.status)
                }
            });
		
		} catch (error) {
			console.log(error);
		}
	}

	const handleChange = (event) => {
		setMarket(event.target.value)

		setIsProductData(prevState => {
				return {
				...prevState,
				cod_supermercado: event.target.value
			}
		})
	}

	const handleValor = (event) => {
		setIsProductData(prevState => {
				return {
				...prevState,
				valor: event.target.value
			}
		})
	}

	const [isOpen, setIsOpen] = useState(false);
	const [isCorredor, setIsCorredor] = useState("");

    const handleModal = () => {
        setIsOpen(true)
    }

	useEffect(() => {
		setIsProductData(prevState => {
				return {
				...prevState,
				cod_produto: isCorredor
			}
		})

        // eslint-disable-next-line
	}, [setIsOpen]);



	const [isOpenPromo, setIsOpenPromo] = useState(false);
	const [isProductPromo, setProductPromo] = useState("");


    const handleModalPromo = () => {
        setIsOpenPromo(true)
    }

	const [isPromoData, setPromoData] = useState({
		cod_supermercado: "",
		cod_produto: "",
		Data_Fim: "",
		Data_Inicio: "",
		valor: "",
		tipo: "",
		isBlackFriday: false
	});

	const handlePromo = () => {
		
		console.log(isPromoData)

		try {
            api.post(`/promo/new`, isPromoData).then((resp) => {
                if (resp.status === 200 ) {
                    console.log(resp.status)
                }
            });
		
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		console.log(isOpenPromo)
		setPromoData(prevState => {
				return {
				...prevState,
				cod_produto: isProductPromo
			}
		})

        // eslint-disable-next-line
	}, [isOpenPromo]);

	useEffect(() => {
		console.log(isOpenPromo)
		setPromoData(prevState => {
				return {
				...prevState,
				cod_supermercado: isMarket
			}
		})

        // eslint-disable-next-line
	}, [isOpenPromo]);

	const handleBlackFriday = (event) => {
		setPromoData(prevState => {
				return {
				...prevState,
				isBlackFriday: (isPromoData.isBlackFriday) ? false : true
			}
		})
	}

	const handleValorPromo = (event) => {
		setPromoData(prevState => {
				return {
				...prevState,
				valor: event.target.value
			}
		})
	}

	const handleTipoPromo = (event) => {
		setPromoData(prevState => {
				return {
				...prevState,
				tipo: event.target.value
			}
		})
	}

	const handleDateInicio = (date) => {
		setPromoData(prevState => {
				return {
				...prevState,
				Data_Fim: date.target.value
			}
		})
	};

	const handleDateFim = (date) => {
	    setPromoData(prevState => {
				return {
				...prevState,
				Data_Inicio: date.target.value
			}
		})
	};


  return (
      <Paper elevation={2} className="AdressForm">
        <Typography variant="h6" gutterBottom>
          Cadastro de Produto Em Mercados
        </Typography>

        <Grid container spacing={3} className="">

        <Grid item xs={6}>'
        		<Select
					labelId="demo-customized-select-label"
					id="demo-customized-select"
					value={isMarket}
					onChange={handleChange}
                >

					{isMarketList && isMarketList.map((row) => (
						<MenuItem value={row.cod_supermercado}>{row.nome_supermercado}</MenuItem>
					))}

				</Select>
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="und"
              name="und"
              label="Valor Unitario"
              fullWidth
			  onChange={handleValor}
            />
          </Grid>

		  
        </Grid>

			<Button
				className="buy"
				color="secondary"
				variant="contained"
				onClick={handleProductPrice}
				disabled={(isMarket === "") ? true : false}
				>
				Atribuir
			</Button>

			<Button
				className="buy"
				color="secondary"
				variant="contained"
				onClick={handleModal}
				disabled={(isMarket === "") ? true : false}
				>
				Selecionar Produto
			</Button>

            <ProductListModal isOpen={isOpen} setIsOpen={setIsOpen} setCorredor={setIsCorredor} market={isMarket} />

			<Paper elevation={2} className="ClientForm">

				<Typography variant="h6" gutterBottom>
					Nova Promoção
				</Typography>

				<Grid container spacing={3} xs={12}>

				<Grid item xs={6}>'
					<Select
						labelId="demo-customized-select-label"
						id="demo-customized-select"
						value={isMarket}
						onChange={handleChange}
					>

						{isMarketList && isMarketList.map((row) => (
							<MenuItem value={row.cod_supermercado}>{row.nome_supermercado}</MenuItem>
						))}

					</Select>
				</Grid>

				<ProductListModal 
					isOpen={isOpenPromo}
					setIsOpen={setIsOpenPromo}
					setCorredor={setProductPromo}
					market={isMarket}
					type={"promo"}
				/>

				<Button
					className="buy"
					color="secondary"
					variant="contained"
					onClick={handleModalPromo}
					>
					Selecionar Produto
				</Button>

				<Grid item xs={12} sm={6}>
					<TextField
					required
					id="firstName"
					name="firstName"
					label="Valor"
					type="number"
					fullWidth
					disabled={(isPromoData.tipo === "") ? true : false}
					onChange={handleValorPromo}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
					required
					id="firstName"
					name="firstName"
					label="tipo"
					type="text"
					fullWidth
					onChange={handleTipoPromo}
					/>
				</Grid>

				<FormControlLabel
					control={
						<Checkbox
							icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
							checkedIcon={<CheckBoxIcon fontSize="small" />}
							name="checkedI"
						/>
					}
					onChange={handleBlackFriday}
					label="Black Friday"
					/>

					<Grid container justify="space-around">

						<TextField
							id="datetime-local"
							label="Data de inicio"
							type="datetime-local"
							format="dd/MM/yyyy"
							onChange={handleDateInicio}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>

					<Grid container justify="space-around">
						<TextField
							id="datetime-local"
							label="Data de fim"
							type="datetime-local"
							format="dd/MM/yyyy"
							onChange={handleDateFim}
							InputLabelProps={{
							shrink: true,
							}}
						/>
					</Grid>

					<Button
						className="buy"
						color="secondary"
						variant="contained"
						onClick={handlePromo}
						>
						Programar Promoção
					</Button>

			</Grid>

		</Paper>

      </Paper>
	  
  );
}

export default ProductMarket