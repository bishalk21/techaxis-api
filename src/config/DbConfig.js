import mongoose from "mongoose";

export const DbConfig = () => {
    try {
        const db = process.env.MONGO_CLIENT;
        console.log(db);
        if (!db) {
            return console.log("No database found");
        }

        const dbCon = mongoose.connect(db);
        // console.log(dbCon);

        dbCon && console.log("Database connected");

    } catch (error) {
        console.log(error);
    }
}