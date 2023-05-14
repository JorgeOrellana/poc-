import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItemComponent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { FetchProducts } from "../../slices/ProductSlice";
import { List } from "@mui/material";

const ProductList = () => {
  //const [data, setData] = useState(ProductInitialState.data);
  const { data } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchProducts(""));
  });
  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <List>
            <ProductItem item={item} />
          </List>
        </React.Fragment>
      ))}
    </>
  );
};

export default ProductList;
