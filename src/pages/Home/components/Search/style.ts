import tw from 'twin.macro'
import styled from 'styled-components'

export const SearchContainerStyle = styled.div`
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
   

    input{
        ${tw`
            bg-base-input 
            h-[50px]
            rounded-md 
            py-3 
            px-4 
            placeholder:text-base-label 
            text-base-text 

            border 
            border-base-border 
           
            focus:outline-none 
            focus:border-blue
        `}
    }
`