import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import SingleMonitorCard from "../components/SingleMonitorCard";

export default function SingleProduct() {
    const { id } = useParams();

    const { singleMonitor, fetchSingleMonitor } = useGlobalContext();

    useEffect(() => {
        fetchSingleMonitor(id);
    }, [id]);

    if (!singleMonitor) {
        return <p className="text-danger">Caricamento in corso...</p>;
    }

    return (
        <>
            <div className="container p-3">
                <SingleMonitorCard key={singleMonitor.id} singleCard={singleMonitor} />
            </div >
        </>
    )
}