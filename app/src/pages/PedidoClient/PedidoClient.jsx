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
		api.get(`/pedidos`).then((resp) => {
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
            <TableCell>Cliente</TableCell>
            <TableCell align="right">Data da Compra</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Valor Frete</TableCell>
            <TableCell align="right">Taxas</TableCell>
			<TableCell align="right">Valor Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isPedidos.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.data_compra}</TableCell>
			  <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.valor_frete}</TableCell>
              <TableCell align="right">{row.taxas}</TableCell>
              <TableCell align="right">{row.valor_frete}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}