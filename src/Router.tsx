import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./layouts/Header";
import { Issues } from "./pages/Issues";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/issues" element={<Issues/>}></Route>
            </Route>
        </Routes>
    )
}