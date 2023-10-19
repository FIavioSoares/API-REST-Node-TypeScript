import * as create from "./Create";
import * as getByEmail from "./GetbyEmail";

export const UsuariosProvider = {
  ...getByEmail,
  ...create,
};
