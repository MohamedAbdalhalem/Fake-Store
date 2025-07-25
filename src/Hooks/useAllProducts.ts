import axios from "axios";
import { productType } from "../Types/Product.type";
import { useQuery } from "@tanstack/react-query";

export default function useAllProducts() {
  function getAllProducts() {
        return axios.get('https://fakestoreapi.com/products')
    }
    const { data,isError,isLoading } = useQuery({
        queryKey: ['getAllProducts'],
        queryFn: getAllProducts
    })
    const products: productType[] = data?.data
    return {products,isError,isLoading}
}
