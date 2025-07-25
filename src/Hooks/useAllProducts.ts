import axios from "axios";
import { productType } from "../Types/Product.type";
import { useEffect, useState } from "react";
import orderBy from 'lodash/orderBy';
export default function useAllProducts() {
  const [products, setProducts] = useState<productType[] | undefined>(undefined)
  const [isLoading,setIsLoading] =useState(false)
  const [isError, setIsError] = useState(false)
  function filterByName(e :React.FocusEvent<HTMLInputElement, Element>) {
    const newPoducts = products?.filter(product => product.title.startsWith(e.target.value) )
    setProducts(newPoducts)
    if (e.target.value == '') {
      getAllProducts()
    }
  }
  
  function nameAToZ() {
      const newProducts = orderBy(products, ['title'], ['asc'])
      setProducts(newProducts)
  }
  function nameZToA() {
    const newProducts = orderBy(products, ['title'], ['desc'])
      setProducts(newProducts)
  }
  function priceLowToHigh() {
    const newProducts = orderBy(products, ['price'], ['asc'])
      setProducts(newProducts)
  }
  function priceHighToLow() {
    const newProducts = orderBy(products, ['price'], ['desc'])
      setProducts(newProducts)
    }
    function sort(e:React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === 'priceLow') {
      priceLowToHigh()
    } else if (e.target.value === 'priceHigh') {
      priceHighToLow()
    } else if (e.target.value === 'nameAZ') {
      nameAToZ()
    } else if (e.target.value === 'nameZA') {
      nameZToA()
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
