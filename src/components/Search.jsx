import { useGlobalContext } from "../context/GlobalContext"
import { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
export default function Search() {
    const { search, setSearch, debounce } = useGlobalContext();


    const debounceSearch = useCallback(
        debounce(setSearch, 500),
        [])

    return (
        <>
            <section className="d-flex align-items-center gap-2">
                <div className="input-group input-group-lg shadow rounded-pill">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cerca Monitor"
                        onChange={e => debounceSearch(e.target.value)} />
                    <button className="btn btn-warning"><FaSearch size={30} color="#555" /></button>
                </div>

            </section>

        </>
    )
}