const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableScore = mongoose.Schema({
    soqid:{
        type: Schema.Types.ObjectId,
        ref: 'SetOfQuestion'
        },
    Question: [
        {questionid: {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        },
        userAns: {
            type: Number
        }
        }
    ],
    score: {
        type: Number
    },
            
})

module.exports = mongoose.model("TableScore", TableScore);