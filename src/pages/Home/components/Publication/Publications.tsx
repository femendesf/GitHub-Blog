import { useEffect, useState } from "react"
import { PublicationIssueStyle, PublicationsContainerStyle } from "./style"
import { api } from "../../../../lib/axios"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

interface IssuesProps{
  id: number,
  title: string,
  body: string,
  createdAt: string
}
export function Publications(){

  const [issues, setIssues] = useState<IssuesProps[]>([])

  function sendIdIssue(id: number){
    console.log("clicado")
  }

  useEffect(() => {
    api('/repos/femendesf/GitHub-BLog/issues')
    .then(response => {
        const listIssues:IssuesProps[] = response.data.map( (item:any) => {
         
          return(
            {
              id: item.id,
              title:item.title,
              body:item.body,
              createdAt: item.created_at
            }
          )
        })
       
        setIssues(listIssues)
       
    })
    }, [])
      
     console.log(issues)
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

