import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin',
		email: 'ad@abc.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true
	},
	{
		name: 'Jon',
		email: 'jon@abc.com',
		// password: bcrypt.hashSync('123456', 10), 
		finalType: 'technical', 
		preferredType: 'offline'
	},
	{
		name: 'Jane',
		email: 'jane@abc.com',
		// password: bcrypt.hashSync('123456', 10), 
		finalType: 'non-technical', 
		preferredType: 'online'
	}
]

export default users