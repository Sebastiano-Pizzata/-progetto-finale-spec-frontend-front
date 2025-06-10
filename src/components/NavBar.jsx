import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand bg-body-tertiary">
                <div className="nav navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">
                        Home
                    </NavLink>
                </div>
            </nav>
        </>
    )
}