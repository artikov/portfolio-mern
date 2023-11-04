import bcrypt from "bcryptjs";

const users = [
	{
		name: "Oybek Admin",
		email: "artikov1208@gmail.com",
		password: bcrypt.hashSync("Oybekadmin012", 10),
		isAdmin: true,
	},
	{
		name: "John Doe",
		email: "john@email.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: false,
	},
];

export default users;