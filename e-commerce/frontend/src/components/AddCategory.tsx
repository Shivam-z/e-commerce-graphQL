import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_CATEGORY } from "../GraphQL/Mutation";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [addCategory, { loading, error }] = useMutation(ADD_CATEGORY);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory({
      variables: {
        body: { name: categoryName },
      },
    });
    setCategoryName("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value;
    setCategoryName(data);
    console.log(categoryName);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <input type="text" value={categoryName} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        Add Category
      </button>
    </div>
  );
};

export default AddCategory;
