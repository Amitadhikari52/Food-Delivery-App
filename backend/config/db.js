import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://amitadhikari52:DejpVihb7L1cU2bL@cluster0.afoisqr.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.error(err.message);
    });
};
