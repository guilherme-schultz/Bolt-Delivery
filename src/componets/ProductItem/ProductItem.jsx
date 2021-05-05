import React, {useState} from "react"
// import { Link } from "react-router-dom"

import { Paper } from '@material-ui/core';

import "./ProductItem.css"

const ProductItem = ({info}) => {
    const [isMouseHolvering, setIsMouseHolvering] = useState(1);

    const handleMouseHolvering = () => {
        if (isMouseHolvering === 1) {
            setIsMouseHolvering(10)
        } else {
            setIsMouseHolvering(1)
        }
    }

    // useEffect(() => {
    //     console.log(info)
    // })

    return (
        <a href={"/produto/" + 10}>
            <Paper 
                className="Product-Box"
                elevation={isMouseHolvering}
                onMouseEnter={handleMouseHolvering}
                onMouseLeave={handleMouseHolvering}
            >
                
                <img className="Product-Img" alt="" src="https://organicosdafatima.com.br/wp-content/uploads/2020/06/alface-americana-organica-organicos-da-fatima-horta-urbana-rio-de-janeiro-rj.png"/>
                <div className="Product-Desc">
                    <span className="">{info.nome}<br/></span>
                    <span className="Product-Price-Before">R$ 150,00 <br/></span>
                    <span className="Product-Price">{info.preco}<br/></span>
                    <span className="Product-Saler" >Armandinho Supermercados</span>
                </div>
            </Paper>
         </a>
    )
}

export default ProductItem