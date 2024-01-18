import { Container } from "@mui/material";
import React from "react";
import Form from "../Form/Form";

const EditProduct = () => {
  return (
    <Container>
      <Form isEdit={true} />
    </Container>
  );
};

export default EditProduct;
