export const isLoadingSelector = state => state.orders.status === "loading";
export const ordersSelector = state => state.orders?.data;
