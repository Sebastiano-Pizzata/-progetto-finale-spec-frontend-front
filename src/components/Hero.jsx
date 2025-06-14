import Search from "./Search"

export default function Hero() {
    return (
        <>
            <div className="container d-flex align-items-center justify-content-center mt-5 flex-column text-center">
                <h1 className="display-4 fw-bold text-primary mb-4">Ricerca i Monitor</h1>
                <div className="col-6">
                    <Search />
                </div>
            </div>
        </>
    )
}