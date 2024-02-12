import mongoose from "mongoose";

//check connection status
let isConected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConected) {
    console.log("MongoDB is already connected");
    return;
  }

  try{
    await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "FaceTree",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    isConected = true
    console.log("MongoDB is connected");
  }
  catch(error){
    console.log(error);
  }
};
