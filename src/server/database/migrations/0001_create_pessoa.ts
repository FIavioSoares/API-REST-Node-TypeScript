import { Knex } from "knex";

import { TableNames } from "../TableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(TableNames.pessoa, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nomeCompleto").index().notNullable();
      table.string("email").unique().notNullable();

      table
        .bigInteger("cidadeId")
        .index()
        .notNullable()
        .references("id")
        .inTable(TableNames.cidade)
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      table.comment("Tabela usada para armazenar pessoas do sistema.");
    })
    .then(() => {
      console.log(`# Created table ${TableNames.pessoa}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(TableNames.pessoa).then(() => {
    console.log(`# Dropped table ${TableNames.pessoa}`);
  });
}
