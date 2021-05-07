import 'date-fns';
import React, { useState } from 'react';
import { Grid, Typography, TextField, Paper, RadioGroup, FormControlLabel, Radio, Button, Checkbox} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import DateFnsUtils from '@date-io/date-fns';

import AdressForm from "../AdressForm/AdressForm"

import "./ClientForm.css"

function ClientForm() {

    const [isType, setIsType] = useState("Cliente");
    const [setIsHidden] = useState(true);

    const handleSelectType = (event) => {
        setIsType(event.target.value)

        if (event.target.value === "Cliente") {
            setIsHidden(true)
        } else {
            setIsHidden(false)
        }
    }


    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    
  return (
      <>
      <Paper elevation={2} className="ClientForm">
        <Typography variant="h6" gutterBottom>
            Cadastro de Cliente
        </Typography>

        <Grid container spacing={3} xs={12}>

          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nome Completo"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="address2"
              name="address2"
              label="CPF"
              type="number"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Celular"
              type="number"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Email"
              type="email"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Senha"
              type="password"
              fullWidth

            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Idade"
              type="number"
              fullWidth

            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="city"
                name="city"
                label="Sexo"
                type="text"
                fullWidth

            />
          </Grid>

        </Grid>

      </Paper>



      <AdressForm  />

        <RadioGroup aria-label="gender" name="gender1" value={isType} onChange={handleSelectType}>
            <FormControlLabel value="Cliente" control={<Radio />} label="Cliente" />
            <FormControlLabel value="Entregador" control={<Radio />} label="Entregador" />
            <FormControlLabel value="Supermercado" control={<Radio />} label="Supermercado" />
        </RadioGroup>


      <Button
            className="buy"
            color="secondary"
            variant="contained">
            Continuar
    </Button>


    <Paper elevation={2} className="ClientForm">
        <Typography variant="h6" gutterBottom>
            Pagamento
        </Typography>

        <Grid container spacing={3} xs={12}>

          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nome Completo"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="address2"
              name="address2"
              label="CPF"
              type="number"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Tipo"
              type="Text"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Numero"
              type="number"
              fullWidth
            />
          </Grid>



        </Grid>

      </Paper>



      <Paper elevation={2} className="ClientForm">
        <Typography variant="h6" gutterBottom>
            Novo Produto
        </Typography>

        <Grid container spacing={3} xs={12}>

        <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nome"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Preço"
              type="number"
              fullWidth
            />
          </Grid>


          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Descrição"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Unidade de Medida"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="address2"
              name="address2"
              label="Foto"
              type="url"
              fullWidth
            />
          </Grid>

        </Grid>

      </Paper>



      <Paper elevation={2} className="ClientForm">
        <Typography variant="h6" gutterBottom>
            Nova Promoção
        </Typography>

        <Grid container spacing={3} xs={12}>

        <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nome"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Tipo"
              type="number"
              fullWidth
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Valor"
              type="number"
              fullWidth
            />
          </Grid>

          <FormControlLabel
            control={
            <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                name="checkedI"
            />
            }
            label="Black Friday"
            />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Data de Inicio"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Horario de Inicio"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </Grid>

            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Data de Fim"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Horario de Fim"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>





        </Grid>

      </Paper>

      

    </>
  );
}

export default ClientForm