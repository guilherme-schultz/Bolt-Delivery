import React from 'react';
import { Grid, Typography, TextField, Paper } from '@material-ui/core';

import "./LoginForm.css"

function LoginForm() {
  return (
      <Paper elevation={2} className="LoginForm">
        <Typography variant="h6" gutterBottom>
          Cadastro de Endereço
        </Typography>

        <Grid container spacing={3} xs={12}>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nome"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="sobrenome"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Endereço"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Rua"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Complemento"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Número"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Cidade"
              fullWidth
              autoComplete="shipping address-level2"
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
              autoComplete="shipping postal-code"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="País"
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>

        </Grid>

      </Paper>
  );
}

export default LoginForm