import { Router } from "./Router";
import { PublicationsContextProvider } from "./context/PublicationsContext";
import { Home } from "./pages/Home";
import { BrowserRouter } from 'react-router-dom'
export function App(){

    return(
        <>
          <BrowserRouter>
            <PublicationsContextProvider>
              <Router/>
            </PublicationsContextProvider>
          </BrowserRouter>
        </>
    )
}
