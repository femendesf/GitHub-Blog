import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface PublicationsContextProps{
    issues: IssuesProps[],
    infoProfile?: ProfileProps,
    numberIssue: number,
    buttonMessage: boolean,
    fetchIssues: (query?: string) => Promise<void>,
    reloadList: () => void,
    issueNumber:(num: number) => void,
    updateMessageButton: (state : boolean) => void
}

interface PublicationsContextType{
    children: ReactNode
}

interface IssuesProps{
    id: number,
    user: string,
    number: number,
    html_url: string,
    title: string,
    body: string,
    created_at: string,
    comments: number
}

interface ProfileProps{
  name: string,
  avatar_url: string,
  login: string,
  company: string,
  followers: number,
  html_url: string,
  bio: string
}
    
export const PublicationsContext = createContext({} as PublicationsContextProps)

export function PublicationsContextProvider({children} : PublicationsContextType){

    const [issues, setIssues] = useState<IssuesProps[]>([])

    const [infoProfile, setInfoProfile] = useState<ProfileProps>()
    const [numberIssue, setNumberIssue] = useState(0)
    const [buttonMessage, setButtonMessage] = useState(false)

    useEffect(() => {

      api('/repos/rocketseat-education/reactjs-github-blog-challenge/issues')
      .then(response => {
        console.log(response.data)
          const listIssues:IssuesProps[] = response.data.map( (item:any) => {
            console.log(item.user.login)
            return(
              {
                number: item.number,
                html_url: item.html_url,
                id: item.id,
                title:item.title,
                body:item.body,
                created_at: item.created_at,
                comments: item.comments,
                user: item.user.login
              }
            )
          })
          
          setIssues(listIssues)
           
        });
        
        api('/users/femendesf')
        .then(response => {
          
            setInfoProfile(response.data)
        });

    }, [])

    function reloadList(){
      
      api('/repos/rocketseat-education/reactjs-github-blog-challenge/issues')
        .then(response => {

          
            const listIssues:IssuesProps[] = response.data.map( (item:any) => {
              
              return(
                { 
                  number: item.number,
                  html_url: item.html_url,
                  id: item.id,
                  title:item.title,
                  body:item.body,
                  created_at: item.created_at,
                  comments: item.comments
                }
              )
            })
           
            setIssues(listIssues)
        })
    }

    async function fetchIssues(query?: string) {
        if(query != ""){
          setButtonMessage(true)
          try {
            const response = await api.get(`/search/issues`,{
              params:{
                q: `repo:rocketseat-education/reactjs-github-blog-challenge is:issue ${query}`
              }
            })
              const items = response.data.items.map((item: any) => ({
                key: item.id,
                id: item.id,
                body: item.body,
                created_at: item.created_at,
                title: item.title,
              }))
  
              setIssues(items)
          
          } catch (error) {
            console.error(error)
          }
        }else{
          alert("Digite algo!")
        }
       
    }
    
    function issueNumber(num: number){
      setNumberIssue(num)
    }

    function updateMessageButton(){
      setButtonMessage(false)
    }

    return(
        <PublicationsContext.Provider value={{issues, infoProfile, numberIssue, buttonMessage, fetchIssues, reloadList, issueNumber, updateMessageButton}}>
            {children}
        </PublicationsContext.Provider>
    )
}