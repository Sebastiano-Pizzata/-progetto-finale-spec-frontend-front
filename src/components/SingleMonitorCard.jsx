export default function SingleMonitorCard({ singleCard }) {
    const {
        title,
        category,
        brand,
        resolution,
        image,
        quality,
        size,
        price,
        refresh_rate,
        hdr,
        ports,
        panel,
        sync } = singleCard;
    return (
        <>
            <div className="card mt-4 shadow-sm border-0">
                <figure className="m-0">
                    <img src={image} alt={title} className="card-img-top" />
                </figure>
                <div className="card-body bg-light">
                    <h3 className="card-title fw-bold ">{title}</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Categoria:</span><span className="fw-bold">{category}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Brand:</span><span className="fw-bold">{brand}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Risoluzione:</span><span className="fw-bold">{resolution}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Qualità:</span><span className="fw-bold">{quality}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Dimensione:</span><span className="fw-bold">{size}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Frequenza di aggiornamento:</span><span className="fw-bold">{refresh_rate}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Display:</span><span className="fw-bold">{hdr}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Porte:</span>
                        <span className="fw-bold">
                            {ports.join(', ')}
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Pannello:</span><span className="fw-bold">{panel}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Sync:</span><span className="fw-bold">{sync}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Prezzo:</span><span className="fw-bold">{price}</span>
                    </li>
                </ul>
            </div>

        </>
    )
}