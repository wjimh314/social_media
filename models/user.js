const { Schema, model } = require("mongoose")
const userSchema = new Schema(
    {
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
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please fill out a valid email address",
		],
	},
	Thoughts: [
		{
			type: Schema.Types.ObjectId,
			ref: "Thought",
		},
	],
	friends: [
		{
			type: Schema.Types.ObjectId,
			ref: "user",
		},
	],
},{
    toJSON:{
        virtuals:true,
    },
    id: false,
}
);

userSchema.virtual("friendCount").get(function(){
    return this.friends.length;
});    
const user =model("user", userSchema);

module.exports = user;

