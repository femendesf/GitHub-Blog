import { CaretLeft, ChatCircle } from "@phosphor-icons/react"
import { StyleInfoIssue, IssueContainerStyle, StyleTextIssue} from "./style"
import { useContext } from "react"
import { PublicationsContext } from "../../context/PublicationsContext"

import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from "react-syntax-highlighter"

import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import { NavLink } from "react-router-dom" 
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import { useEffect } from 'react';


export function Issues(){

    const {issues, infoProfile, numberIssue} = useContext(PublicationsContext)
    
    const Code = ({children, language} : any) => {
        return(
            <div>
                <SyntaxHighlighter language={language ?? ''} customStyle={{background: "#112131", borderRadius: 10}} style={dark}>
                    {children ?? ''}
                </SyntaxHighlighter>
            </div>
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return(
        
        <>
            {issues.map(issues => {

                const dateDifference = formatDistanceToNow(new Date(issues.created_at), {
                    addSuffix:true,
                    locale: ptBR
                })
                
                if(issues.number == numberIssue){
                    return(
                        <IssueContainerStyle>
                            <StyleInfoIssue>
                                <nav>
                                    <NavLink
                                        to='/'
                                    >
                                        <CaretLeft weight="bold" size={14}/> VOLTAR
                                    </NavLink>

                                    <NavLink
                                        to={issues.html_url}
                                        target="_blank"
                                    >
                                       VER NO GITHUB
                                    </NavLink>
                                    
                                </nav>
                    
                                <h1>{issues.title}</h1>

                                <div>
                                    <span><img src="src\assets\logoGitHub.svg"/>{issues.user}</span>
                                    <span><img src="src\assets\calendar.svg"/>{dateDifference.charAt(0).toLocaleUpperCase() + dateDifference.slice(1)}</span>
                                    <span><ChatCircle weight="fill" size={18}/>{issues.comments} comentários</span>
                                </div>
                            </StyleInfoIssue>

                            <StyleTextIssue>
                               
                                    <ReactMarkdown 
                                        
                                        components={{
                                            code: Code
                                        }}
                                    >
                                       {issues.body}

                                    </ReactMarkdown> 
                                
                            </StyleTextIssue>

                        </IssueContainerStyle>
                        
                    )
                }
            })}
        </>
    )
}