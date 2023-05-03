import { ArrowSquareOut, CaretLeft, ChatCircle } from "@phosphor-icons/react"
import { StyleInfoIssue, IssueContainerStyle, StyleTextIssue } from "./style"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Issues(){

    const markdown = `Here is some JavaScript code:

    ~~~js
    console.log('It works!')
    ~~~
    `
    return(
        <IssueContainerStyle>

            <StyleInfoIssue>
                <section>
                    <a href=""><CaretLeft weight="bold" size={14}/> VOLTAR</a>
                    <a href="">VER NO GITHUB <ArrowSquareOut size={14} weight="bold"/></a>
                </section>
                
                <h1>JavaScript data types and data structures</h1>

                <div>
                    <span><img src="src\assets\logoGitHub.svg"/>femendesf</span>
                    <span><img src="src\assets\calendar.svg"/>Há um dia</span>
                    <span><ChatCircle weight="fill" size={18}/>5 comentários</span>
                </div>
           </StyleInfoIssue>

           <StyleTextIssue>
                <p>
                    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                    Dynamic typing
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>

                <div>
                <ReactMarkdown
                    children={markdown}
                    components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                        <SyntaxHighlighter
                            {...props}
                            children={String(children).replace(/\n$/, '')}
                            style={dark}
                            language={match[1]}
                            PreTag="div"
                        />
                        ) : (
                        <code {...props} className={className}>
                            {children}
                        </code>
                        )
                    }
                    }}
                    />
                    
                </div>
           </StyleTextIssue>

        </IssueContainerStyle>

        
       
    )
}