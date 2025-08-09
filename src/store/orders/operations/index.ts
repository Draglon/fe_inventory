import fetchOrders from "./fetchOrders";
import createOrder from "./createOrder";
import deleteOrder from "./deleteOrder";

const ordersOperations = [fetchOrders, createOrder, deleteOrder];

export default ordersOperations;
