import { ProductType } from "../enums/Product";

export const Products = [
  {
    id: "1",
    name: "Product 1",
    description: "My description",
    price: 12,
    productType: ProductType.PRODUCT,
  },
  {
    id: "2",
    name: "Service 1",
    description: "My service 1",
    price: 46,
    productType: ProductType.SERVICE,
  },
  {
    id: "3",
    name: "Product 2",
    description: "My description 2",
    price: 37,
    productType: ProductType.PRODUCT,
  }
];