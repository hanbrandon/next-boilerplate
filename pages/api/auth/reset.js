import { hashPassword } from '../../../lib/auth';

import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/user';
import nodemailer from 'nodemailer';

const resetHandler = async (req, res) => {
	const { method } = req;
	await dbConnect();

	switch (method) {
		case 'POST':
			await sendResetPasswordLink(req, res);
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};

const sendResetPasswordLink = async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({
			email,
		});
		if (!user) {
			return res.status(400).json({
				message: 'User not found',
				success: false,
			});
		}
		const token = user.generateResetPasswordToken();
		console.log('token', token);
		await user.save();
		const resetLink = `http://localhost:3000/api/auth/reset?token=${token}`;
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.GOOGLE_EMAIL,
				pass: process.env.GOOGLE_PASSWORD,
			},
		});
		const mailOptions = {
			from: 'sanghyun.com',
			to: email,
			subject: 'Reset Password',
			text: resetLink,
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return res.status(400).json({
					message: err,
					success: false,
				});
			}
			return res.status(200).json({
				message: 'Reset password link has been sent',
				success: true,
				data: resetLink,
			});
		});
	} catch (error) {
		return res.status(400).json({
			message: new Error(error).message,
			success: false,
		});
	}
};

export default resetHandler;
