import React, {useState} from "react"

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
        <a href={"/produtos/" + info.cod_supermercado}>
            <Paper 
                className="Product-Box"
                elevation={isMouseHolvering}
                onMouseEnter={handleMouseHolvering}
                onMouseLeave={handleMouseHolvering}
            >
                
                <img className="Product-Img" alt="" src="https://organicosdafatima.com.br/wp-content/uploads/2020/06/alface-americana-organica-organicos-da-fatima-horta-urbana-rio-de-janeiro-rj.png"/>
                <div className="Product-Desc">
                    <span className="">{info.nome_supermercado}<br/></span>

                </div>
            </Paper>
         </a>
    )
}

export default MarketItem