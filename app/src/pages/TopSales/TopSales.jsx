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

	useEffect(() => {
		try {
            api.get(`/corredor`).then((resp) => {
                if (resp.status === 200 ) {
					setMarketList(resp.data.rows)
                    console.log(resp.data.rows)
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
            api.get(`/corredor/top/${isMarket}`).then((resp) => {
                setPedidos(resp.data.rows)
                console.log(resp)
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
            <MenuItem value={row.nome_corredor}>{row.nome_corredor}</MenuItem>
        ))}

    </Select>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell align="right">Quantidade Vendida</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isPedidos.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.qv}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}