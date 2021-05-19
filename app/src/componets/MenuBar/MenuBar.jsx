import React from "react"
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem} from '@material-ui/core';

import "./MenuBar.css"

function MenuBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Bolt Delivery
                </Typography>
                <div>
                <Button 
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="primary"
                    variant="contained"
                    >
                    Admin
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <a href={`/novo/produto`} ><MenuItem onClick={handleClose}>Cadastro de Produtos</MenuItem></a>
                    <a href={`/pedidos`} ><MenuItem onClick={handleClose}>Pedidos</MenuItem></a>
                    <a href={`/pedidos/top`} ><MenuItem onClick={handleClose}>Volume de Pedidos</MenuItem></a>
                    <a href={`/mercado/fin`} ><MenuItem onClick={handleClose}>Relatório Financeiro</MenuItem></a>
                    <a href={`/corredores/top`} ><MenuItem onClick={handleClose}>Mais Vendidos por Corredor</MenuItem></a>
                    <a href={`/entregadores`} ><MenuItem onClick={handleClose}>Pedidos Entregadores</MenuItem></a>
                    
                </Menu>

                    <a href={`/mercados`} >
                        <Button
                            className="buy"
                            color="primary"
                            variant="contained"
                            >
                            Mercados
                        </Button>
                    </a>
                    <a href={`/cadastro/endereco`} >
                        <Button
                            className="buy"
                            color="primary"
                            variant="contained"
                            >
                            Novo Endereço
                        </Button>
                    </a>
                    <a href={`/carrinho`} >
                        <Button
                            className="buy"
                            color="primary"
                            variant="contained"
                            >
                            Carrinho
                        </Button>
                    </a>
                    <a href={`/cadastro`} >
                        <Button
                            className="buy"
                            color="primary"
                            variant="contained"
                            >
                            Cadastro
                        </Button>
                    </a>
                    <a href={`/login`} >
                        <Button
                            className="buy"
                            color="primary"
                            variant="contained"
                            >
                            Login
                        </Button>
                    </a>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar