import { TableNames } from "../../TableNames";
import { IPessoa } from "../../models";
import { Knex } from "../../Knex";

export const getAll = async (
  page: number,
  limit: number,
  filter: string
): Promise<IPessoa[] | Error> => {
  try {
    const result = await Knex(TableNames.pessoa)
      .select("*")
      .where("nomeCompleto", "like", `%${filter}%`)
      .offset((page - 1) * limit)
      .limit(limit);

    return result;
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar os registros");
  }
};