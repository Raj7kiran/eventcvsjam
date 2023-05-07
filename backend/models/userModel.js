import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


const userSchema = mongoose.Schema(
		{
			name: {
				type: String,
				required: true
			},
			email: {
				type: String,
				required: true,
				unique: true
			},
			finalType:{
				type: String,
				default: 'non-technical'
			},
			preferredType:{
				type: String,
				default: 'offline'
			},
			password: {
				type: String,
				// required: true
				default: '123456'
			},
			isAdmin: {
				type: Boolean,
				required: true,
				default: false
			}
		},
		{
			timestamps: true
		}
	)

//this.password we get from matchPassword method
// userSchema.methods.matchPassword = async function(enteredPassword) {
// 	return await bcrypt.compare(enteredPassword, this.password)
// }

//this is used to update the passowrd
// userSchema.pre('save', async function(next){
// 	console.log(this.password)
// 	if(!this.isModified('password')){
// 		next()
// 	}

// 	const salt = await bcrypt.genSalt(10)
// 	this.password = await bcrypt.hash(this.password,salt)
// })


const User = mongoose.model('User', userSchema);

export default User;