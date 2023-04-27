import { useContext, useEffect, useState } from "react"
import { PublicationIssueStyle, PublicationsContainerStyle } from "./style"
import { api } from "../../../../lib/axios"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { PublicationsContext } from "../../../../context/PublicationsContext"

export function Publications(){

    const {issues} = useContext(PublicationsContext)
    
    function sendIdIssue(id: number){
      console.log("clicado")
    }


    return(
        <PublicationsContainerStyle>
          {issues.map(issues => {

            const dateDifference = formatDistanceToNow(new Date(issues.createdAt), {
              addSuffix:true,
              locale: ptBR
            })

            return(
              <PublicationIssueStyle onClick={() => sendIdIssue(issues.id)}>
                <div>
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

