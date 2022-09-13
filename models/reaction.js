const { Schema, Types, } = require("mongoose");

const reactionSchema = new Schema({
	reactionId: {
		Type: Schema.Types.ObjectId,
	//	default: () => Types.ObjectId(),
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
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm:a')
    },
    tojson: {
        getters: true,
    },
    id: false,
    
});

module.exports = reactionSchema;