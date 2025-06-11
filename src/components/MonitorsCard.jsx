import { Link } from "react-router-dom"
import '../style/style.css'

export default function MonitorsCard({ card }) {
    return (
        <>
            <Link className="text-decoration-none" to={`/monitors/:${card.id}`}>
                <div className="card card-hover">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{card.title}</li>
                    </ul>
                </div >
            </Link>
        </>
    )
}