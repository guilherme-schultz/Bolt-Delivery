import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MenuItem, Select} from '@material-ui/core';

import api from "../../services/api";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();

  const [isPedidos, setPedidos] = useState([]);

    const [isMarketList, setMarketList] = useState([]);
	const [isMarket, setMarket] = useState("");


    const [isStatsH, setStatsH] = useState([]);

	useEffect(() => {
		try {
            api.get(`/entregadores`).then((resp) => {
                if (resp.status === 200 ) {
                    console.log(resp.data.rows)
					setMarketList(resp.data.rows)
                }
            });
		
		} catch (error) {
			console.log(error);
		}

        // eslint-disable-next-line
	}, []);

    const handleChange = (event) => {
		setMarket(event.target.value)
	}


    useEffect(() => {
        console.log(isMarket)
        try {
            api.get(`/entregadores/stats/${isMarket}`).then((resp) => {
                setPedidos(resp.data.rows)
                // console.log(resp.data.rows)
                
            });

            api.get(`/entregadores/stats/h/${isMarket}`).then((resp) => {
                setStatsH(resp.data.rows)
                console.log(resp.data.rows)
            });


        } catch (error) {
            console.log(error);
        }
    
            // eslint-disable-next-line
        }, [isMarket]);
    
        useEffect(() => {
            console.log(isPedidos)
        }, [isPedidos]);


  return (
      <>
    <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={isMarket}
        onChange={handleChange}
    >

        {isMarketList && isMarketList.map((row) => (
            <MenuItem value={row.cpf_entregador}>{row.nome}</MenuItem>
        ))}

    </Select>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Entregador</TableCell>
            <TableCell align="right">CPF</TableCell>
            <TableCell align="right">Celular</TableCell>
            <TableCell align="right">Email</TableCell>
			<TableCell align="right">Total de Frete</TableCell>
            <TableCell align="right">Total de Gorjeta</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isPedidos.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.cpf_entregador}</TableCell>
			  <TableCell align="right">{row.celular}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.total_frete}</TableCell>
              <TableCell align="right">{row.total_gorjeta}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pedido</TableCell>
            <TableCell align="right">Data Da Entrega</TableCell>
			<TableCell align="right">Valor Frete</TableCell>
            <TableCell align="right">Valor Gorjeta</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isStatsH.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.cod_pedido}
              </TableCell>
              <TableCell align="right">{row.data_entrega}</TableCell>
              <TableCell align="right">{row.valor_frete}</TableCell>
              <TableCell align="right">{row.valor_gorjeta}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}