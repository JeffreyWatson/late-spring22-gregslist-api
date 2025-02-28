import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from '../models/Car.js'
import { ValueSchema } from '../models/Value'
import { HouseSchema } from '../models/House'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Cars = mongoose.model('Car', CarSchema)
  Account = mongoose.model('Account', AccountSchema);
  Houses = mongoose.model('House', HouseSchema)
}

export const dbContext = new DbContext()
