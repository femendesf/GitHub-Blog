import { ChangeEvent, useContext, useState } from "react"
import { SearchContainerStyle } from "./style"
import { PublicationsContext } from "../../../../context/PublicationsContext"

export function Search(){

    const [valueInput, setValueInput] = useState('')
    const [messageSearch, setMessageSearch] = useState(false)

    const {fetchIssues, issues, reloadList, buttonMessage, updateMessageButton} = useContext(PublicationsContext)

    function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>){
        setValueInput(event.target.value)
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>){
        if (event.key === 'Enter') {
            fetchIssues(valueInput)
            event.preventDefault();
            setValueInput('')

            if(valueInput != ''){
                setMessageSearch(false)
            }
        }
    }

    function onFocusTextArea(){
        setMessageSearch(true)
    }

    function onBlurTextArea(){
        setMessageSearch(false)
    }

    function botaoClicado(){
        updateMessageButton(false)
        reloadList()
        console.log(issues)
    }

    return(
        
        <SearchContainerStyle>
           
            <div>
                <h1>Publicação</h1>
                <span className="font-sans">{issues.length > 1 ? `${issues.length} publicações` : `${issues.length} publicação`}</span>
            </div>
            
            <textarea
                typeof="text"
                placeholder="Buscar conteúdo"
                onChange={handleInputChange}
                value={valueInput}
                onKeyDown={handleKeyDown}
                onFocus={onFocusTextArea}
                onBlur={onBlurTextArea}
                
            >
            </textarea>

            {messageSearch ? <span className="text-red-400 text-xs">Aperte ENTER para buscar!</span> : ""}

            {buttonMessage ? <button onClick={botaoClicado}>VOLTAR</button>: ''}

        </SearchContainerStyle>
      
    )
}