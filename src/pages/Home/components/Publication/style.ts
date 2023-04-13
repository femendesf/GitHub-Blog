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
    `}

    div{
        ${tw`
            flex 
            justify-between 
            mb-5
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
            leading-loose
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