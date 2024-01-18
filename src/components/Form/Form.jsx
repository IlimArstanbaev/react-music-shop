import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  picture: "",
};

const Form = ({ isEdit }) => {
  const { createProduct } = useProducts() || {};

  const [product, setProduct] = useState(init);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  function addProduct() {
    createProduct(product);
    setProduct(init);
  }

  return (
    <FormControl
      sx={{ gap: "20px", width: "100%", margin: "50px auto" }}
      color="success"
    >
      <TextField
        placeholder="enter title"
        variant="outlined"
        name="title"
        fullWidth
        onChange={handleInp}
        value={product.title}
      />
      <TextField
        placeholder="enter description"
        variant="outlined"
        name="description"
        fullWidth
        onChange={handleInp}
        value={product.description}
      />
      <TextField
        placeholder="enter categoty"
        variant="outlined"
        name="category"
        fullWidth
        onChange={handleInp}
        value={product.category}
      />
      <TextField
        placeholder="enter price"
        variant="outlined"
        name="price"
        fullWidth
        onChange={handleInp}
        value={product.price}
      />
      <TextField
        placeholder="enter url"
        variant="outlined"
        name="picture"
        fullWidth
        onChange={handleInp}
        value={product.picture}
      />
      {isEdit ? (
        <Button
          sx={{
            bgcolor: "darkgreen",
            color: "#fff",
            "&:hover": { bgcolor: "darkred" },
          }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={addProduct}
        >
          Save Changes
        </Button>
      ) : (
        <Button
          sx={{
            bgcolor: "darkblue",
            color: "#fff",
            "&:hover": { bgcolor: "darkred" },
          }}
          variant="outlined"
          fullWidth
          size="large"
        >
          Add
        </Button>
      )}
    </FormControl>
  );
};

export default Form;
