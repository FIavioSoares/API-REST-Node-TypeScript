import { TableNames } from "../../TableNames";
import { IPessoa } from "../../models";
import { Knex } from "../../Knex";

export const create = async (
  pessoa: Omit<IPessoa, "id">
): Promise<number | Error> => {
  try {
    const [{ count }] = await Knex(TableNames.cidade)
      .where("id", "=", pessoa.cidadeId)
      .count<[{ count: number }]>("* as count");

    if (count === 0) {
      return new Error("A cidade usada no cadastro não foi encontrada");
    }

    const [result] = await Knex(TableNames.pessoa)
      .insert(pessoa)
      .returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    return new Error("Erro ao cadastrar o registro");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar o registro");
  }
};