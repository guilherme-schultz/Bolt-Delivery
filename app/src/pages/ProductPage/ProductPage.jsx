import React, {useState, useEffect} from "react"
import api from "../../services/api";

import MenuBar from "../../componets/MenuBar/MenuBar"
import ProductCard from "../../componets/ProductCard/ProductCard"
import "./ProductPage.css"

const ProductPage = () => {
    const getProductID = () => {
        var url = window.location.href
        var urlS = (url.split("/")).slice(-1)[0]
        return urlS
    }

    const [isProductData, setIsProductData] = useState([]);
    const [isTrue, setIsTrue] = useState(true);

    useEffect(() => {
        if (isTrue){
            try {
                console.log('Buscando...')
                console.log(getProductID())
                api.get(`/produtos/${getProductID()}`).then((resp) => {
                    setIsProductData(resp.data.rows)
                    console.log(isProductData)
                });
            } catch (error) {
                console.log(error);
            }
            setIsTrue(false)
        }

	}, [isTrue, isProductData]);

    return (
        <>
            <MenuBar />
            <div >
                <div>
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default ProductPage