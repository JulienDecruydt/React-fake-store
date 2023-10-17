import { useSelector } from 'react-redux'

export default function CartList() {

    const cart = useSelector((state) => state.cart)

    const renderData = cart.map((item, index) =>
    <div className="border rounded-lg overflow-hidden" key={index}>
        <div className="w-full h-40 text-center p-4">
            <img className="h-full my-5 mx-auto" src={item.image} alt="" />
        </div>
        <div className="mt-4 h-full p-4 bg-gray-100">
            <div className="lg:flex">
                <div className="text-left w-full">
                    <h2 className="text-gray-700">{ item.title }</h2>
                    <span className="text-xs text-gray-500">{item.category}</span>
                </div>
                <div className="text-center my-2 lg:my-0 lg:text-right">
                    <h3 className="font-bold">{item.price}€</h3>
                </div>
            </div>
            <div className="mt-3">
            </div>
        </div>
    </div>
    )

    return(
        <div>
            {renderData}
        </div>
    )
}