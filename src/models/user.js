const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [7, 'Minimo 7 caracteres!'],
        validate(value) {
            if(value.includes('password')) {
                throw new Error('No se puede utilizar "password"!')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email incorrecto!')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('La edad debe ser positiva')
            }
        }
    }
})

userSchema.statics.findByCredentials = async (email , password) => {
    const user = await User.findOne({ email })

    if(!user) {
        throw new Error('Error de login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Error de login')
    }

    return user
}


// Hash Password
userSchema.pre('save', async function (next) {
    const user = this
    
    // console.log('antes de salvar')

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User