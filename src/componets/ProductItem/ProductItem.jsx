import React, {useState} from "react"
import { Paper } from '@material-ui/core';

import "./ProductItem.css"

function ProductItem() {
    const [isMouseHolvering, setIsMouseHolvering] = useState(1);

    const handleMouseHolvering = () => {
        if (isMouseHolvering === 1) {
            setIsMouseHolvering(10)
        } else {
            setIsMouseHolvering(1)
        }
    }

    return (
        <Paper 
            className="Product-Box"
            elevation={isMouseHolvering}
            onMouseEnter={handleMouseHolvering}
            onMouseLeave={handleMouseHolvering}
            >
            
            <img className="Product-Img" src="https://organicosdafatima.com.br/wp-content/uploads/2020/06/alface-americana-organica-organicos-da-fatima-horta-urbana-rio-de-janeiro-rj.png"/>
            <div className="Product-Desc">
                <span className="" >Alface Romana <br/></span>
                <span className="Product-Price-Before">R$ 150,00 <br/></span>
                <span className="Product-Price">R$ 100,00 <br/></span>
                <span className="Product-Saler" >Armandinho Supermercados</span>
            </div>
         </Paper>
    )
}

export default ProductItem