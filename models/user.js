import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		_id: Schema.Types.ObjectId,
		name: {
			type: String,
			trim: true,
			required: true,
			min: 2,
			max: 32,
		},
		nickname: {
			type: String,
			trim: true,
			min: 2,
			max: 32,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			min: 5,
			required: true,
		},
		image: {
			type: String,
			trim: true,
		},
		emailVerified: {
			type: Boolean,
			default: false,
		},
		phone: {
			type: String,
			trim: true,
			max: 32,
		},
		zipCode: {
			type: String,
			trim: true,
			max: 18,
		},
		streetAddress: {
			type: String,
			trim: true,
		},
		secondAddress: { type: String, trim: true },
		website: { type: String, trim: true, max: 32 },
		facebook: { type: String, trim: true, max: 32 },
		twitter: { type: String, trim: true, max: 32 },
		instagram: { type: String, trim: true, max: 32 },
		youtube: { type: String, trim: true, max: 32 },
		spotify: { type: String, trim: true, max: 32 },

		role: {
			type: Number,
			default: 0, // 0: user, 1: admin, 2: artist
		},
		history: { type: Array, default: [] },
		terms: { type: Boolean, default: false },
		copyRight: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

mongoose.models = {};

const User = mongoose.model('User', userSchema);

export default User;
