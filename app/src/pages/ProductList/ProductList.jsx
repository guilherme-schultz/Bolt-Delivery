import React, {useEffect, useState} from 'react'
import {TextField, Grid, Select, MenuItem, Button} from '@material-ui/core';

import api from "../../services/api";
import ProductGrid from "../../componets/ProductGrid/ProductGrid"
import "./ProductList.css"

const ProductList = () => {

    const getMarketName = () => {
        var url = window.location.href
        var urlS = (url.split("/")).slice(-1)[0]
        return urlS
    }

    const [isProductList, setIsProductList] = useState([]);
    const [isCorredores, setCorredores] = useState([]);
	const [isSearchText, setSearchText] = useState("");
	const [isCorredoresSelected, setCorredoresSelected] = useState("");
    const [isProductListRequested, setIsProductListRequested] = useState([]);
    const [isMarketName, setIsMarketName] = useState([]);



    const handleFilterSearch = (value) => {
        if (value.replace(/\s+/g, '') === "" && isCorredoresSelected.replace(/\s+/g, '') === "") {
            setIsProductList(isProductListRequested)
        } else {
            var productFilter = isProductListRequested.filter((product) => 
                product.nome.toLowerCase().includes(value.toLowerCase())
            )

            if (isCorredoresSelected.replace(/\s+/g, '') !== ""){

                productFilter = productFilter.filter((product) => 
                    product.cod_corredor === isCorredoresSelected
                )
            }

            setIsProductList(productFilter)
			setSearchText(value)
        }
    }

    const handleCorredorFilter = (value) => {
        var productFilter = isProductListRequested.filter((product) => 
            product.nome.toLowerCase().includes(isSearchText.toLowerCase())
        )

        productFilter = productFilter.filter((product) => 
            product.cod_corredor === value
        )
    
        setIsProductList(productFilter)

    }

    const handleSearch = (event) => {
        handleFilterSearch(event.target.value)
    }


    useEffect(() => {
        try {
            api.get(`/mercados/name/${getMarketName()}`).then((resp) => {
                setIsMarketName(resp.data.rows)
                console.log(resp.data.rows)
            });

            api.get(`/mercados/produtos/${getMarketName()}`).then((resp) => {
                setIsProductList(resp.data.rows)
                setIsProductListRequested(resp.data.rows)
            });

            api.get(`/corredor`).then((resp) => {
                setCorredores(resp.data.rows)
            });

        } catch (error) {
            console.log(error);
        }
     
        // eslint-disable-next-line
	}, []);

    useEffect(() => {
        console.log(isCorredoresSelected)
    }, [isCorredoresSelected]);


	const handleChange = (event) => {

		setCorredoresSelected(event.target.value)
        handleCorredorFilter(event.target.value)
	}

	const handleLimpar = () => {
		setCorredoresSelected("")

        const productFilter = isProductListRequested.filter((product) => 
            product.nome.toLowerCase().includes(isSearchText.toLowerCase())
        )

        setIsProductList(productFilter)
	}

    return (
        <div>

            { isMarketName.length > 0 && 
                <h1>{isMarketName[0].nome_supermercado}</h1>
            }

            <div className="Search">
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                    xs={3}
                >
                    <TextField
                        className="search-box"
                        fullWidth
                        margin="normal"
                        placeholder="Busque um produto"
                        id="filled-basic"
                        label="Busque um produto"
                        variant="filled"
                        onChange={handleSearch}
                    />

					<Select
						labelId="demo-customized-select-label"
						id="demo-customized-select"
						value={isCorredoresSelected}
						onChange={handleChange}
					>

						{isCorredores && isCorredores.map((row) => (
							<MenuItem value={row.cod_corredor}>{row.nome_corredor}</MenuItem>
						))} 

					</Select>

					<Button
						className="buy"
						color="secondary"
						variant="contained"
						onClick={handleLimpar}
						>
						Limpar Filtro
					</Button>
                </Grid>

               
            </div>
            
            <div>
                <ProductGrid productData={isProductList}/>
            </div>
        </div>
    )
}

export default ProductList