import React from 'react';

import "./ProductNew.css"
import ProductNewForm from "../../componets/ProductNewForm/ProductNewForm"
import ProductMarket from "../../componets/ProductMarket/ProductMarket"

const ProductNew = () => {

	return (
		<div className="ProductNew">
			<div className="Spacer" >
				<ProductNewForm />
			</div>
			<div>
				<ProductMarket />
			</div>
		</div>
	)
}

export default ProductNew