const Category = {
  products: ({ id }, _, { products }) => {
    return products.filter((product) => product.categoryId === id);
  },
};

export default Category;
