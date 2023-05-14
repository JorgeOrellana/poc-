import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";

const ProductForm = () => {
  return (
    <>
      <Typography variant="h6">New Product</Typography>
      <FormControl>
        <TextField label="name" variant="standard" />
        <TextField label="description" variant="standard" />
        <TextField label="price" type="number" variant="standard" />
        <Button variant="outlined">Submit</Button>
      </FormControl>
    </>
  );
};

export default ProductForm;
