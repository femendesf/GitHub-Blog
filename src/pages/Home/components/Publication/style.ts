import tw from 'twin.macro'
import styled from 'styled-components'

export const PublicationsContainerStyle = styled.div`
    ${tw`
        grid 
        grid-cols-2 
        gap-8
       
    `}
`

export const PublicationIssueStyle = styled.div`
    ${tw`
        w-[416px] 
        h-[260px] 
        p-8 
        bg-base-post 
        rounded-xl
        hover:cursor-pointer
        duration-200
        hover:scale-110
        animate-[opacity_1s]
    `}

    div{
        ${tw`
            flex 
            justify-between 
            mb-5
            gap-4

        `}
    }

    h1{
        ${tw`
            text-xl 
            w-[283px]
        `}
    }

    span{
        ${tw`
            flex
            items-center
            justify-end
            text-xs
            text-base-span 
            h-[22px]
            leading-relaxed
            w-28
        `}
    }

    p{
        ${tw`
            h-[112px]
            max-w-[352px]
            overflow-hidden
        `}
    }
`

export const MessagePublicationEmpty = styled.div`
    ${tw`
        flex flex-col items-center justify-center gap-4 rounded-md border border-base-border p-10 animate-[opacity_1s]
    `}

    svg{
        ${tw`
            text-blue
        `}
    }
    h1{
        ${tw`
            text-xl
        `}
    }

    span{
        ${tw`
            text-base-text
        `}
    }

    button{
        ${tw`
            font-bold text-white bg-blue py-2 px-5 rounded-md hover:bg-button_reset
        `}
    }
`