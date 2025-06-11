import { NavLink } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";

export default function NavBar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid d-flex justify-content-between">

                    <NavLink className="navbar-brand text-white" to="/">
                        Home
                    </NavLink>

                    <div className="d-flex">
                        <NavLink className="nav-link text-white" to="/favourites">
                            <CiHeart size={30} color="" />
                        </NavLink>
                    </div>

                </div>
            </nav>

        </>
    )
}