import React from 'react';
import { Grid, Typography, TextField, Paper } from '@material-ui/core';

// import cep from "../../services/cep"
import "./AdressForm.css"

function AdressForm() {

  // const handleCep = (event) => {
  //   // viacep.com.br/ws/01001000/json/
  //   console.log(event.target.value)
  //   try {
  //     cep.get("/{event.target.value}/json/").then((resp) => {
  //       console.log(resp)
  //       // setIsProductList(resp.data.rows)
  //     });
  //     } catch (error) {
  //       console.log(error);
  //   }
  // }

  return (
      <Paper elevation={2} className="LoginForm">
        <Typography variant="h6" gutterBottom>
          Cadastro de Endereço
        </Typography>

        <Grid container spacing={3} xs={12}>

        <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Apelido do Endereço"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Endereço"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="address2"
              name="address2"
              label="Bairro"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="city"
              name="city"
              label="Complemento"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="city"
              name="city"
              label="Número"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Cidade"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="Estado" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Cep"
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="País"
              fullWidth
            />
          </Grid>

        </Grid>

      </Paper>
  );
}

export default AdressForm