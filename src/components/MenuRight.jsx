import { useSelector } from 'react-redux'
import { FiShoppingCart, FiUser, FiSettings } from "react-icons/fi"
import { Link } from 'react-router-dom'

export default function Cart({ item }) {
    const cart = useSelector((state) => state.cart)
    const userLogged = useSelector((state) => state.user.logged)
    const user = useSelector((state) => state.user.user)

    return (
        <div className="flex gap-6">
            <Link className="flex gap-3" to="/login">
                <FiUser className="text-2xl"/>
                {
                    userLogged ? user.username : null
                }
            </Link>
            {
                userLogged ? <Link to="/settings">
                    <FiSettings className="text-2xl"/>
                </Link> : null
            }
            <Link to="/cart" className="relative">
                {cart.length > 0 ?
                    <div className="absolute text-xs -top-2 -right-6 text-white w-6 h-6 flex items-center justify-center p-2 rounded-full bg-red-500 font-bold">
                        {cart.length}
                    </div> : null
                }
                <FiShoppingCart className="text-2xl"/>
            </Link>
        </div>
    )
}