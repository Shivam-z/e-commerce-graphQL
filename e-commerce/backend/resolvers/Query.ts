const Query = {
  products: (_, { filter }, { products }) => {
    let filteredProducts = products;
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter(
          (products) => products.onSale === true
        );
      }
    }
    return filteredProducts;
  },

  product: (_, { id: productId }, { products }) => {
    const product = products.find((product) => product.id === productId);
    if (!product) return null;
    else return product;
  },
  categories: (_, __, { categories }) => categories,

  category: (_, args, { categories }) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
export default Query;
