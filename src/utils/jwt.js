import jwt from "jsonwebtoken";

// Aqui conviene usar una variable de entorno para la clave secreta y no tenerla en el código process.env.SECRET
export const createToken = (user) => {
  const { id, email, role } = user;
  const token = jwt.sign({ id, email, role }, "ClaveSecreta", { expiresIn: "5m" });
  return token;
};

// Función que verifica el token
export const verifyToken = (token) => {
  try {
    const decode = jwt.verify(token, "ClaveSecreta");
    return decode;
  } catch (error) {
    return null;
  }
};
