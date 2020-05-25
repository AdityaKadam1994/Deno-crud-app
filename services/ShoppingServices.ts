import ShoppinglistRepository from "../repositories/ShoppinglistRepository.ts";

import shoppingSchema from "../model/shoppingSchema.ts";

class ShoppingServices {
  constructor() {}
  readonly shoppingRepository = new ShoppinglistRepository();
  getShoppingList = async () => {
    return await this.shoppingRepository.find();
  };

  createShoppingList = async (list: shoppingSchema) => {
    return await this.shoppingRepository.insertOne(list);
  };

  deleteShoppingList = async (id: any) => {
    return await this.shoppingRepository.deleteOne({
      _id: {
        $oid: id,
      },
    });
  };

  updateShoppingList = async (id: any, list: shoppingSchema) => {
    return await this.shoppingRepository.updateOne({ _id: { $oid: id } }, list);
  };
}
export default ShoppingServices;
