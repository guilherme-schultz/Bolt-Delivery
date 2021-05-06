import React from 'react'

import MenuBar from "../../componets/MenuBar/MenuBar"

import ProductCard from "../../componets/ProductCard/ProductCard"
import "./ProductPage.css"


// import knex from "knex"
// const db = knex({
//     client: 'pg',
//     connection: {
//         host: process.env.DATABASE_HOST,
//         user: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         database: process.env.DATABASE,
//     },
// });

// const { Client } = require('pg')
// const client = new Client()


import * as pg from 'pg';

// const cliente = new Client({
//     connectionString:constring
// })

// const constring = "postgressql://nb@projetos-nb:4jC6^!@projetos-nb.postgres.database.azure.com:5432/Bolt-Delivery"


const ProductPage = () => { 



    const makeRequest = () => {
        // db.select('*')
        //     .from('produto')
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        // });

        // cliente.connect()
        // cliente.query("SELECT * FROM produto", (err, res) => {
        //     console.log(err, res)
        //     cliente.end()
        // })


        const client = new pg.Client({
            user: 'dbuser',
            host: 'database.server.com',
            database: 'mydb',
            password: 'secretpassword',
            port: 3211,
          })
          client.connect()
          client.query('SELECT NOW()', (err, res) => {
            console.log(err, res)
            client.end()
          })
    }


    return (
        <>
            <MenuBar />
            <div >
                <button
                    onClick={makeRequest}
                >
                </button>
                <div>
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default ProductPage