export const isLoadingSelector = state => state.products.status === "loading";
export const productsSelector = state => state.products?.data;
