import { Link } from 'react-router-dom'
import Cart from "./Cart"

export default function Menu() {

    return (
        <nav className="bg-gray-900 top-0 left-0 sticky text-white flex px-8 items-center w-full h-10 justify-between">
            <Link to="/" className="font-bold">FakeStore</Link>
            <Link to="/cart">
                <Cart />
            </Link>
        </nav>
    )
}