import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import SingleMonitorCard from "../components/SingleMonitorCard";

export default function SingleProduct() {
    const { id } = useParams();

    const {
        singleMonitor,
        fetchSingleMonitor,
        addToFavourites } = useGlobalContext();

    useEffect(() => {
        fetchSingleMonitor(id);
    }, [id]);

    const [buttonText, setButtonText] = useState("Aggiungi ai preferiti");
    const [buttonClasses, setButtonClasses] = useState("btn btn-primary mt-4");

    const handleClick = () => {
        setButtonText("Aggiunto ai preferiti!");
        setButtonClasses("btn btn-secondary mt-4");
    };

    const resetButton = () => {
        setTimeout(() => {
            setButtonText("Aggiungi ai preferiti");
            setButtonClasses("btn btn-primary mt-4");
        }, 3000);
    };

    if (!singleMonitor) {
        return <p className="text-danger">Caricamento in corso...</p>;
    }

    return (
        <>
            <div className="container p-3">
                <SingleMonitorCard key={singleMonitor.id} singleCard={singleMonitor} />
                <button
                    className={buttonClasses}
                    onClick={() => {
                        handleClick();
                        resetButton();
                        addToFavourites(singleMonitor)
                    }}>{buttonText}</button>
            </div >
        </>
    )
}