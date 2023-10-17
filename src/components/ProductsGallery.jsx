import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';

export default function ProductsGallery() {
    const [data, setData] = useState();
    const dispath = useDispatch()

    const dataFetch = () => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }

    useEffect(() => {
        dataFetch();
    })

    function addToCart(item) {
      dispath({
        type: 'cart/addItem',
        payload: item
      })
    }

    if (!data) return

    const renderData = data.map((item, index) => 
        <div className="border rounded-lg overflow-hidden" key={index}>
          <div className="w-full h-40 text-center p-4">
              <img className="h-full my-5 mx-auto" src={item.image} alt="" />
          </div>
          <div className="mt-4 h-full p-4 bg-gray-100">
              <div className="lg:flex">
                <div className="text-left w-full">
                  <h2 className="text-gray-700">{item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}</h2>
                  <span className="text-xs text-gray-500">{item.category}</span>
                </div>
                <div className="text-center my-2 lg:my-0 lg:text-right">
                  <h3 className="font-bold">{item.price}€</h3>
                </div>
              </div>
              <div className="mt-3">
                <Button buttonText="Add to cart" onClick={() => addToCart(item)} isFullWidth={true} />
              </div>
          </div>
        </div>
  )
  return (
    <section className="lg:w-1/2 w-full px-4 mx-auto">
      <h1 className="text-left text-2xl font-bold tracking-tight text-gray-900 my-5">All Products</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        { !data ? 'Chargement...' : renderData}
      </div>
    </section>
  )
}