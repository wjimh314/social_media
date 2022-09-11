const { schema, model, Schema} = require ("mongoose");

const { Schema, model } = require("mongoose");
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    thoughts: {
        
    }
});
