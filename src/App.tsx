import { PublicationsContextProvider } from "./context/PublicationsContext";
import { Home } from "./pages/Home";

export function App(){

  return(
    <PublicationsContextProvider>
      <Home/>
    </PublicationsContextProvider>
    
  )
}
