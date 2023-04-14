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
            text-xs
            text-base-span 
            h-[22px]
            leading-relaxed
           
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