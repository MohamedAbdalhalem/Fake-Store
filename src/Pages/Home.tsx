
import ErrorScreen from "../Components/ErrorScreen";
import MainLoadingScreen from "../Components/MainLoadingScreen";
import ProductCard from "../Components/ProductCard";
import useAllProducts from "../Hooks/useAllProducts";

export default function Home() {
  const { products, isLoading, isError } = useAllProducts()
  if (isLoading) {
    return <MainLoadingScreen/>
  }
  if (isError) {
    return <ErrorScreen/>
  }
  return (
    <div className="p-5">
          <h1 className="text-gray-800 dark:text-white font-bold text-3xl">Products :</h1>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
            {products?.map(product => <ProductCard key={product.id} productData={product}/>)}
          </div >
    </div>
  )
}
