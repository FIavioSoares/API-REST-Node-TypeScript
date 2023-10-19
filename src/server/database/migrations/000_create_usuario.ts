import { Knex } from "knex";
import { TableNames } from "../TableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(TableNames.usuario, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nome").notNullable().checkLength(">=", 3);
      table.string("senha").notNullable().checkLength(">=", 6);
      table.string("email").index().unique().notNullable().checkLength(">", 5);

      table.comment("Tabela usada para armazenar usuários do sistema.");
    })
    .then(() => {
      console.log(`# Created table ${TableNames.usuario}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(TableNames.usuario).then(() => {
    console.log(`# Dropped table ${TableNames.usuario}`);
  });
}
