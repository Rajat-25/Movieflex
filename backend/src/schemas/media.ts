import { model, Schema } from 'mongoose';

const mediaSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'user',
  },
  id: Number,
  overview: String,
  poster_path: String,
  backdrop_path: String,
  release_date: String,
  title: String,
});

const Media = model('media', mediaSchema);

export default Media;
