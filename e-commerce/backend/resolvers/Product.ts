const Product = {
  category: ({ categoryId }, _, { categories }) => {
    return categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, _, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};

export default Product;
