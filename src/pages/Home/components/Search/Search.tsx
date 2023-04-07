import { SearchContainerStyle } from "./style"

export function Search(){
    return(
        <SearchContainerStyle>
            <div>
                <h1>Publicação</h1>
                <span className="font-sans">1 publicação</span>
            </div>
            
            <input 
                type="text" 
                placeholder="Buscar conteúdo" 
            />
        </SearchContainerStyle>
      
    )
}