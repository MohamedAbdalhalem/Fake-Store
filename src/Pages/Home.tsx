import ErrorScreen from "../Components/ErrorScreen";
import MainLoadingScreen from "../Components/MainLoadingScreen";
import ProductCard from "../Components/ProductCard";
import useAllProducts from "../Hooks/useAllProducts";

export default function Home() {
  const {products,isLoading,isError,sort,filterByName}= useAllProducts()
  if (isLoading) {
    return <MainLoadingScreen/>
  }
  if (isError) {
    return <ErrorScreen/>
  }
  
  return (
    <div className="p-5">
      <div className="flex flex-wrap justify-between items-center mb-4 ">
        <h1 className="text-gray-800 dark:text-white font-bold text-3xl">Products :</h1>
        <select
          className="w-40 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
          onChange={(e)=>{sort(e)}}
        >
         <option value="">Sort By</option>
         <option value="priceLow">Price: Low to High</option>
         <option value="priceHigh">Price: High to Low</option>
         <option value="nameAZ">Name: A–Z</option>
         <option value="nameZA">Name: Z–A</option>
</select>
      </div>
       <input
        type="text"
        onBlur={(e)=> filterByName(e) }
      placeholder="Search products..."
      className="w-full  border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
            {products?.map(product => <ProductCard key={product.id} productData={product}/>)}
          </div >
    </div>
  )
}
