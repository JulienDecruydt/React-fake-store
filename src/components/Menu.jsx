import { Link } from 'react-router-dom'
import MenuRight from "./MenuRight"

export default function Menu() {

    return (
        <nav className="bg-gray-900 top-0 left-0 sticky text-white flex px-8 items-center w-full h-14 justify-between">
            <Link to="/" className="font-bold text-xl">FakeStore</Link>
            <MenuRight />
        </nav>
    )
}