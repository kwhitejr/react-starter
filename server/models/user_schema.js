import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  data: { 
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    workouts: [ObjectId], 
  }
});

export default mongoose.model('User', userSchema);