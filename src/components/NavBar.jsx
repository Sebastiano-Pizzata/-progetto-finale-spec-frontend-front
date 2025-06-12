import { NavLink } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { useGlobalContext } from '../context/GlobalContext';
import '../style/style.css'

export default function NavBar() {
    const { favourite } = useGlobalContext();

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
                            <span className={`cart-icon-total ${favourite?.length == 0 && 'd-none'}`}>{favourite?.length}</span>
                        </NavLink>
                    </div>
                </div>
            </nav>

        </>
    )
}