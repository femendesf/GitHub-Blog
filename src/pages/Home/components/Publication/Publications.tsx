import { useContext, useEffect, useState } from "react"
import { MessagePublicationEmpty, PublicationIssueStyle, PublicationsContainerStyle } from "./style"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { PublicationsContext } from "../../../../context/PublicationsContext"
import { ClipboardText } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"

export function Publications(){

    const {issues, reloadList, issueNumber, updateMessageButton} = useContext(PublicationsContext)
    const navigate = useNavigate()

    function sendIdIssue(number: number){
      issueNumber(number)
      navigate(`issues`)
    }


    if(issues.length <=0 ){

      updateMessageButton(false)
      
      return (

        <MessagePublicationEmpty>
          
          <ClipboardText size={60}/>
          <h1>
            Nenhum resultado encontrado!
          </h1>

          <span>Tente fazer uma nova busca ou clique no botão abaixo para recarregar a página</span>

          <button 
            onClick={reloadList}
          >
            VOLTAR
          </button>
          
        </MessagePublicationEmpty>
      )

    }else{
      return(
        <PublicationsContainerStyle>

          {issues.map(issues => {
            const dateDifference = formatDistanceToNow(new Date(issues.created_at), {
              addSuffix:true,
              locale: ptBR
            })

            const truncatedBody = issues.body ? `${issues.body.substring(0, dateDifference.length + 160)}...` : "";

            return(
              <PublicationIssueStyle onClick={() => sendIdIssue(issues.number)}>
                <div key={issues.id}>
                  <h1>{issues.title}</h1>
                  <span>
                    {dateDifference.charAt(0).toLocaleUpperCase() + dateDifference.slice(1)}
                  </span>
                </div>
                
                <p>
                  {truncatedBody}
                </p>
              </PublicationIssueStyle>
            )
          })}

        </PublicationsContainerStyle>
    )
    }
    
}

