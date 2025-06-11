import { createContext, useContext, useMemo, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const url = import.meta.env.VITE_ENDPOINT_URL;

    const [monitors, setMonitors] = useState([]);

    const [singleMonitor, setSingleMonitor] = useState()

    const [search, setSearch] = useState('')

    const [sortBy, setSortBy] = useState('')

    const [sortOrder, setSortOrder] = useState(1)

    const [category, setCategory] = useState('')


    async function fetchMonitors() {
        try {
            const response = await fetch(`${url}/monitors`)
            if (!response.ok) {
                throw new Error('Errore nel server')
            }
            const data = await response.json();
            setMonitors(data)

            return data

        } catch (error) {
            console.error(error)
            throw new Error
        }
    }

    async function fetchSingleMonitor(id) {
        try {
            const cleanId = id.startsWith(':') ? id.slice(1) : id;
            const singleResponse = await fetch(`${url}/monitors/${cleanId}`)
            if (!singleResponse.ok) {
                throw new Error('Errore nel server')
            }
            const singleData = await singleResponse.json();
            console.log(singleData)
            setSingleMonitor(singleData.monitor)


            return singleData


        } catch (error) {
            console.error(error)
            throw Error
        }

    }


    const handleSort = (value) => {
        if (value === 'title_asc') {
            setSortBy('title');
            setSortOrder(1);
        } else if (value === 'title_desc') {
            setSortBy('title');
            setSortOrder(-1);
        } else {
            setSortBy('');
            setSortOrder(1);
        }
    };

    const sortedAndFilteredMonitors = useMemo(() => {
        const copy = [...monitors]
        const filteredCopy = copy.filter(m => m.title.toLowerCase().includes(search.toLowerCase()))
        const filteredByCategory = filteredCopy.filter(f => {
            if (category === '') {
                return true
            }
            return f.category === category
        });

        filteredByCategory.sort((a, b) => {
            if (sortBy === 'title') {
                return a.title.localeCompare(b.title) * sortOrder
            }
            else {
                return 0
            }
        })
        return filteredByCategory
    }, [monitors, search, category, sortBy, sortOrder])

    const value = {
        monitors,
        fetchMonitors,
        singleMonitor,
        fetchSingleMonitor,
        search,
        setSearch,
        setCategory,
        sortOrder,
        setSortOrder,
        handleSort,
        sortedAndFilteredMonitors
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export {
    GlobalProvider,
    useGlobalContext
}