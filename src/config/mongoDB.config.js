import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
      mongoose.connect("mongodb+srv://admin:123@cluster0.q5rht.mongodb.net/e-commerce")
      // se sugiere usar variables de entorno para la conexión a la base de datos. Ejemplo:await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:123@cluster0.q5rht.mongodb.net/e-commerce", {
      //mongoose.connect("mongodb://localhost:27017/e-commerce")
      // intenté usar mi connection string y me tira error de autenticación, por lo que usé la de la clase. No pude resetear la contraseña. 
      console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}