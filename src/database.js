import { connect } from "mongoose";

(async () => {

    try {
        const db = await connect("mongodb+srv://yopopoy19:42501719@cluster0.b03da.mongodb.net/?retryWrites=true&w=majority")
        console.log("DB connected to ", db.connection.name);
    } catch (error) {
        console.error(error)
    }


})();