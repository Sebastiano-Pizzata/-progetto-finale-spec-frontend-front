import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom";

export default function FavouritePage() {
    const { favourite, cleanFavourites, cleanSingleFavourite } = useGlobalContext();


    return (
        <>
            <div className="container mt-4">
                {favourite.length > 0 ? (
                    <>
                        <div className="row row-cols-lg-4 g-4">
                            {favourite.map(f => (
                                <div className="col" key={f.id}>
                                    <div className="card h-100 d-flex flex-column shadow-sm">
                                        <Link className="text-decoration-none text-dark" to={`/monitors/${f.id}`}>
                                            <figure className="mb-0">
                                                <img
                                                    className="card-img-top"
                                                    src={f.image}
                                                    alt={f.title}
                                                    style={{ height: "200px", objectFit: "cover" }}
                                                />
                                            </figure>
                                            <div className="card-body bg-light">
                                                <h3 className="card-title fw-bold text-truncate">{f.title}</h3>
                                            </div>
                                        </Link>
                                        <div className="card-footer bg-transparent border-top-0 mt-auto d-flex justify-content-end">
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => cleanSingleFavourite(f.id)}
                                                aria-label={`Remove ${f.title} from favorites`}
                                            >
                                                Rimuovi
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-center">
                            <button
                                className="btn btn-outline-danger btn-lg"
                                onClick={cleanFavourites}
                            >
                                Svuota tutti i preferiti
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="alert alert-info text-center" role="alert">
                        Nessun preferito salvato.
                    </div>
                )}
            </div>
        </>
    )
}