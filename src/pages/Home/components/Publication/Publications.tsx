import { useContext, useEffect, useState } from "react"
import { PublicationIssueStyle, PublicationsContainerStyle } from "./style"
import { api } from "../../../../lib/axios"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { PublicationsContext } from "../../../../context/PublicationsContext"
import { ClipboardText } from "@phosphor-icons/react"

export function Publications(){

    const {issues, reloadList} = useContext(PublicationsContext)
    
    function sendIdIssue(id: number){
      console.log("clicado")
    }

    if(issues.length <=0 ){

      return (

        <div 
          className="flex flex-col items-center justify-center gap-4 rounded-md border border-base-border p-10 animate-[opacity_1s]"
        >
          <ClipboardText size={60} className="text-blue"/>
          <h1
            className="text-xl"
          >
            Nenhum resultado encontrado!
          </h1>

          <button 
            className="text-md font-bold text-white bg-blue py-2 px-5 rounded-md hover:bg-button_reset"
            onClick={reloadList}
          >
            VOLTAR
          </button>
          
        </div>
      )

    }else{
      return(
        <PublicationsContainerStyle>

          {issues.map(issues => {
            const dateDifference = formatDistanceToNow(new Date(issues.createdAt), {
              addSuffix:true,
              locale: ptBR
            })

            return(
              <PublicationIssueStyle onClick={() => sendIdIssue(issues.id)}>
                <div key={issues.id}>
                  <h1>{issues.title}</h1>
                  <span>
                    {dateDifference.charAt(0).toLocaleUpperCase() + dateDifference.slice(1)}
                  </span>
                </div>
                
                <p>
                  {issues.body.substring(0, dateDifference.length +160) + '...'}
                </p>
              </PublicationIssueStyle>
            )
          })}

        </PublicationsContainerStyle>
    )
    }
    
}

