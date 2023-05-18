import tw from 'twin.macro'
import styled from 'styled-components'

export const SearchContainerStyle = styled.form`
    ${tw`
        mb-12
        flex
        flex-col
        gap-3
    `}

    div{
        ${tw`
            flex
            justify-between
            items-center
        `}

        h1{
            ${tw`
                flex
                justify-between
                items-center
                text-lg
                text-base-subtitle
                font-bold
            `}
        }

        span{
            ${tw`
                text-sm
                text-base-span
            `}
        }
        
    }
   

    textarea{
        ${tw`
            bg-base-input 
            max-h-[50px]
            rounded-md 

            whitespace-normal
            overflow-hidden

            py-3 
            px-4 
            resize-none
            
            placeholder:text-base-label 
            text-base-text 

            border 
            border-base-border 
           
            focus:outline-none 
            focus:border-blue
        `}
    }

    button{
        ${tw`
            p-2
            rounded-md
            text-white
            mt-3
            text-sm
            bg-button_reset
            hover:bg-blue
        `}
    }
`