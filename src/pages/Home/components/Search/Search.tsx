import { ChangeEvent, useContext, useState } from "react"
import { SearchContainerStyle } from "./style"
import { PublicationsContext } from "../../../../context/PublicationsContext"

export function Search(){

    const [valueInput, setValueInput] = useState('')

    const {fetchIssues} = useContext(PublicationsContext)

    function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>){
        setValueInput(event.target.value)
        console.log(event.target.value)  
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>){
        if (event.key === 'Enter') {
            fetchIssues(valueInput)
        }
    }

    return(
        
        <SearchContainerStyle>
            <div>
                <h1>Publicação</h1>
                <span className="font-sans">1 publicação</span>
            </div>
            
            <textarea
                typeof="text"
                placeholder="Buscar conteúdo"
                onChange={handleInputChange}
                value={valueInput}
                onKeyDown={handleKeyDown}
            >

            </textarea>
            
        </SearchContainerStyle>
      
    )
}