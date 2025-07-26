import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import ErrorScreen from "../Components/ErrorScreen"
import { Spinner } from "flowbite-react"

export default function Cart() {
    function getCartData() {
       return axios.get(`https://fakestoreapi.com/carts/1`)
    }
    const {data,isLoading,isError} = useQuery({
        queryKey: ['getCartData'],
        queryFn:getCartData
    })
    if (isError) {
        return <ErrorScreen/>
    }
    if (isLoading) {
        return <div className="h-[70vh] bg-gray-300 dark:bg-gray-950 flex justify-center items-center">
            <Spinner color="pink" aria-label="Extra large spinner example" size="xl" />
        </div>
    }
    console.log(data?.data)
  return (
    <div >
        
    </div>
  )
}
