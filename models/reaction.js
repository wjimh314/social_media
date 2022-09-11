const { Schema, types, } = require("mongoose");

const reactionSchema = new Schema({
	reactionId: {
		Type: Schema.types.objectId,
		default: () => types.objectId(),
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

module. exports = reactionSchema;