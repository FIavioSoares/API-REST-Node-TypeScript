import { Knex } from "knex";

import { TableNames } from "../TableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(TableNames.cidade, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nome", 150).checkLength("<=", 150).index().notNullable();

      table.comment("Tabela usada para armazenar cidades do sistema.");
    })
    .then(() => {
      console.log(`# Created table ${TableNames.cidade}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(TableNames.cidade).then(() => {
    console.log(`# Dropped table ${TableNames.cidade}`);
  });
}
