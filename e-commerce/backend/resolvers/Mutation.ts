import { v4 as uuidv4 } from "uuid";

const Mutation = {
  addCategory: (_, { body }, { categories }) => {
    const newCategory = {
      id: uuidv4(),
      name: body.name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (_, { body }, { products }) => {
    const { name, description, quantity, image, price, onSale, categoryId } =
      body;
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      quantity,
      image,
      price,
      onSale,
      categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },
  addReview: (_, { body }, { reviews }) => {
    const { date, title, comment, rating, productId } = body;
    const newReview = {
      id: uuidv4(),
      title,
      date,
      comment,
      rating,
      productId,
    };
    reviews.push(newReview);
    return newReview;
  },
  deleteCategory: (parent, { id }, { categories, products }) => {
    const newCategories = categories.filter((c) => c.id !== id);
    categories.length = 0;
    newCategories.forEach((category) => {
      categories.push(category);
    });
    return true;
  },
};

export default Mutation;
