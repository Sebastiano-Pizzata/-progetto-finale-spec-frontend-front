import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Hero from "../components/Hero";
import MonitorsCard from "../components/MonitorsCard";


export default function HomePage() {
    const { fetchMonitors, handleSort, setCategory, sortedAndFilteredMonitors } = useGlobalContext();


    useEffect(() => {
        fetchMonitors()
    }, [])

    return (
        <>
            <Hero />

            <div className="container mt-5">
                <div className="d-flex align-items-center p-4 gap-2">
                    <div>
                        <h4 className="fw-bold">Filtri:</h4>
                    </div>
                    <div className="d-flex gap-2">
                        <select
                            className="form-select"
                            onChange={e => setCategory(e.target.value)}>
                            <option value="">Filtro categoria</option>
                            <option value="Gaming Monitor">Gaming Monitor</option>
                            <option value="Professional Monitor">Professional Monitor</option>
                            <option value="Smart Monitor">Smart Monitor</option>
                            <option value="Designer Monitor">Designer Monitor</option>
                            <option value="Budget Gaming Monitor">Budget Gaming Monitor</option>
                            <option value="Office Monitor">Office Monitor</option>
                            <option value="Ultrawide Monitor">Ultrawide Monitor</option>
                        </select>
                        <select
                            className="form-select"
                            onChange={e => handleSort(e.target.value)}>
                            <option value="">Ordine</option>
                            <option value="title_asc">A-Z</option>
                            <option value="title_desc">Z-A</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row gap-2">
                    {
                        sortedAndFilteredMonitors.length <= 0 ? (
                            <p className="alert alert-info text-center fs-5">Nessun risultato trovato</p>
                        ) : (
                            sortedAndFilteredMonitors.map(m => {
                                return <MonitorsCard key={m.id} card={m} />
                            })
                        )
                    }
                </div>
            </div>

        </>
    )
}