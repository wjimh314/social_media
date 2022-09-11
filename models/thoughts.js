const {schema, model } = require("mongoose");
const reactionSchema = require(".reaction)");


const thoughtSchema = new schema (
    {
        thoughtText: {
            type:String,
            required: true,
            minlength:1,
            maxlength:280,
        },
        createAt: {
            type: Date,
            default: Date.now, 
            get: (timestamp) => dateFormat(timestamp),
    },
    username: {
        type:String,
        required: true,
    },
    reactions: [reactionSchema]
    },
   { toJSON: {
        getters: true
    },
    id: false,
}
);