import { Products } from "../../backend/BackendProductData"
import { ProductItemProps } from "../../types/ProductItemType"

export type ProductProps = {
  data: ProductItemProps[],
}

export const ProductInitialState: ProductProps = {
  data: Products
}