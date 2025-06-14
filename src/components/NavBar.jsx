import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { useGlobalContext } from '../context/GlobalContext';
import '../style/style.css';
import ModalWindow from './ModalWindow';
import { MdMonitor } from "react-icons/md";

export default function NavBar() {
    const { favourite } = useGlobalContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid d-flex justify-content-between">
                    <NavLink className="navbar-brand text-white d-flex align-items-center gap-1" to="/">
                        <MdMonitor size={30} />Home
                    </NavLink>
                    <div className="d-flex gap-4 align-items-center">
                        <button
                            className='btn btn-warning'
                            onClick={() => setIsModalOpen(true)}>
                            Confronta prodotti
                        </button>
                        <NavLink className="nav-link text-white" to="/favourites">
                            <CiHeart size={30} />
                            <span className={`cart-icon-total ${favourite?.length === 0 && 'd-none'}`}>
                                {favourite?.length}
                            </span>
                        </NavLink>
                    </div>
                </div>
            </nav>

            <ModalWindow
                show={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
