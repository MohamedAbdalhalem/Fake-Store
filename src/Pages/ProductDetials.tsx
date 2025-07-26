import { useParams } from "react-router"
import ProductDetialsLoadingScreen from "../Components/ProductDetialsLoadingScreen"
import  StarRatings  from 'react-star-ratings';
import ErrorScreen from "../Components/ErrorScreen"
import useProductDetials from "../Hooks/useProductDetials"

export default function ProductDetials() {
    const { id } = useParams()
    const {productDetials,isLoading,isError} = useProductDetials(id)
    if (isLoading) {
        return <ProductDetialsLoadingScreen/>
  }
  if (isError || !productDetials) {
    return <ErrorScreen/>
  }
  return (
    <div className="px-4 pb-4 pt-22">
      
    <div className=" grid md:grid-cols-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
  <img
    src={productDetials.image}
    alt={productDetials.title}
    className="w-full h-74 md:h-full    object-contain bg-white p-4"
  />

  <div className="flex flex-col  md:col-span-3 justify-center p-4 flex-1">
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {productDetials.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
        {productDetials.description}
      </p>

      <div className="flex flex-wrap gap-4 mb-4 text-sm">
        <span className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded">
          Category: {productDetials.category}
        </span>
        <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100 px-2 py-1 rounded">
          In Stock: {productDetials.rating.count}
        </span>
      </div>
    </div>

    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <StarRatings
          rating={productDetials.rating.rate}
          starRatedColor="#facc15"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="1px"
          name="rating"
        />
        <span className="ml-2 mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
          {productDetials.rating.rate.toFixed(1)}
        </span>
      </div>

      <div className="text-xl font-bold text-blue-700 dark:text-blue-400">
        ${productDetials.price}
      </div>
    </div>
  </div>
</div>




    </div>
  )
}
