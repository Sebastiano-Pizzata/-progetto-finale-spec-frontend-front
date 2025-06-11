import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import { GlobalProvider } from "./context/GlobalContext";
import SingleProduct from "./pages/SingleProduct";
import FavouritePage from "./pages/FavouritePage";

export default function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/monitors/:id" Component={SingleProduct} />
              <Route path="/favourites" Component={FavouritePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}
