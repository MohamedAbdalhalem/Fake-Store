import  StarRatings  from 'react-star-ratings';
import { productType } from '../Types/Product.type';
import { Link } from 'react-router';

export default function ProductCard({productData} : {productData :productType}) {
  return (
    <Link to={`productDetials/${productData.id}`} className=" bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:scale-[1.02]">
  <div className="w-full h-80 overflow-hidden">
    <img
      src={productData.image}
      alt={productData.title}
      className="w-full h-full object-fill transition duration-300"
    />
  </div>

  <div className="p-4">
    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
      {productData.title}
    </h5>

    <div className="flex items-center">
      <StarRatings
        rating={productData.rating.rate}
        starRatedColor="#facc15"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="1px"
        name="rating"
      />
     <span className="ml-2 text-sm font-medium text-gray-800 bg-gray-200 dark:text-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-lg">
  {productData.rating.rate.toFixed(1)}
</span>
    </div>
  </div>
</Link>


  )
}
