const mongoose = require('../lib/DbConnect');


const AuthSchema = mongoose.Schema;
const userOAuthSchema = new Schema({
    oAuthId : {
        type: Number,
        required: true
    },
    oAuthData : {
        type: Object,
        required: true
    }
});

module.exports = mongoose.models.User || mongoose.model('User',userOAuthSchema);