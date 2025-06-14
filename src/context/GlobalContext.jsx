import { createContext, useContext, useState, useMemo, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const url = import.meta.env.VITE_ENDPOINT_URL;

    const [monitors, setMonitors] = useState([]);
    const [singleMonitor, setSingleMonitor] = useState();

    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState(1);
    const [category, setCategory] = useState('');

    const [favourite, setFavourite] = useState([]);

    const [compare, setCompare] = useState('');

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
            const cleanId = id.toString().startsWith(':') ? id.toString().slice(1) : id.toString();
            const singleResponse = await fetch(`${url}/monitors/${cleanId}`);
            if (!singleResponse.ok) {
                throw new Error('Errore nel server');
            }
            const singleData = await singleResponse.json();
            setSingleMonitor(singleData.monitor);
            return singleData.monitor;
        } catch (error) {
            console.error(error);
            throw error;
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
        let filtered = [...monitors];
        filtered = filtered.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));
        if (category) filtered = filtered.filter(m => m.category === category);
        if (sortBy === 'title') filtered.sort((a, b) => a.title.localeCompare(b.title) * sortOrder);
        return filtered;
    }, [monitors, search, category, sortBy, sortOrder]);

    useEffect(() => {
        const savedFavourite = JSON.parse(localStorage.getItem('favourite'));
        if (savedFavourite) {
            setFavourite(savedFavourite);
        }
    }, []);

    const addToFavourites = (monitor) => {
        setFavourite(prev => {
            if (prev.some(item => item.id === monitor.id)) return prev;
            const updated = [...prev, monitor];
            localStorage.setItem('favourite', JSON.stringify(updated));
            return updated;
        });
    };

    const cleanSingleFavourite = (id) => {
        setFavourite(prev => {
            const updated = prev.filter(m => m.id !== id);
            localStorage.setItem('favourite', JSON.stringify(updated));
            return updated;
        });
    };

    const cleanFavourites = () => {
        setFavourite([]);
        localStorage.removeItem('favourite');
    };


    const filteredProducts = useMemo(() => {
        if (!compare) {
            return monitors;
        }
        return monitors.filter(m => {
            const title = m.title.toLowerCase();
            return (
                (compare && title.includes(compare.toLowerCase()))
            );
        });
    }, [compare, monitors]);

    const [monitorsToCompare, setMonitorsToCompare] = useState([]);

    const addToCompare = async (monitor) => {
        const fullMonitor = await fetchSingleMonitor(monitor.id);
        setMonitorsToCompare(prev => {
            if (prev.some(m => m.id === fullMonitor.id)) return prev;
            return [...prev, fullMonitor];
        });
    };

    const removeFromCompare = (id) => {
        setMonitorsToCompare(prev => prev.filter(m => m.id !== id));
    };


    return (
        <GlobalContext.Provider value={{
            monitors,
            fetchMonitors,
            fetchSingleMonitor,
            sortedAndFilteredMonitors,
            search,
            setSearch,
            category,
            setCategory,
            handleSort,
            sortOrder,
            setSortOrder,
            favourite,
            addToFavourites,
            cleanFavourites,
            cleanSingleFavourite,
            compare,
            setCompare,
            filteredProducts,
            singleMonitor,
            setSingleMonitor,
            addToCompare,
            removeFromCompare,
            monitorsToCompare
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
