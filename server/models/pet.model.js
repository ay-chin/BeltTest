const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Pets need a name :("],
			minlength: [3, "Pet names must be at least 3 characters long."],
		},
		petType: {
			type: String,
			required: [true, "Please enter the type of pet :("],
			minlength: [3, "Pet type must be at least 3 characters long."],
		},
		description: {
			type: String,
			required: [true, "Please enter a description for this pet :("],
			minlength: [
				3,
				"Pet description must be at least 3 characters long.",
			],
		},
		skill1: {
			type: String,
		},
		skill2: {
			type: String,
		},
		skill3: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports.Pet = mongoose.model("Pet", PetSchema);
