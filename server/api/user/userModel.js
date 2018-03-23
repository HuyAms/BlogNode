const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },

  //we should hash password before saving it in Database
  //dont store the password as plain text
  password: {
    type: String,
    required: true
  }
});

//middleware that will run before a document is created
UserSchema.pre('save', (next) => {
  if (!this.isModified('password')) return next;
    this.password = this.encryptPassword(this.password);
    next();
})

UserSchema.methods = {
  //check the passwords on signin
  authenticate: function(plainTextPword) {
    return bcrypt.compareSync(plainTextPword, this.password);
  },

  //hashpassword
  encryptPassword: (plainTextPword) => {
    if (!plainTextPword) {
      return ''
    } else {
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(plainTextPword, salt);
    }
}
}

module.exports = mongoose.model('user', UserSchema);
