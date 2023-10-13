import { TableNames } from "../../TableNames";
import { ICidade } from "../../models";
import { Knex } from "../../Knex";

export const getById = async (id: number): Promise<ICidade | Error> => {
  try {
    const result = await Knex(TableNames.cidade)
      .select("*")
      .where("id", "=", id)
      .first();

    if (result) return result;

    return new Error("Registro não encontrado");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar o registro");
  }
};
