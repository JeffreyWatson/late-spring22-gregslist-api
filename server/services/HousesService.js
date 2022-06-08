import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"


class HousesService {
  async getAll(query = {}) {
    return await dbContext.Houses.find(query).populate('creator', 'name picture')
  }

  async getById(id) {
    const house = await dbContext.Houses.findById(id).populate('creator', 'name picture')
    if (!house) {
      throw new BadRequest('wrong house')
    }
    return house
  }

  async create(body) {
    const house = await dbContext.Houses.create(body)
    return house
  }

  async remove(id) {
    const house = await this.getById(id)
    await house.remove()
  }

  async edit(update) {
    let original = await this.getById(update.id)
    if (original.creatorId.toString() != update.creatorId) {
      throw new Forbidden("This is not your house.")
    }

    original.bedrooms = update.bedrooms || original.bedrooms
    original.bathrooms = update.bathrooms || original.bathrooms
    original.levels = update.levels || original.levels
    original.year = update.year || original.year
    original.price = update.price || original.price
    original.imgUrl = update.imgUrl || original.imgUrl
    original.description = update.description || original.description

    await original.save()
    return original
  }
}

export const housesService = new HousesService