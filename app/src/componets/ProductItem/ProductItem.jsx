import React, { useState } from "react"

import { Paper } from '@material-ui/core';

import "./ProductItem.css"

const ProductItem = ({ info }) => {
    const [isMouseHolvering, setIsMouseHolvering] = useState(1);

    const handleMouseHolvering = () => {
        if (isMouseHolvering === 1) {
            setIsMouseHolvering(10)
        } else {
            setIsMouseHolvering(1)
        }
    }

    return (
        <a href={"/produto/" + info.cod_supermercado + "/" + info.cod_produto}>
            <Paper 
                className="Product-Box"
                elevation={isMouseHolvering}
                onMouseEnter={handleMouseHolvering}
                onMouseLeave={handleMouseHolvering}
                key={info.cod_produto}
            >
                
                <img className="Product-Img" alt="" src={info.foto}/>
                <div className="Product-Desc">
                    <span className="">{info.nome}<br/></span>
                    <span className="Product-Price-Before">R$ 150,00 <br/></span>
                    <span className="Product-Price">R{info.valor_unitario} / {info.unidade_de_medida}<br/></span>
                    <span className="Product-Saler" >{info.nome_supermercado}</span>
                </div>
            </Paper>
         </a>
    )
}

export default ProductItem