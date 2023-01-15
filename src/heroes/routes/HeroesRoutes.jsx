import { Navbar } from "../../ui/components/navbar"
import { Navigate } from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import { DcPage } from "../pages/DcPage"
import { MarvelPage } from "../pages/MarvelPage"
import { Search } from "../pages/Search";
import { Hero } from "../pages/Hero";


export const HeroesRoutes = () => {


  return (
    <>
    
    <Navbar />

    <div className="container">

        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
            <Route path="search" element={<Search />} />
            <Route path="hero/:id" element={<Hero />} />
            <Route path='/' element={<Navigate to="/marvel" />} />
        </Routes>
    
     </div>
    </>
  )
}
