import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import api from "../../services/api";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable() {
  const classes = useStyles();

  const [isPedidos, setPedidos] = useState([]);

  useEffect(() => {
	try {
		api.get(`/pedidos/top`).then((resp) => {
			setPedidos(resp.data.rows)
			console.log(resp)
		});
	} catch (error) {
		console.log(error);
	}

        // eslint-disable-next-line
    }, []);

	useEffect(() => {
		console.log(isPedidos)
	}, [isPedidos]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome Cliente</TableCell>
            <TableCell>CPF Cliente</TableCell>
            <TableCell align="right">Numero de pedidos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isPedidos.map((row) => (
            <TableRow key={row.cpf_cliente}>
              <TableCell component="th" scope="row">{row.nome}</TableCell>
              <TableCell component="th" scope="row">{row.cpf_cliente}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}