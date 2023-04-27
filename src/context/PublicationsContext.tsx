import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface PublicationsContextProps{
    issues: IssuesProps[],
    fetchIssues: (query?: string) => Promise<void>
}

interface PublicationsContextType{
    children: ReactNode
}

interface IssuesProps{
    id: number,
    title: string,
    body: string,
    createdAt: string
}

export const PublicationsContext = createContext({} as PublicationsContextProps)

export function PublicationsContextProvider({children} : PublicationsContextType){

    const [issues, setIssues] = useState<IssuesProps[]>([])
  
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

    async function fetchIssues(query?: string) {

        try {
          const response = await api.get(`/search/issues`,{
         
            params:{
              q: `repo:femendesf/GitHub-Blog is:issue ${query}`
            }
          })

          const items = response.data.items.map((item: any) => ({
            id: item.id,
            body: item.body,
            createdAt: item.created_at,
            title: item.title,
          }))

          console.log(response)
          console.log(items)

          setIssues(items)

        } catch (error) {
          console.error(error)
        }

       
      }
   
    return(
        <PublicationsContext.Provider value={{issues, fetchIssues}}>
            {children}
        </PublicationsContext.Provider>
    )
}