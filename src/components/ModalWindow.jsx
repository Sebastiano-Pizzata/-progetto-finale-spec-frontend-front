import Modal from 'react-bootstrap/Modal';
import '../style/style.css';
import { useGlobalContext } from '../context/GlobalContext';
import ModalCard from './ModalCard';
import { useCallback } from 'react';

function ModalWindow({ show, fullscreen = true, onClose }) {
    const {
        compare,
        setCompare,
        filteredProducts,
        monitorsToCompare,
        addToCompare,
        removeFromCompare,
        debounce
    } = useGlobalContext();

    const debounceCompareSearch = useCallback(
        debounce(setCompare, 1000),
        [])


    return (
        <Modal
            show={show}
            fullscreen={fullscreen}
            onHide={onClose}
            backdropClassName="bg-transparent"
            dialogClassName="transparent-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>Confronta Prodotti</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section>
                    <div className="container d-flex flex-column gap-4 align-items-center">
                        <div className="input-group input-group-lg shadow rounded-pill w-50">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cerca Prodotto da confrontare"
                                onChange={(e) => debounceCompareSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h5>Prodotti trovati:</h5>
                        <div className="row gap-2">
                            {filteredProducts.length === 0 ? (
                                <p>Nessun risultato trovato</p>
                            ) : (
                                filteredProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="card p-2 mb-2 card-hover"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => addToCompare(product)}
                                    >
                                        <strong>{product.title}</strong> - {product.brand}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>

                <section className="mt-4">
                    <div className="container">
                        <h5>Monitor da confrontare:</h5>
                        {monitorsToCompare.length === 0 ? (
                            <p>Nessun monitor selezionato</p>
                        ) : (
                            <div className="row gap-3 align-items-stretch">
                                {monitorsToCompare.map((monitor) => (
                                    <div key={monitor.id} className="col-md-5 col-lg-4 d-flex flex-column">
                                        <ModalCard modal={monitor} />
                                        <button
                                            className="btn btn-danger mt-2"
                                            onClick={() => removeFromCompare(monitor.id)}
                                        >
                                            Rimuovi dal confronto
                                        </button>

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </Modal.Body>
        </Modal>
    );
}

export default ModalWindow;
