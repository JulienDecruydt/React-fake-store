import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
    const navigate = useNavigate()
    const userLogged = useSelector((state) => state.user.logged)


    useEffect(() => {
        if (!userLogged) {
            navigate('/login')
        }
    })

    return (
        <div>
            <h1>Settings</h1>
        </div>
    )
}