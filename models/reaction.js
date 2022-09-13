const { Schema, types, } = require("mongoose");

const reactionSchema = new Schema({
	reactionId: {
		Type: Schema.Types.ObjectId,
		default: () => Types.ObjectId(),
	},
	ReactionBody: {
		type: String,
		required: true,
		maxlength: 280,
	},
	username: {
		type: String,
		required: true,
	},
    createAt: {
        type: Date,
        default: Date.now, 
        get: (timestamp) => dateFormat(timestamp),
    },
    tojson: {
        getters: true,
    },
    id: false,
    
});

module.exports = reactionSchema;