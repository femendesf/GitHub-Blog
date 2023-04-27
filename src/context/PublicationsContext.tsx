import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Publications } from "../pages/Home/components/Publication/Publications";
import { transformWithEsbuild } from "vite";

interface PublicationsContextProps{
    issues: IssuesProps[],
    fetchIssues: (query?: string) => Promise<void>,
    reloadList: () => void
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
                  key: item.id,
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
    
    console.log(`Issues: ${issues}`)

    function reloadList(){
      api('/repos/femendesf/GitHub-BLog/issues')
        .then(response => {
            const listIssues:IssuesProps[] = response.data.map( (item:any) => {
             
              return(
                {
                  key: item.id,
                  id: item.id,
                  title:item.title,
                  body:item.body,
                  createdAt: item.created_at
                }
              )

            })
           
            setIssues(listIssues)
           
        })
    }

    async function fetchIssues(query?: string) {

        try {
          const response = await api.get(`/search/issues`,{
         
            params:{
              q: `repo:femendesf/GitHub-Blog is:issue ${query}`
            }
          })

          console.log(`data.items : ${response.data.items}`)

            const items = response.data.items.map((item: any) => ({
              key: item.id,
              id: item.id,
              body: item.body,
              createdAt: item.created_at,
              title: item.title,
            }))

            setIssues(items)
          

        } catch (error) {
          console.error(error)
        }

    }
   
    return(
        <PublicationsContext.Provider value={{issues, fetchIssues, reloadList}}>
            {children}
        </PublicationsContext.Provider>
    )
}