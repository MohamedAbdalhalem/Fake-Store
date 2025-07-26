import { Link } from "react-router"
import useProductDetials from "../Hooks/useProductDetials"

export default function CartItemSection({prodctId,Quantity}: {prodctId : string,Quantity : number}) {
    const { productDetials, isLoading } = useProductDetials(prodctId)
    if (isLoading) {
        return <div role="status" className=" p-4 border w-full  border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
    </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2.5" />
  <span className="sr-only">Loading...</span>
</div>
    }
  return (
    <Link to={`/productDetials/${prodctId}`} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex flex-col">
        <img
          src={productDetials.image}
          alt={productDetials.title}
          className="w-full h-48 object-fill mb-4"
        />
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">
          {productDetials.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-2">
          {productDetials.description}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          🏷️ Category: {productDetials.category}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          🔢 Quantity: {Quantity}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-green-600 font-bold">
            💵 Price: ${productDetials.price}
          </span>
          <span className="text-yellow-500 text-sm">
            ⭐ Rating: {productDetials.rating.rate} 
          </span>
        </div>
      </Link>
  )
}
