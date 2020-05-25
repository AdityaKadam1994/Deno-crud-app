import { RouterContext, Context } from "https://deno.land/x/oak/mod.ts";
import ShoppingServices from "../services/ShoppingServices.ts";
const shoppingService = new ShoppingServices();

export const getlist = async (context: RouterContext) => {
  context.response.body = await shoppingService.getShoppingList();
};

export const createlist = async (context: RouterContext) => {
  const { request, response } = context;
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid list data" };
    return;
  }
  const { value:{title,quantity} } = await request.body();
  const shoppingListId = await shoppingService.createShoppingList(
    { title, quantity },
  );
  response.body = { msg: "List created", shoppingListId };
};
