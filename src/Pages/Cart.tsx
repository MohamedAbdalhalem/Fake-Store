import ErrorScreen from "../Components/ErrorScreen"
import { Spinner } from "flowbite-react"
import useCartData from "../Hooks/useCartData"
import UserCartDataSection from "../Components/UserCartDataSection"
import CartItemSection from "../Components/CartItemSection"

export default function Cart() {
    const{cartData,isLoading,isError} = useCartData()
    if (isError) {
        return <ErrorScreen/>
    }
    if (isLoading) {
        return <div className="h-[70vh] bg-gray-300 dark:bg-gray-950 flex justify-center items-center">
            <Spinner color="pink" aria-label="Extra large spinner example" size="xl" />
        </div>
    }
  return (
    <div className="px-4 pb-4 pt-22  mx-auto space-y-10">
  {/* User Info */}
  <UserCartDataSection userId={cartData.userId}/>

  {/* Products List */}
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
      🛒 Products in Cart
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cartData.products.map(product => <CartItemSection Quantity={product.quantity} prodctId={product.productId.toString()} />)}
    </div>
  </div>
</div>


  )
}
