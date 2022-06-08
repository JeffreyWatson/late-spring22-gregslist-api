import mongoose from "mongoose"
const Schema = mongoose.Schema

export const HouseSchema = new Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  levels: { type: Number, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  imgUrl: { type: String, required: false },
  description: { type: String, default: 'No description provided.' },
})


// Forgot what this does. Get help
HouseSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})