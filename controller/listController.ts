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

export const deleteList = async (context: RouterContext) => {
  const { request, response } = context;
  const list_id = context.params.id;

  if (!list_id) {
    response.status = 400;
    response.body = { msg: "Not valid id" };
    return;
  }
  const deleteId = await shoppingService.deleteShoppingList(list_id);
  response.body = { msg: "List deleted", deleteId };
};

export const updateList = async (context: RouterContext) => {
  const { request, response } = context;
  const list_id = context.params.id;
  if (!list_id || !request.hasBody) {
    response.status = 400;
    response.body = { msg: "Something went wrong" };
    return;
  }
  const { value:{title,quantity} } = await request.body();
  const updatedList = await shoppingService.updateShoppingList(
    list_id,
    { title, quantity },
  );
  response.body = { msg: "Successfully Updated", updatedList };
};
