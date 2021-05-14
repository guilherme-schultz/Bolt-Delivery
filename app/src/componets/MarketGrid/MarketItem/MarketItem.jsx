import React, { useState } from "react"
import { Link } from "react-router-dom";

import { Paper } from '@material-ui/core';
import "./MarketItem.css"

const MarketItem = ({info}) => {
    const [isMouseHolvering, setIsMouseHolvering] = useState(1);

    const handleMouseHolvering = () => {
        if (isMouseHolvering === 1) {
            setIsMouseHolvering(10)
        } else {
            setIsMouseHolvering(1)
        }
    }

    return (
        <Link to={`/produtos/${info.cod_supermercado}`} >
            <Paper 
                className="Product-Box"
                elevation={isMouseHolvering}
                onMouseEnter={handleMouseHolvering}
                onMouseLeave={handleMouseHolvering}
                key={info.cod_supermercado}
            >
                
                <img className="Product-Img" alt="" src={info.foto}/>
                <div className="Product-Desc">
                    <span className="">{info.nome_supermercado}<br/></span>
                </div>
            </Paper>
         </Link>
    )
}

export default MarketItem