import { ProductType } from "../enums/Product";

export type ProductItemProps = {
  id: string,
  name: string,
  description: string,
  price: number,
  productType: ProductType,
}