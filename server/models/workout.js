import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  data: { }
  // title: { type: 'String', required: true },
  // content: { type: 'String', required: true },
  // slug: { type: 'String', required: true },
  // cuid: { type: 'String', required: true },
  // dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Workout', workoutSchema);