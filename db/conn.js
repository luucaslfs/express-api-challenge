// mongodb://myuser:mypassword@localhost:27017/mydatabase
const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect(
            "mongodb://lfs:cin123@localhost:27017/"
        );

        console.log("Connected to Database!")
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

module.exports = main;