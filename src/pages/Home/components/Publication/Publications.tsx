import { useEffect, useState } from "react"
import { PublicationIssueStyle, PublicationsContainerStyle } from "./style"
import { api } from "../../../../lib/axios"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

interface IssuesProps{
  title: string,
  body: string,
  createdAt: string
}
export function Publications(){

    const [issues, setIssues] = useState<IssuesProps[]>([])

    useEffect(() => {
      api('/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1')
      .then(response => {
          setIssues(state => [...state, 
            {
              body: response.data.body,
              title: response.data.title,
              createdAt: response.data.created_at
            }
          ])
      })
      }, [])

    return(
        <PublicationsContainerStyle>
          {issues.map(issues => {

            const dateDifference = formatDistanceToNow(new Date(issues.createdAt), {
              addSuffix:true,
              locale: ptBR
            })

            return(
              <PublicationIssueStyle>
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

