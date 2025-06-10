import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';


export default function DefaultLayout() {
    return (
        <>
            <section>
                <Header />
                <Outlet />
            </section>
        </>
    );
}