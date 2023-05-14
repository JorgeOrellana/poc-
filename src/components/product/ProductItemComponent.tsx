//React Library

// External Libraries
import { IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Internal Libraies
import { ProductItemProps } from "../../types/ProductItemType";

type Props = {
  item: ProductItemProps;
};

const ProductItem = ({ item }: Props) => {
  return (
    <ListItem>
      <ListItemText primary={item.name} />
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default ProductItem;
