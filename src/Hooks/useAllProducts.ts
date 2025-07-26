import axios from "axios";
import { productType } from "../Types/Product.type";
import { useEffect, useState } from "react";
import orderBy from 'lodash/orderBy';
export default function useAllProducts() {
  const [products, setProducts] = useState<productType[] | undefined>(undefined)
  const [isLoading,setIsLoading] =useState(false)
  const [isError, setIsError] = useState(false)
  function filterByName(e :React.KeyboardEvent<HTMLInputElement>) {
    const newPoducts = products?.filter(product => product.title.startsWith(e.currentTarget.value) )
    setProducts(newPoducts)
    if (e.currentTarget.value == '') {
      getAllProducts()
    }
  }
  function sortBy(iteratees : string,orders : 'asc' | 'desc') {
    const newProducts = orderBy(products, [`${iteratees}`], [`${orders}`])
    setProducts(newProducts)
  }
    function sort(e:React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === 'priceLow') {
      sortBy('price','asc')
    } else if (e.target.value === 'priceHigh') {
      sortBy('price','desc')
    } else if (e.target.value === 'nameAZ') {
      sortBy('title',"asc")
    } else if (e.target.value === 'nameZA') {
      sortBy('title',"asc")
    } else {
      getAllProducts()
    }
  }
  function getAllProducts() {
    setIsLoading(true)
    axios.get('https://fakestoreapi.com/products')
      .then((data) => {
           setProducts(data.data)
      })
      .catch(() => {
      setIsError(true)
      })
      .finally(() => {
      setIsLoading(false)
    })
    }
  useEffect(() => {
      getAllProducts()
  }, [])
    return{products,isLoading,isError,sort,filterByName}
}
