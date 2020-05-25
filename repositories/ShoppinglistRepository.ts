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
    const { $oid } = await this.shoppingCollection.insertOne(list);
    return $oid;
  }
  async deleteOne(id: any) {
    await this.shoppingCollection.deleteOne(id);
    return id;
  }
}
export default ShoppinglistRepository;
