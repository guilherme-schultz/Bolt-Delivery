import React, {useState, useEffect} from "react"
import api from "../../services/api";

import ProductCard from "../../componets/ProductCard/ProductCard"
import "./ProductPage.css"

const ProductPage = () => {

    const getProductID = () => {
        var url = window.location.href
        // var urlS = (url.split("/")).slice(-1)[0]
        return (url.split("/")).slice(-2)
    }

    const [isProductData, setIsProductData] = useState([]);

    useEffect(() => {
        console.log()
    }, []);

    useEffect(() => {
        try {
            console.log(getProductID())
            const params = getProductID()

            api.get(`/produtos/${params[0]}/${params[1]}`).then((resp) => {
                setIsProductData(resp.data.rows)
                console.log(isProductData)
            });
        } catch (error) {
            console.log(error);
        }
        
    // eslint-disable-next-line
	}, []);

    return (
        <>
            <div >
                <div>
                    <ProductCard data={isProductData[0]} />
                </div>
            </div>
        </>
    )
}

export default ProductPage