const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    accountno: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
    ,
    balance: {
        type: Number,
        default: 0
    }
    
}, {
    timestamps: true
});

const user= mongoose.model('customer',UserSchema);
module.exports= user;