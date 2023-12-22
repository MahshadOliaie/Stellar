import { join } from "path";
import { DataSource } from "typeorm";
import { mainDir } from "../server";
import path = require("path");

const dataSource = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "Yecg@@48255",
    "database": "ClothesShop",
    "entities": ["models/*.ts"],
    "migrations": [ "migrations/*.ts"], 

    "synchronize": true
  })

  export default dataSource