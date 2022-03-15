import dbConnect from '../../lib/dbConnect';
import User from '../../models/user';

import { getSession } from 'next-auth/react';

export const handler = async (req, res) => {
	const { method } = req;
	await dbConnect();
	// switch the methods
	switch (method) {
		case 'GET':
			await getUser(req, res);
			break;
		case 'PUT':
			await updateUser(req, res);
			break;
		// case 'POST':
		//   await addDummyUser(req, res);
		default:
			res.status(400).json({ success: false });
			break;
	}
};

// const addDummyUser = async (req, res) => {
//   for (let i = 0; i < 50; i++) {
//     let userData = {
//       name: `user${i}`,
//       email: `user${i}@gmail.com`,
//       image:
//         'https://lh3.googleusercontent.com/a-/AOh14Gj08kUYGrjfqeyU47VYffI4O7Z50DVrRz5h6e1N4g=s96-c',
//       emailVerified: null,
//       facebook: 'facebook.com',
//       instagram: 'instagram.com',
//       nickname: `user${i} nickname`,
//       role: 2,
//       updatedAt: '2022-01-28T16:53:28.337Z',
//       website: 'sanghyun.com',
//       youtube: 'youtube.com',
//       copyRight: true,
//       terms: true,
//       password: 'sdfsdf233f',
//     };
//     try {
//       const user = await User.create(userData);
//     } catch (error) {}
//   }
//   return {
//     message: 'success',
//     success: true,
//   };
// };

const getUser = async (req, res) => {
	const session = await getSession({ req });
	if (session) {
		try {
			const user = await User.findById({
				_id: req.query.uid,
			});
			return res.status(200).json({
				user: user,
				success: true,
			});
		} catch (error) {
			return res.status(400).json({
				message: new Error(error).message,
				success: false,
			});
		}
	} else {
		return res.status(401).send({
			err: 'You need to be signed in.',
		});
	}
};

const updateUser = async (req, res) => {
	const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body, {
		new: true,
		runValidators: true,
		context: 'query',
	});
	if (!updateUser)
		return res.status(400).json({
			message: 'User not found',
			success: false,
		});
	return res.status(200).json({
		user: updatedUser,
		success: true,
	});
};
export default handler;
