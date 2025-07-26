import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { cartDataType } from "../Types/Cart.type"


export default function useCartData() {
    function getCartData() {
       return axios.get(`https://fakestoreapi.com/carts/1`)
    }
    const {data,isLoading,isError} = useQuery({
        queryKey: ['getCartData'],
        queryFn:getCartData
    })
    const cartData: cartDataType = data?.data
    return { cartData,isLoading,isError }
}
