const { schema, types, Schema } = require('mongoose')

const reactionSchema = new Schema (
    {
        reactionId: {
           Type: Schema.types.objectId,
           default: () => types.objectId(),
        },
        ReactionId: {
            type: String,
      required: true,
      maxlength: 50,
        },
        {
            
        }



    })