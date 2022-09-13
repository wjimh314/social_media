const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'username.',
      trim: true,
    },
    email: {
      type: String,
      unique: true,
  n
      match: [
        /.+@.+\..+/,
        "email?.",
      ],
    },
l
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {

    toJSON: {
      virtuals: true,
      getters: true,
    },
    // omit id
    id: false,
  }
);

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

UserSchema.pre("remove", function (next) {
  Thought.remove({ username: this.username }).exec();
  next();
});


const User = model('User', UserSchema);


module.exports = User;

