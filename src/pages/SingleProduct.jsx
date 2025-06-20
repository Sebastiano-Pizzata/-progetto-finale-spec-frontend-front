import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import SingleMonitorCard from "../components/SingleMonitorCard";

export default function SingleProduct() {
    const { id } = useParams();

    const {
        singleMonitor,
        fetchSingleMonitor,
        addToFavourites,
        addToCompare } = useGlobalContext();

    useEffect(() => {
        fetchSingleMonitor(id);
    }, [id]);

    const [buttonText, setButtonText] = useState("Aggiungi ai preferiti");
    const [buttonText2, setButtonText2] = useState("Aggiungi al confronto");
    const [buttonClasses, setButtonClasses] = useState("btn btn-primary mt-4 me-2");
    const [buttonClasses2, setButtonClasses2] = useState("btn btn-warning mt-4");

    const handleClick = () => {
        setButtonText("Aggiunto ai preferiti!");
        setButtonClasses("btn btn-secondary mt-4 me-2");
    };

    const handleClick2 = () => {
        setButtonText2("Aggiunto al confronto!");
        setButtonClasses2("btn btn-secondary mt-4");
    }

    const resetButton = () => {
        setTimeout(() => {
            setButtonText("Aggiungi ai preferiti");
            setButtonClasses("btn btn-primary mt-4 me-2");
        }, 3000);
    };

    const resetButton2 = () => {
        setTimeout(() => {
            setButtonText2("Aggiunto al confronto");
            setButtonClasses2("btn btn-warning mt-4");
        }, 3000)
    }

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
                <button
                    className={buttonClasses2}
                    onClick={() => {
                        handleClick2();
                        resetButton2();
                        addToCompare(singleMonitor)
                    }
                    }>
                    {buttonText2}
                </button>
            </div >
        </>
    )
}