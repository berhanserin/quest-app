const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        _id: { type: Number },
        name: {
            type: Schema.Types.String,
            required: [true, 'Plase provide a name'],
        },
        email: {
            type: Schema.Types.String,
            required: true,
            unique: [true, 'Please try different email'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please provide a valid email',
            ],
        },
        role: { type: String, default: 'user', enum: ['user', 'admin'] },
        password: {
            type: String,
            minlength: [6, 'Please provide a password with min lenght 6'],
            required: [true, 'Please orovide a pasword'],
            select: false,
        },
        title: { type: String },
        about: { type: String },
        place: { type: String },
        website: { type: String },
        profile_image: { type: String, default: 'default.jpeg' },
        blocked: { type: Boolean, default: false },
    },
    { timestamps: true }
)

UserSchema.pre('save', function (next) {
    if (this.isNew) {
        this.constructor.find({}).then((result) => {
            this._id = result.length
            next()
        })
    }
})
var User = mongoose.model('Users', UserSchema)
module.exports = User
