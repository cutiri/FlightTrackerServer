const mongoose = require("mongoose");

const mongoDB_URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.ln73gxc.mongodb.net/?retryWrites=true&w=majority`;

module.exports = {
    connect: async () => {
        try {
            await mongoose.connect(mongoDB_URL);
            console.log("connected to MongoDB with mongoose.");
        } catch (error) {
            console.log(error);
        }
    },
};
