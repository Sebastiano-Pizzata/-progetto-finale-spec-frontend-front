export default function MonitorsCard({ card }) {
    return (
        <>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{card.title}</li>
                </ul>
            </div >
        </>
    )
}