import React from 'react';

import "./ProductNew.css"
import ProductNewForm from "../../componets/ProductNewForm/ProductNewForm"
import ProductMarket from "../../componets/ProductMarket/ProductMarket"

const ProductNew = () => {

	return (
		<div className="ProductNew">
			<ProductNewForm />

			<ProductMarket />
		</div>
	)
}

export default ProductNew