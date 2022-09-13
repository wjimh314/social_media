const { Schema, model, Types} = require("mongoose");

const ReactionSchema = new Schema(
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
      type:string,
      required: "username?"
    },
    createAt: {
      type:date,
    }
  



