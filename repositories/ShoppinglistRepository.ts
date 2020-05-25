import db from "../db/config.ts";
import shoppingSchema from "../model/shoppingSchema.ts";

class ShoppinglistRepository {
  constructor() {}
  readonly shoppingCollection = db.collection("shopping-items");

  async find() {
    const list = await this.shoppingCollection.find();
    return list;
  }
  async insertOne(list: shoppingSchema) {
    const { _id } = await this.shoppingCollection.insertOne(list);
    return _id;
  }
}
export default ShoppinglistRepository;
