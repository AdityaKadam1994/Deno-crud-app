import db from "../db/config.ts";
import shoppingSchema from "../model/shoppingSchema.ts";

class ShoppinglistRepository {
  constructor() {}
  readonly shoppingCollection = db.collection("shopping-items");

  //Get List
  async find() {
    const list = await this.shoppingCollection.find();
    return list;
  }

  //Add List
  async insertOne(list: shoppingSchema) {
    const { _id } = await this.shoppingCollection.insertOne(list);
    return _id;
  }

  //Delete list
  async deleteOne(id: any) {
    await this.shoppingCollection.deleteOne(id);
    return id;
  }

  //Update list
  async updateOne(id: any, list: shoppingSchema) {
    await this.shoppingCollection.updateOne(id, list);
  }
}
export default ShoppinglistRepository;
