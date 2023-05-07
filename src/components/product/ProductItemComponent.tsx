//React Library
import { useState } from "react";

// External Libraries
import { IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Internal Libraies
import { ProductItemProps } from "../../types/ProductItemType";
import { ProductType } from "../../enums/Product";

const ProductItem = () => {
  const [data, setData] = useState<ProductItemProps>({
    id: "1",
    name: "Product 1",
    description: "My description",
    price: 12,
    productType: ProductType.PRODUCT,
  });

  return (
    <>
      <TextField label={data.name} variant="standard" />
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default ProductItem;
