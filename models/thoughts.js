const { Schema, model, Types} = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),

    },
    reactionBody: {
      type: String,
      required:" comment" ,
      minlength: 1,
      maxLength: 280,
      trim: true,
    },
    username:{
      type:String,
      required: "username?"
    },
    createAt: {
      type:Date,
      default: Date.now,
      //get:
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
  

const thoughtSchema = new Schema(
{
  thoughtText: {
    type:String,
    required: "what is your thoughts?",
    minLength:1,
    maxLength: 280,

  },
  createdAt: {
    type:Date,
    default: Date.now,
    //get
  },
  usermame: {
    type: String,
    required: "username?"
  },
  reactions:[reactionSchema],
},
{
  toJSON: {
    virtuals:true,
    getters: true,
  },
  id: false,
}
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;


