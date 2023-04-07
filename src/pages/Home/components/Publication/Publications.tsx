import { PublicationIssueStyle, PublicationsContainerStyle } from "./style"

export function Publications(){

    const text = "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."

    return(
        <PublicationsContainerStyle>

          <PublicationIssueStyle>
            <div>
              <h1>JavaScript data types and data structures</h1>
              <span >Há 1 dia</span>
            </div>
            
            <p>
              {text.substring(0, text.length -150) + '...'}
            </p>
          </PublicationIssueStyle>

        </PublicationsContainerStyle>
    )
}