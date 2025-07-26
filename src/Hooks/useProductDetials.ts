import axios from "axios"
import { productType } from "../Types/Product.type"
import { useQuery } from "@tanstack/react-query"


export default function useProductDetials(id : string | undefined) {
  function getProductDetials() {
        return axios.get(`https://fakestoreapi.com/products/${id}`)
    }
    const{data,isLoading,isError} = useQuery({
        queryKey: ['getProductDetials', id],
        queryFn:getProductDetials
    })
    const productDetials: productType = data?.data
    return {productDetials,isLoading,isError}
}
