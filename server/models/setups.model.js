const mongoose = require("mongoose");
// const { kMaxLength } = require("node:buffer");

const SetupSchema = new mongoose.Schema({

    title: {
        type: String, 
        required: [true, "Please add a title to this setup"],
        minLength: [3, "Title must be at least 3 characters long!"]    
    },
    
    guitar: {
        type: String, 
        required: [true, "A guitar is required!"],
        minLength: [3, "Guitar must be at least 2 characters long!"]    
    },

    amplifier: { 
        type: String,
        minLength: [3, "Amplifier must be at least 3 characters long!"]
    },

    image: {
        type: String,
        required: [true, "An image of the setup is required"]
    },

    description: {
        type: String,
        minLength: [3, "Description must be at least 3 characters long!"],
        maxLength: [500, "Please keep your description under 500 characters"]
    },

    likes: {
        type: Number,
        default: 0
    }, 

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

}, {timestamps: true});

const Setup = mongoose.model("Setup", SetupSchema);

module.exports = Setup;